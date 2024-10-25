import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  isActive?: boolean;
  text: string;
  iconUrl: string;
  selector:string;
}

export default function SidebarButton({ iconUrl, text, isActive,selector }: Props) {

    const page = useSearchParams().get("page");
    const router = useRouter();




  return (
    <div
        onClick={()=>{
            if(page===selector) return null;
            router.push(`/students?page=${selector}`);
            
        }}
    className="flex flex-col items-center gap-1 justify-center cursor-pointer hover:text-primary group">
      <Image
        src={iconUrl}
        alt={text}
        height={36}
        width={36}
        className={twMerge(
          "rounded-md p-1 group-hover:bg-primary group-hover:bg-opacity-25",
          isActive && "bg-primary bg-opacity-25"
        )}
      />
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
