"use client";
import React from "react";
import usePageWidth from "@/lib/hooks/usepageWidth";
import LargeLayout from "./Layout/LargeLayout";
import SmallLayout from "./Layout/SmallLayout";
import StudentHomePage from "./pages/StudentHomePage";
import StudentLessonPlanPage from "./pages/StudentLessonPlanPage";
import { useSearchParams } from "next/navigation";

const main_pages = [
  <StudentHomePage key="home" />,
  <StudentLessonPlanPage key="lesson" />,
];

export default function StudentWrapper() {
  const width = usePageWidth();

  const selectedPage = useSearchParams().get("page")?.toString();

  if (width > 1200) {
    return (
      <LargeLayout
        selectedMainPage={
          selectedPage === "home" ? main_pages[0] : main_pages[1]
        }
      />
    );
  } else if (width > 900) {
    return <div>MediumLayout</div>;
  } else {
    return <SmallLayout />;
  }
}
