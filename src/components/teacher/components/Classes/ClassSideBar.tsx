import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  classes: string[];
  onClassChange: (selectedClass: string) => void;
  selectedClass: string;
}

export default function ClassSideBar({
  classes,
  onClassChange,
  selectedClass,
}: Props) {
  return (
    <div className="min-h-screen border-r w-[200px] px-3 py-3">
      <h2 className="bodyBig">Classes</h2>
      <div className="flex flex-col gap-2 py-2">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => onClassChange(cls)}
            className={`w-full flex items-center justify-between px-4 py-2   ${
              selectedClass === cls
                ? " border-b-primary border-b-2"
                : "border-b-[#10121C14] border-b-2"
            }`}
          >
            <span className={twMerge("font-semibold text-sm text-gray-600",selectedClass===cls?"text-primary":"")}>{cls}</span>
           
          </button>
        ))}
      </div>
    </div>
  );
}
