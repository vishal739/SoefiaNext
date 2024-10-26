import { Microphone } from "@phosphor-icons/react";
import { FileUp, Mic, Upload } from "lucide-react";

const TextAreaWithActions: React.FC<{
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
  }> = ({ label, placeholder, value, onChange }) => (
    <div className="space-y-2">
      <label className="bodySmall">{label}</label>
      <div className="space-y-2">
        <div className="relative">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full min-h-[150px] p-3 border rounded-md text-sm"
          />
          <div className="absolute bottom-3 rounded-full px-2 py-1 cursor-pointer hover:bg-gray-50  left-2 text-sm flex gap-2 items-center">
            <div className="aspect-square p-2  rounded-full bg-gray-100">
              <Microphone />
            </div>
            Dictate note
          </div>
        </div>
        <div className="flex gap-4 py-2">
          <button className="flex items-center gap-1 text-primary bg-[#E3E4FF] hover:text-primary/80 px-4 py-2   rounded-lg">
            <Mic className="w-4 h-4" />
            <span className="text-sm">Tell Delta</span>
          </button>
          <button className="flex items-center gap-1 text-primary hover:text-primary/80 px-4 py-2 border rounded-lg border-[#DFDAD3]">
            <FileUp className="w-4 h-4" />
            <span className="text-sm">Add URL</span>
          </button>
          <button className="flex items-center gap-1 text-primary hover:text-primary/80 px-4 py-2 border rounded-lg border-[#DFDAD3]">
            <Upload className="w-4 h-4" />
            <span className="text-sm">Upload Files</span>
          </button>
        </div>
      </div>
    </div>
  );

  export default TextAreaWithActions;