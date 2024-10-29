import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

interface Props {
  notebooks: string[];
  onClassChange: (selectedClass: string) => void;
  selectedNotebook: string;
}

export default function TNoteBookSidebar({
  onClassChange,
  notebooks,
  selectedNotebook,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b w-full px-3 py-3">
      {/* Desktop version */}
      <div className="hidden md:block min-h-screen border-r min-w-[120px] px-3 py-3">
        <h2 className="bodyBig">Notebooks</h2>
        <div className="flex flex-col gap-2 py-2">
          {notebooks.map((cls) => (
            <button
              key={cls}
              onClick={() => onClassChange(cls)}
              className={`w-full flex items-center justify-between px-4 py-2   ${
                selectedNotebook === cls
                  ? " border-b-primary border-b-2"
                  : "border-b-[#10121C14] border-b-2"
              }`}
            >
              <span
                className={twMerge(
                  "font-semibold w-full text-sm text-gray-600",
                  selectedNotebook === cls ? "text-primary" : ""
                )}
              >
                {cls}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <button
          className="w-full flex items-center justify-between px-4 py-2"
          onClick={toggleDropdown}
        >
          <span className="font-semibold text-sm text-gray-600">
            {selectedNotebook || "Select a notebook"}
          </span>
          <ChevronDown
            size={20}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="flex flex-col gap-2 py-2">
            {notebooks.map((cls) => (
              <button
                key={cls}
                onClick={() => {
                  onClassChange(cls);
                  setIsOpen(false);
                }}
                className={twMerge(
                  "w-full flex items-center justify-between px-4 py-2",
                  selectedNotebook === cls
                    ? "border-b-primary border-b-2 text-primary"
                    : "border-b-[#10121C14] border-b-2 text-gray-600"
                )}
              >
                <span className="font-semibold text-sm">{cls}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}