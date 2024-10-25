import React from "react";
import AllLesson from "../components/LessonNotes/AllLesson";

export default function StudentLessonPlanPage() {
  return (
    <div className="x-8 py-[2%] w-full flex flex-col gap-4">
      <div className="text-[18px] px-8 font-semibold text-slate-900">
        Notebooks
      </div>

      <AllLesson/>
    </div>
  );
}
