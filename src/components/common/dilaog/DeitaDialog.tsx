import React, { useState } from "react";
import { FileUp, Mic, Upload } from "lucide-react";
import { Microphone, X } from "@phosphor-icons/react";

interface DeltaDialogProps {
  description: string;
  onClose: () => void;
}

const DeltaDialog: React.FC<DeltaDialogProps> = ({ description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ">
      <div className="bg-white p-6 rounded-lg border w-full max-w-lg flex flex-col gap-6 items-center relative">
        <button onClick={onClose} className="absolute right-4 top-4">
            <X/>
        </button>
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="headline">Tell Delta</h2>
          <p className="regular">{description}</p>
        </div>

        <div className="text-lg bg-red-100 p-4 rounded-full ripple">
            <Microphone color="#E9655D" weight="fill" size={30} />
        </div>
        <span className="caption">Recording in progress, tap to stop</span>
        
        
      </div>
    </div>
  );
};

export default DeltaDialog;
