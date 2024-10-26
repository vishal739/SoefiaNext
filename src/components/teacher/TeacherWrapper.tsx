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

const main_pages = [
  <TLessons key={"lessons-t"} initialLessons={generateSampleLessons(20)} />,
  <TClasses key={"classes-t"} />,
  <TStudents key={"students-t"} />,
  <TNoteBook key={"notebook-t"} />,
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

    default:
      return main_pages[0];
  }
}

export default function TeacherWrapper() {
  const width = usePageWidth();

  const selectedPage = useSearchParams().get("page")?.toString();

  if (width > 1200) {
    return (
      <TLargeLayout selectedMainPage={returnContent(selectedPage ?? "lessons")} />
    );
  } else if (width > 900) {
    return <TMediumLayout />;
  } else {
    return <TSmallLayout />;
  }
}
