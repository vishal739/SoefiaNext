import React from "react";
import StudentCurrentLessonSummaryCard from "./StudentCurrentLessonSummaryCard";
import RecentLessonCard from "@/components/common/cards/LessonCardHorizontal";
import UpDown from "@/components/common/buttons/UpDown";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const lessons = [
  {
    day: "6",
    dayOfWeek: "Sat",
    lessonDate: "Today",
    classname: "Algebra I, Block A",
    topic: "Writing Equations to Model Relationships",
    launchLessonLink: "/students/live-lesson/7-mon-a",
  },
  {
    day: "7",
    dayOfWeek: "Mon",
    lessonDate: "Today",
    classname: "Algebra I, Block B",
    topic: "Writing Equations to Model Relationships",
    launchLessonLink: "/students/live-lesson/7-mon-a",
  },
  {
    day: "9",
    dayOfWeek: "Fri",
    lessonDate: "Today",
    classname: "Algebra I, Block E",
    topic: "Writing Equations to Model Relationships",
    launchLessonLink: "/students/live-lesson/7-mon-a",
  },
  {
    day: "8",
    dayOfWeek: "Tue",
    lessonDate: "Today",
    classname: "Algebra I, Block E",
    topic: "Writing Equations to Model Relationships",
    launchLessonLink: "/students/live-lesson/7-mon-a",
  },
  {
    day: "3",
    dayOfWeek: "Tue",
    lessonDate: "Today",
    classname: "Algebra I, Block E",
    topic: "Writing Equations to Model Relationships",
    launchLessonLink: "/students/live-lesson/7-mon-a",
  },
];

export default function StudentTopSummary() {
  const currentTime = false;
  const toshowLessons = lessons.slice(0, 4);
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-md w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-semibold text-slate-900">
          Upcoming Lesson
        </div>

        {!currentTime && (
          <UpDown
            functionRun={(open) => {
              setOpen(!open);
            }}
            isUp={isOpen}
          />
        )}
      </div>

      {/* show this with a ternary when current time matches  */}
      {currentTime ? (
        <StudentCurrentLessonSummaryCard
          classname=""
          date=""
          lessonLink=""
          lessonStatus=""
          topic=""
        />
      ) : (
        <>
          {isOpen && (
            <>
              {/* <p>
                showing {toshowLessons.length} lesson
                {toshowLessons.length > 0 ? "s" : ""}{" "}
              </p> */}
              <div className="flex flex-col  gap-2">
                {toshowLessons.map((ele, idx) => (
                  <RecentLessonCard
                    key={idx}
                    day={ele.day}
                    dayOfWeek={ele.dayOfWeek}
                    lessonDate={ele.lessonDate}
                    classname={ele.classname}
                    topic={ele.topic}
                    launchLessonLink={ele.launchLessonLink}
                  />
                ))}
              </div>

              <button className="w-fit px-4 flex items-center py-2 gap-2 border border-slate-400 rounded-md text-primary">
                View All <ArrowRight />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
