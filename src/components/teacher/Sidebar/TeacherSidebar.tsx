import SidebarButton from "@/components/common/buttons/SidebarButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const routes = [
  { name: "Lessons", icon: "/assets/homeIcon.svg", selector: "lessons" },
  { name: "Classes", icon: "/assets/lessonIcon.svg", selector: "classes" },
  { name: "Students", icon: "/assets/lessonIcon.svg", selector: "students" },
  { name: "Notebook", icon: "/assets/lessonIcon.svg", selector: "notebook" },
];

export default function TeacherSidebar() {
  /// to find the queryparam called page
  const page = useSearchParams().get("page");

  return (
    <div className="max-w-[75px] w-[75px] border-r flex flex-col justify-between min-h-screen py-[12px] px-2">
      {/* upper region  */}
      <div className="flex flex-col gap-8">
        {/* logo  */}
        <h1 className="italic font-bold text-md text-center">Soefia</h1>

        {/* routes */}
        <div className="flex flex-col gap-2">
          {routes.map((ele, idx) => (
            <SidebarButton
              iconUrl={ele.icon}
              text={ele.name}
              isActive={page?.toString() == ele.selector}
              key={idx}
              selector={ele.selector}
              isTeacher={true}
            />
          ))}
        </div>
      </div>
      {/* lower region */}
      <div>
        <Link href="/"></Link>
      </div>
    </div>
  );
}
