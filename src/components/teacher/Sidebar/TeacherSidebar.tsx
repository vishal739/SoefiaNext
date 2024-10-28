import SidebarButton from "@/components/common/buttons/SidebarButton";
import {
  Book,
  ChalkboardSimple,
  Gear,
  NoteBlank,
  Student,
  User,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const routes = [
  { name: "Lessons", icon: <Book />, selector: "lessons" },
  { name: "Classes", icon: <ChalkboardSimple />, selector: "classes" },
  { name: "Students", icon: <Student />, selector: "students" },
  { name: "Notebook", icon: <NoteBlank />, selector: "notebook" },
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
        <div className="flex flex-col gap-3">
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
      <div className="flex flex-col gap-2">
        <SidebarButton
          iconUrl=<Gear/>
          isTeacher
          selector="settings"
          text="Settings"
        />
        <SidebarButton
          iconUrl=<User/>
          isTeacher
          selector="Profile"
          text="Profile"
        />
      </div>
    </div>
  );
}
