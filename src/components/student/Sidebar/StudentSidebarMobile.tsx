import SidebarButton from "@/components/common/buttons/SidebarButton";
import { Gear, House, Student, User } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const routes = [
  { name: "Home", icon: <House />, selector: "home" },
  { name: "Lesson Notes", icon: <Student />, selector: "lesson" },
];

export default function StudentSidebarMobile() {
  const page = useSearchParams().get("page");

  return (
    <div className="w-full border-b flex justify-between items-center py-2 px-4">
      {/** logo  **/}
      <h1 className="italic font-bold text-md">Soefia</h1>
      {/** routes **/}
      <div className="flex gap-4">
        {routes.map((ele, idx) => (
          <SidebarButton
            iconUrl={ele.icon}
            text={ele.name}
            isActive={page?.toString() === ele.selector}
            key={idx}
            selector={ele.selector}
            isTeacher={false}
          />
        ))}
        <SidebarButton
          iconUrl={<Gear />}
          text="Settings"
          isTeacher={false}
          selector="settings"
        />
        <SidebarButton
          iconUrl={<User />}
          text="Profile"
          isTeacher={false}
          selector="settings"
        />
      </div>
    </div>
  );
}