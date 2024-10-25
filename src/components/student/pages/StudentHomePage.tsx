import React from "react";
import StudentCurrentLessonSummaryCard from "../components/StudentCurrentLessonSummaryCard";
import StudentTopSummary from "../components/StudentTopSummary";
import RecentLessonNotes from "../components/LessonNotes/RecentLessonNotes";

export default function StudentHomePage() {
  return <div className="px-8 py-[2%] w-full flex flex-col gap-4">
    <StudentTopSummary/>
    <RecentLessonNotes/>
  </div>;
}
