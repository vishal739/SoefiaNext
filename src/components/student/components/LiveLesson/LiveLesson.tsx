"use client";
import React from "react";
import { Mic, LogOut, Users2Icon } from "lucide-react";
import Image from "next/image";
import { Microphone, Pause } from "@phosphor-icons/react";

interface GroupMember {
  name: string;
  role: string;
}

interface HintProps {
  avatarUrl: string;
  message: string;
}

const Hint: React.FC<HintProps> = ({ avatarUrl, message }) => (
  <div className="flex flex-col gap-2">
    <span className="label">Hint</span>

    <div className="bg-[#10121C0A] p-4 rounded-lg flex items-start gap-3 shadow-sm">
      <div>
        <Image
          src={avatarUrl}
          alt="Teacher avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="caption">DeiTA</span>
      </div>
      <p className="text-gray-600 bg-white p-2 rounded-lg w-full">{message}</p>
    </div>
  </div>
);

const GroupMembers: React.FC<{
  members: Array<{ name: string; role: string }>;
}> = ({ members }) => (
  <div className="p-6 bg-white rounded-lg flex flex-col gap-2">
    <h3 className="label">Group A</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-3 border rounded-lg bg-[#10121C0A]"
        >
          <p className="bodySmall">{member.name}</p>
          <p className="label">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function LiveLesson() {
  const groupMembers: GroupMember[] = [
    { name: "You", role: "RecordKeeper" },
    { name: "John Davidson", role: "RecordKeeper" },
    { name: "Kenny Russell", role: "Spokesperson" },
    { name: "Elizabeth Houser", role: "Timekeeper" },
    { name: "Marcella Masculla", role: "Researcher" },
  ];

  return (
    <div className="p-6 w-full flex flex-col gap-4">
      {/* Header */}
      <header className="flex flex-col sm:flex-row bg-white p-6 rounded-md items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="headline">Basic function transformations</h1>
            <div className="flex items-center gap-4">
              <Users2Icon size={28} />
              <div>
                <span className="caption">CLASS</span>
                <p className="label">Algebra 1 | Block B</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-sm flex items-center gap-1">
            LESSON IN PROGRESS
          </span>
          <div className="bg-red-100 p-2 rounded-full ripple">
            <Microphone size={20} weight="fill" color="#E9655D" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Exercise Section */}
        <section className="bg-white rounded-lg p-6 flex flex-col gap-6">
          <h2 className="font-semibold">Exercise</h2>
          <div>
            <h3 className="bodySmall">Problem</h3>
            <p className="bodyBig">Name of the problem</p>
            <p className="regular">
              Each group is working on simplifying one of the six absolute value
              functions and in graphing that function. When a group has
              completed its work, it will post that work on the provided posting
              sheet and then review the posted sheets of the other groups to
              review and understand the solutions to all six functions. After
              this, we will review.
            </p>
          </div>
          <Hint
            avatarUrl="/testing/pfp.jpg"
            message="Hey! I think this might be helpful for you"
          />
        </section>

        {/* Graph and Question Section */}
        <section className="bg-white rounded-lg p-6 border">
          <Image
            src="/testing/test.png"
            alt="Graph"
            className="w-full h-auto"
            width={900}
            height={400}
          />
        </section>

        {/* Group Section */}
        <GroupMembers members={groupMembers} />

        {/* Progress Input Section */}
        <section className="bg-white p-6 rounded-lg flex flex-col gap-2">
          <h2 className="font-semibold">Group progress</h2>
          <div className="border rounded-lg p-4 relative">
            <textarea
              name=""
              placeholder="type your progress"
              rows={6}
              id=""
              className="outline-none border-none resize-none w-full focus:ring-0 ring-none"
            ></textarea>
            <div className="absolute bottom-4 cursor-pointer group flex gap-2 items-center">
              <div className="aspect-square group-hover:bg-[#10121c13] bg-[#10121C0A] rounded-full p-2">
                <Mic size={18} />
              </div>
              <span className="caption group-hover:text-black transition-al">
                Dictate
              </span>
            </div>
          </div>
        </section>
        <div className="h-44" />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="border border-slate-300 px-6 py-2 rounded-md flex text-primary items-center gap-2">
            <LogOut className="w-4 h-4" />
            Exit lesson
          </button>
          <div className="flex items-center gap-4">
            <div className="flex flex-col lg:items-end">
              <span className="caption">REMAINING LESSON TIME</span>
              <h3>00:15:09</h3>
            </div>
            <button className="bg-primary lg:text-md text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Pause weight="fill" />
              Pause for 15 seconds
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
