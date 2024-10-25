import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface UpDownProps {
  isUp: boolean;
  functionRun: (isUp: boolean) => void;
}

export default function UpDown({ functionRun, isUp }: UpDownProps) {
  return (
    <button
      onClick={() => {
        functionRun(isUp);
      }}
    >
      {isUp ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}
