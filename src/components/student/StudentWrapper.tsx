"use client";
import React from "react";
import usePageWidth from "@/lib/hooks/usepageWidth";
import LargeLayout from "./Layout/LargeLayout";
import SmallLayout from "./Layout/SmallLayout";
import StudentHomePage from "./pages/StudentHomePage";
import StudentLessonPlanPage from "./pages/StudentLessonPlanPage";
import { useSearchParams } from "next/navigation";
import LessonNotesPage from "./components/LessonNotes/LessonNotesPage";
import MediumLayout from "./Layout/MediumLayout";

const main_pages = [
  <StudentHomePage key="home" />,
  <StudentLessonPlanPage key="lesson" />,
];

function returnContent(page: string, lessonId?: string): React.JSX.Element {
  switch (page) {
    case "home":
      return main_pages[0];
    case "lesson":
      return main_pages[1];
    case "lesson-notes":
      return <LessonNotesPage lessonId={lessonId ?? ""} />;
    default:
      return main_pages[0];
  }
}

export default function StudentWrapper() {
  const width = usePageWidth();

  const selectedPage = useSearchParams().get("page")?.toString();

  if (width > 1200) {
    return (
      <LargeLayout selectedMainPage={returnContent(selectedPage ?? "home")} />
    );
   } else {
    return <SmallLayout  selectedMainPage={returnContent(selectedPage ?? "home")} />;
  }
}
