import { Eye, File } from "lucide-react";
import React from "react";

export default function RecentLessonCard({
  noteDate,
  classname,
  lessonGoal,
  keyConcept,
  lessonNotesLink,
}: NotebookCard) {
  return (
    <div className="flex items-center justify-between bg-white  rounded-lg p-4 border border-[#DFDAD3]">
      <div className="aspect-square p-2 bg-slate-100 rounded-lg mr-4">
        <File />
      </div>

      <div>
        <div className="caption">NOTE DATE</div>
        <div className="text-sm">{noteDate}</div>
      </div>

      <div className="flex-1 mx-4">
        <div className="caption">CLASS</div>
        <div className="text-sm">{classname}</div>
      </div>

      <div className="flex-1 mx-4">
        <div className="caption">LESSON GOAL</div>
        <div className="text-md font-semibold">{lessonGoal}</div>
      </div>

      <div className="flex-1 mx-4">
        <div className="caption">KEY CONCEPT</div>
        <div className="text-sm">{keyConcept}</div>
      </div>

      <a
        href={lessonNotesLink}
        className="text-primary group flex gap-2 border hover:bg-primary bg-opacity-5 hover:bg-opacity-10 transition-all border-neutral-300 rounded-md p-2"
      >
        <Eye className="group-hover:text-indigo-900" />
        <span className="group-hover:text-indigo-900">See lesson notes</span>
      </a>
    </div>
  );
}
