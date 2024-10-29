import React from "react";
import { twMerge } from "tailwind-merge";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  isActive?: boolean;
  text: string;
  iconUrl: JSX.Element;
  selector: string;
  isTeacher: boolean;
}

export default function SidebarButton({
  iconUrl,
  text,
  isActive,
  selector,
  isTeacher,
}: Props) {
  const page = useSearchParams().get("page");
  const router = useRouter();

  return (
    <div
      onClick={() => {
      if (page === selector) return;
      if (isTeacher) {
        router.push(`/teacher/?page=${selector}`);
      } else {
        router.push(`/students/?page=${selector}`);
      }
      }}
      className="flex flex-col items-center gap-1 justify-center cursor-pointer hover:text-primary group"
    >
      <div className={twMerge(page == selector ? "text-primary" : "", "text-[20px]")}>
      {iconUrl}
      </div>
      <span
      className={twMerge(
        "text-[12px] 2xl:text-[14px] text-center text-text-2 group-hover:text-primary 2xl:leading-[15px] leading-[14px]",
        isActive && "text-primary"
      )}
      >
      {text}
      </span>
    </div>
  );
}
