import {
  PlayIcon,
  EditIcon,
  Notebook,
  MoreHorizontal,
} from "lucide-react";
import React from "react";

export default function LessonCardHorizontal({
  day,
  dayOfWeek,
  lessonDate,
  classname,
  topic,
  launchLessonLink,
}: LessonNote) {
  const today = new Date();
  const lessonDateObj = new Date(lessonDate);
  const isToday = today.toDateString() === lessonDateObj.toDateString();
  const isPast = lessonDateObj < today && !isToday;
  const isFuture = lessonDateObj > today;

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center justify-between bg-white rounded-lg p-4 border border-[#DFDAD3] ${
        isToday ? "border-l-8 border-l-[#DFDAD3]" : ""
      }`}
    >
      {isToday || isFuture ? (
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center justify-center gap-2 bg-red-100 border-l-4 border-red-500 rounded-lg p-2 px-4 mr-6">
            <span className="text-lg font-bold">{day}</span>
            <span className="text-sm capitalize">{dayOfWeek}</span>
          </div>
          <div>
            <div className="caption">LESSON DATE</div>
            <div className="text-sm">{lessonDate}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center justify-center gap-2 bg-[#F9F3EB] border-l-4 border-[#8E8881] rounded-lg p-2 px-4 mr-6">
            <span className="text-lg font-bold">{day}</span>
            <span className="text-sm capitalize">{dayOfWeek}</span>
          </div>
          <div>
            <div className="caption">LESSON DATE</div>
            <div className="text-sm">{lessonDate}</div>
          </div>
        </div>
      )}

      <div className="flex-1 lg:mx-4 mb-4 md:mb-0">
        <div className="caption">CLASS</div>
        <div className="text-sm">{classname}</div>
      </div>

      <div className="flex-1 lg:mx-4 mb-4 md:mb-0">
        <div className="caption">TOPIC</div>
        <div className="text-sm font-semibold">{topic}</div>
      </div>

      <div className="aspect-square p-2 text-primary border rounded-md mr-2 mb-4 md:mb-0">
        <MoreHorizontal size={14} />
      </div>

      <div className="flex items-center space-x-4">
        {isToday && (
          <a
            href={launchLessonLink}
            className="bg-primary bg-opacity-10 text-primary hover:text-indigo-800 font-semibold px-4 py-2 gap-2 rounded-lg flex items-center"
          >
            <PlayIcon size={12} />
            Launch lesson
          </a>
        )}
        {isPast && (
          <a
            href={""}
            className=" bg-opacity-10 text-primary border hover:text-indigo-800 font-semibold px-4 py-2 gap-2 rounded-lg flex items-center"
          >
            <Notebook size={12} />
            Review notes
          </a>
        )}
        {isFuture && (
          <a
            href={""}
            className="bg-primary bg-opacity-10 text-primary hover:text-indigo-800 font-semibold px-4 py-2 gap-2 rounded-lg flex items-center"
          >
            <EditIcon size={12} />
            Edit lesson
          </a>
        )}
      </div>
    </div>
  );
}
