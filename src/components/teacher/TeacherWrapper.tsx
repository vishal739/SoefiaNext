"use client";
import usePageWidth from "@/lib/hooks/usepageWidth";
import { useSearchParams } from "next/navigation";
import React from "react";
import TLargeLayout from "./layout/TLargeLayout";
import TMediumLayout from "./layout/TMediumLayout";
import TSmallLayout from "./layout/TSmallLayout";
import TLessons from "./pages/TLessons";
import TClasses from "./pages/TClasses";
import TStudents from "./pages/TStudents";
import TNoteBook from "./pages/TNoteBook";
import generateSampleLessons from "@/lib/sample/generateLessons";
import TSettings from "./pages/TSettings";
import TReviewLessonNote from "./components/TNoteBook/TReviewLessonNotes";

const main_pages = [
  <TLessons key={"lessons-t"} initialLessons={generateSampleLessons(200)} />,
  <TClasses key={"classes-t"} />,
  <TStudents key={"students-t"} />,
  <TNoteBook key={"notebook-t"} />,
  <TSettings key={"settings-t"} />,
  <TReviewLessonNote key={"unknwon"} />
];

function returnContent(page: string, lessonId?: string): React.JSX.Element {
  switch (page) {
    case "lessons":
      return main_pages[0];
    case "classes":
      return main_pages[1];
    case "students":
      return main_pages[2];
    case "notebook":
      return main_pages[3];
    case "settings":
      return main_pages[4];
    case "review":
      return main_pages[5];

    default:
      return main_pages[0];
  }
}

export default function TeacherWrapper() {
  const width = usePageWidth();

  const selectedPage = useSearchParams().get("page")?.toString();

  if (width > 1200) {
    return (
      <TLargeLayout
        selectedMainPage={returnContent(selectedPage ?? "lessons")}
      />
    );
   } else {
    return <TSmallLayout selectedMainPage={returnContent(selectedPage ?? "lessons")} />;
  }
}
