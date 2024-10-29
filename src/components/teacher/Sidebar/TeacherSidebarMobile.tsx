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

export default function TeacherSidebarMobile() {
  const page = useSearchParams().get("page");

  return (
    <div className="w-full border-b flex justify-center py-[12px] px-2">
      <div className="flex gap-4">
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
        <SidebarButton
          iconUrl={<Gear />}
          isTeacher
          selector="settings"
          text="Settings"
        />
        <SidebarButton
          iconUrl={<User />}
          isTeacher
          selector="Profile"
          text="Profile"
        />
      </div>
    </div>
  );
}