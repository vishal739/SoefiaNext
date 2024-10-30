import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

interface Props {
  classes: string[];
  onClassChange: (selectedClass: string) => void;
  selectedClass: string;
}

export default function ClassSideBarMobile({
  classes,
  onClassChange,
  selectedClass,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b lg:w-[300px] w-full px-3 py-3">
      <button
        className="w-full md:hidden flex items-center justify-between px-4 py-2"
        onClick={toggleDropdown}
      >
        <span className="font-semibold text-sm text-gray-600">
          {selectedClass || "Select a class"}
        </span>
        <ChevronDown
          size={20}
          className={`transition-transform  ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <span className="md:block hidden">Classes</span>
      {isOpen && (
        <div className="flex md:hidden flex-col gap-2 py-2">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                onClassChange(cls);
                setIsOpen(false);
              }}
              className={twMerge(
                "w-full flex items-center justify-between px-4 py-2",
                selectedClass === cls
                  ? "border-b-primary border-b-2 text-primary"
                  : "border-b-[#10121C14] border-b-2 text-gray-600"
              )}
            >
              <span className="font-semibold text-sm">{cls}</span>
            </button>
          ))}
        </div>
      )}
      <div className="md:flex hidden  flex-col gap-2 py-2">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                onClassChange(cls);
                setIsOpen(false);
              }}
              className={twMerge(
                "w-full flex items-center justify-between px-4 py-2",
                selectedClass === cls
                  ? "border-b-primary border-b-2 text-primary"
                  : "border-b-[#10121C14] border-b-2 text-gray-600"
              )}
            >
              <span className="font-semibold text-sm">{cls}</span>
            </button>
          ))}
        </div>
    </div>
  );
}