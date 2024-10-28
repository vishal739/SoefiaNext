import SidebarButton from "@/components/common/buttons/SidebarButton";
import { House, Student } from "@phosphor-icons/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const routes = [
  { name: "Home", icon: <House/>, selector: "home" },
  { name: "Lesson Notes", icon:<Student/>, selector: "lesson" },
];

export default function StudentSidebar() {
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
              isActive={page?.toString()==ele.selector}
              key={idx}
              selector={ele.selector}
              isTeacher={false}
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
