import { EllipsisIcon, Play, PlayIcon } from "lucide-react";
import React from "react";

export default function LessonCard({
  day,
  dayOfWeek,
  lessonDate,
  classname,
  topic,
  launchLessonLink,
}: LessonNote) {
  return (
    <div className="flex items-center justify-between bg-white border-l-8  rounded-lg p-4  border border-[#DFDAD3]">
      <div className="flex items-center">
        <div className="flex  items-center justify-center gap-2 border-l-red-500 border-l-4 bg-red-100 rounded-lg p-2 px-4 mr-6 ">
          <span className="text-lg font-bold">{day}</span>
          <span className="text-sm capitalize">{dayOfWeek}</span>
        </div>
        <div>
          <div className="caption">LESSON DATE</div>
          <div className="text-sm">{lessonDate}</div>
        </div>
      </div>

      <div className="flex-1 mx-4">
        <div className="caption">CLASS</div>
        <div className="text-sm">{classname}</div>
      </div>

      <div className="flex-1 mx-4">
        <div className="caption">TOPIC</div>
        <div className="text-sm font-semibold">{topic}</div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-primary hover:text-gray-600 border aspect-square rounded-md p-2 hover:bg-primary hover:bg-opacity-15 transition-colors border-[#DFDAD3]">
          <EllipsisIcon size={14} />
        </button>
        <a
          href={launchLessonLink}
          className="bg-primary bg-opacity-10 text-primary hover:text-indigo-800 font-semibold px-4 py-2 gap-2 rounded-lg flex items-center"
        >
          <PlayIcon size={12} />
          Launch lesson
        </a>
      </div>
    </div>
  );
}
