import { Eye, File } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function RecentLessonCard({
  noteDate,
  classname,
  lessonGoal,
  keyConcept,
  lessonNotesLink,
}: NotebookCard) {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white rounded-lg p-4 border border-[#DFDAD3]">
      <div className="aspect-square p-2 bg-slate-100 rounded-lg mb-4 lg:mb-0 lg:mr-4">
        <File />
      </div>

      <div className="mb-4 lg:mb-0">
        <div className="caption">NOTE DATE</div>
        <div className="text-sm">{noteDate}</div>
      </div>

      <div className="flex-1 mb-4 lg:mb-0 lg:mx-4">
        <div className="caption">CLASS</div>
        <div className="text-sm">{classname}</div>
      </div>

      <div className="flex-1 mb-4 lg:mb-0 lg:mx-4">
        <div className="caption">LESSON GOAL</div>
        <div className="text-md font-semibold">{lessonGoal}</div>
      </div>

      <div className="flex-1 mb-4 lg:mb-0 lg:mx-4">
        <div className="caption">KEY CONCEPT</div>
        <div className="text-sm">{keyConcept}</div>
      </div>

      <button
        onClick={() => {
          if (router) {
            // add queryparams as lessonId="lessonId"
            router.push(`/students?lessonId=${lessonNotesLink}&page=lesson-notes`);
          }
        }}
        className="text-primary group flex gap-2 border hover:bg-primary bg-opacity-5 hover:bg-opacity-10 items-center transition-all border-neutral-300 rounded-md p-2"
      >
        <Eye className="group-hover:text-indigo-900" size={14} />
        <span className="group-hover:text-indigo-900 text-sm">See lesson notes</span>
      </button>
    </div>
  );
}
