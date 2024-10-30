import React, { useState, useCallback } from "react";
import { X } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

interface GroupMember {
  id: string;
  name: string;
  role: string;
}

export interface GroupData {
  [groupName: string]: GroupMember[];
}

const SortableItem: React.FC<{ student: GroupMember; id: string }> = ({
  student,
  id,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        p-4 bg-gray-50 rounded-lg cursor-move
        ${!student.name ? "opacity-50" : ""}
        hover:bg-gray-100 transition-colors
      `}
      {...attributes}
      {...listeners}
    >
      <p className="text-gray-900 font-medium">
        {student.name || "Student name"}
      </p>
      <p className="text-gray-600 text-sm">{student.role || ""}</p>
    </div>
  );
};

const DraggableCard: React.FC<{ student: GroupMember }> = ({ student }) => (
  <div className="p-4 bg-gray-50 rounded-lg shadow-lg ring-2 ring-blue-500">
    <p className="text-gray-900 font-medium">
      {student.name || "Student name"}
    </p>
    <p className="text-gray-600 text-sm">{student.role || ""}</p>
  </div>
);

interface GroupPreviewProps {
  groups: GroupData;
  onChange?: (newGroups: GroupData) => void;
}

const GroupPreview: React.FC<GroupPreviewProps> = ({ groups: initialGroups, onChange }) => {
  // Keep track of both temporary and committed states
  const [tempGroups, setTempGroups] = useState<GroupData>(initialGroups);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [draggedStudent, setDraggedStudent] = useState<GroupMember | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findGroupAndStudent = useCallback((id: UniqueIdentifier): [string | undefined, GroupMember | undefined] => {
    for (const [groupName, students] of Object.entries(tempGroups)) {
      const student = students.find(s => s.id === id);
      if (student) {
        return [groupName, student];
      }
    }
    return [undefined, undefined];
  }, [tempGroups]);

  const handleDragStart = (event: DragStartEvent) => {
    const [, student] = findGroupAndStudent(event.active.id);
    setActiveId(event.active.id);
    setDraggedStudent(student || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over || !active.id || !over.id) {
      setActiveId(null);
      setDraggedStudent(null);
      return;
    }

    const [activeGroupName, activeStudent] = findGroupAndStudent(active.id);
    const [overGroupName] = findGroupAndStudent(over.id);

    if (!activeGroupName || !overGroupName || !activeStudent) {
      setActiveId(null);
      setDraggedStudent(null);
      return;
    }

    if (activeGroupName === overGroupName) {
      // Same group - just reorder
      const items = [...tempGroups[activeGroupName]];
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);

      if (oldIndex !== newIndex) {
        const newGroups = {
          ...tempGroups,
          [activeGroupName]: arrayMove(items, oldIndex, newIndex),
        };
        setTempGroups(newGroups);
        setHasUnsavedChanges(true);
      }
    } else {
      // Different groups - move item
      const newGroups = { ...tempGroups };
      const activeItems = [...newGroups[activeGroupName]];
      const overItems = [...newGroups[overGroupName]];
      
      const activeIndex = activeItems.findIndex(item => item.id === active.id);
      const overIndex = overItems.findIndex(item => item.id === over.id);
      
      const [movedItem] = activeItems.splice(activeIndex, 1);
      overItems.splice(overIndex, 0, movedItem);
      
      newGroups[activeGroupName] = activeItems;
      newGroups[overGroupName] = overItems;
      
      setTempGroups(newGroups);
      setHasUnsavedChanges(true);
    }

    setActiveId(null);
    setDraggedStudent(null);
  };

  const handleSave = () => {
    onChange?.(tempGroups);
    setHasUnsavedChanges(false);
  };

  // Update temporary state when props change
  React.useEffect(() => {
    setTempGroups(initialGroups);
    setHasUnsavedChanges(false);
  }, [initialGroups]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToWindowEdges]}
    >
      <div className="md:p-6 p-2 flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
          <h2 className="headline">Group preview</h2>
        </div>
        <p className="caption">
          You can rearrange students in groups by grabbing a students card and
          dragging it to a different group. Changes won&apos;t be saved until you click the Save button.
        </p>

        <div className="flex flex-col gap-4">
          {Object.entries(tempGroups).map(([groupName, students]) => (
            <div key={groupName} className="space-y-4 flex md:flex-row flex-col md:items-center md:gap-6 border-b py-2">
              <h3 className="label">{groupName}</h3>
              <div>
                <SortableContext
                  items={students.map(s => s.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="flex md:flex-row flex-col gap-4">
                    {students.map((student) => (
                      <SortableItem
                        key={student.id}
                        id={student.id}
                        student={student}
                      />
                    ))}
                  </div>
                </SortableContext>
              </div>
            </div>
          ))}
        </div>

        <DragOverlay>
          {activeId && draggedStudent ? (
            <DraggableCard student={draggedStudent} />
          ) : null}
        </DragOverlay>
        <div className="flex justify-end py-2">
          <button 
            className={`px-4 py-2 rounded-lg text-sm ${
              hasUnsavedChanges 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleSave}
            disabled={!hasUnsavedChanges}
          >
            {hasUnsavedChanges ? 'Save Changes' : 'No Changes'}
          </button>
        </div>
      </div>
    </DndContext>
  );
};

export default GroupPreview;