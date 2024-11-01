import { Microphone } from "@phosphor-icons/react";
import React from "react";

interface VoiceTestDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceTestDialog: React.FC<VoiceTestDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const texts = [
    "The quick brown fox jumped over the lazy dog",
    "Hello, how are you today?",
    "Thank you for your time.",
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-6 rounded-lg w-full min-w-[40%]  border flex flex-col gap-3 items-center justify-center sm:p-4 sm:max-w-md">
        <h2 className="headline text-center">Voice Sample Needed</h2>
        <p className="text-sm text-gray-500 text-center">
          We want to ask you for a voice sample, so we can recognize you in
          class. Start recording and read the text below.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-lg bg-red-100 p-4 rounded-full ripple border-2 border-white">
            <Microphone color="#E9655D" weight="fill" size={30} />
          </div>
          <p className="text-sm text-gray-400">recording in progress</p>
        </div>
        <p className="text-lg text-gray-600 text-center">
          The quick brown fox jumped over the lazy dog
        </p>
        <div className="flex flex-col sm:flex-row justify-between pt-4 w-full gap-2">
          <button className="px-4 py-2 rounded-lg text-primary border border-primary text-sm w-full sm:w-auto">
            Privacy information
          </button>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-primary border border-primary text-sm w-full sm:w-auto"
            >
              Record again
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-white text-sm bg-primary w-full sm:w-auto"
            >
              Send sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceTestDialog;
