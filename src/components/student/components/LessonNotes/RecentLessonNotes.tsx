import RecentLessonCard from "@/components/common/cards/LessonNoteCard";
import { ArrowRight } from "lucide-react";
import React from "react";

const lessons = [
  {
    noteDate: "4 Oct 24",
    classname: "Algebra I, Block A",
    lessonGoal: "Standard Deviations",
    keyConcept: "Understanding standard deviation",
    lessonNotesLink: "/lesson-notes/4-oct-24",
  },

  {
    noteDate: "5 Oct 24",
    classname: "Geometry, Block B",
    lessonGoal: "Triangles",
    keyConcept: "Properties of triangles",
    lessonNotesLink: "/lesson-notes/5-oct-24",
  },
  {
    noteDate: "6 Oct 24",
    classname: "Calculus, Block C",
    lessonGoal: "Derivatives",
    keyConcept: "Understanding derivatives",
    lessonNotesLink: "/lesson-notes/6-oct-24",
  },
  {
    noteDate: "7 Oct 24",
    classname: "Physics, Block D",
    lessonGoal: "Newton's Laws",
    keyConcept: "Newton's three laws of motion",
    lessonNotesLink: "/lesson-notes/7-oct-24",
  },
];

export default function RecentLessonNotes() {
  const toshowLessons = lessons.slice(0, 4);

  return (
    <div className="bg-white rounded-md p-6 flex flex-col gap-6">
      <h2 className="bodyBig">Recent Lessons</h2>

      <div className="flex flex-col gap-2">
        {toshowLessons.map((lesson, idx) => (
          <RecentLessonCard
            key={idx}
            noteDate={lesson.noteDate}
            classname={lesson.classname}
            lessonGoal={lesson.lessonGoal}
            keyConcept={lesson.keyConcept}
            lessonNotesLink={lesson.lessonNotesLink}
          />
        ))}

        <button className="w-fit px-4 flex items-center py-2 gap-2 border border-slate-400 rounded-md text-primary">
          View All <ArrowRight />
        </button>
      </div>
    </div>
  );
}