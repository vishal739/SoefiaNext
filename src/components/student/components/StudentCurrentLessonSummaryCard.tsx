import Link from "next/link";
import React from "react";

interface Props {
  date: string; //in 7/12/2024 format
  classname: string;
  topic: string;
  lessonLink: string;
  lessonStatus: string;
}

export default function StudentCurrentLessonSummaryCard({date,lessonLink,lessonStatus,topic,classname}:Props) {
  return (
    <div className="w-full border border-[#B9BAED] rounded-lg p-4 border-b-6 border-b-4 border-b-[#B9BAED]">
      {/* upper info  */}
      <div className="flex gap-4">
        {/* calendar design  */}
        <div className="bg-light-red p-2 px-6 w-fit rounded-md border-t-4 flex flex-col items-center justify-center border-red-500">
          <h2 className="font-bold text-lg">10</h2>
          <span className="text-def-text">Thr</span>
        </div>
        <div>
          <h2 className="caption">LESSON DATE</h2>
          <span>today</span>
        </div>
      </div>

      {/* middle details  */}
      <div className="flex flex-col gap-2 py-4">
        <div>
          <span className="caption">CLASS</span>
          <h3>Algebra I, Block A</h3>
        </div>
        <div>
          <span className="caption">TOPIC</span>
          <h4 className="text-[23px] font-medium text-slate-900">Writing Equations to Model Relationships</h4>
        </div>
      </div>

      {/* joining link button */}
      <Link href="/" className="bg-primary rounded-md px-4 py-2 hover:bg-opacity-30">
        Join Lesson
      </Link>
      <div className="h-4"></div>
    </div>
  );
}
