import RecentLessonCard from "@/components/common/cards/LessonNoteCard";
import { Search } from "lucide-react";
import React, { useState } from "react";

const lessons = [
  {
    noteDate: "4 Oct 24",
    classname: "Algebra I, Block A",
    lessonGoal: "Standard Deviations",
    keyConcept: "Understanding standard deviation",
    lessonNotesLink: "120012",
  },
  {
    noteDate: "5 Oct 24",
    classname: "Geometry, Block B",
    lessonGoal: "Triangles",
    keyConcept: "Properties of triangles",
    lessonNotesLink: "120012",
  },
  {
    noteDate: "6 Oct 24",
    classname: "Calculus, Block C",
    lessonGoal: "Derivatives",
    keyConcept: "Understanding derivatives",
    lessonNotesLink: "120012",
  },
  {
    noteDate: "7 Oct 24",
    classname: "Physics, Block D",
    lessonGoal: "Newton's Laws",
    keyConcept: "Newton's three laws of motion",
    lessonNotesLink: "120012",
  },
];

export default function AllLesson() {
  const [selectedClass, setSelectedClass] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredLessons = lessons
    .filter((lesson) =>
      selectedClass ? lesson.classname === selectedClass : true
    )
    .filter((lesson) =>
      searchTerm
        ? lesson.lessonGoal.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    .sort((a, b) => {
      const dateA = new Date(a.noteDate);
      const dateB = new Date(b.noteDate);
      return sortOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  const uniqueClasses = [...new Set(lessons.map((lesson) => lesson.classname))];

  return (
    <div className="bg-white rounded-md p-6">
      <div className="flex items-center justify-between gap-4 py-8">
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            <span>Class</span>
            <select
              className="bg-white p-2 border rounded-md "
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">All Classes</option>
              {uniqueClasses.map((classname, idx) => (
                <option key={idx} className="caption" value={classname}>
                  {classname}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span>Search notes</span>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by lesson goal"
                className="p-2 rounded-md border "
              />
              <Search className="absolute right-2 bottom-2 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex gap-1 border p-2 text-primary">
          <span>Sort by date {" "} </span>
          <select
          className="bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc"> Ascending</option>
            <option value="desc"> Descending</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {filteredLessons.map((lesson, idx) => (
          <RecentLessonCard
            key={idx}
            noteDate={lesson.noteDate}
            classname={lesson.classname}
            lessonGoal={lesson.lessonGoal}
            keyConcept={lesson.keyConcept}
            lessonNotesLink={lesson.lessonNotesLink}
          />
        ))}
      </div>
    </div>
  );
}
