import Link from "next/link";
import React from "react";
import { ChevronDown, Copy, Edit2Icon, Grid2X2, List, Play, Search, Square } from "lucide-react";
import { camelCaseToTwoLetters } from "@/lib/formatter/camelCaseToTwoLetters";

interface LessonCardProps {
  lesson: LessonNote;
  isDraft?: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, isDraft = false }) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-center flex flex-col bg-[#F9F3EB] px-2 py-1  items-center justify-center border-t-4 border-t-red-600 rounded-md ">
            <div className="font-bold ">{lesson.day}</div>
            <div className="text-sm text-gray-600">{lesson.dayOfWeek}</div>
          </div>
          <div>
            <div className="caption">LESSON DATE</div>
            <div>{lesson.lessonDate}</div>
          </div>
        </div>
        {isDraft ? (
          <span className="px-2 py-1 text-sm text-orange-600 bg-orange-50 rounded">
            DRAFT
          </span>
        ) : (
          <Link
            href={lesson.launchLessonLink}
            className="px-4 py-2 flex items-center gap-1 bg-[#E3E4FF]  text-primary text-sm  font-semibold rounded-md "
          >
            <Play size={16} />
            Launch
          </Link>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <div className="caption">CLASS</div>
          <div className="label">{lesson.classname}</div>
        </div>
        <div>
          <div className="caption">TOPIC</div>
          <div className="bodyBig">{lesson.topic}</div>
        </div>
        <div className="flex gap-4 pt-2">
          <button
            className="flex items-center gap-2 border rounded-md px-4 py-2 border-[#DFDAD3] text-primary hover:bg-[#5458c918] transition-colors"
            onClick={() => console.log("Edit lesson", lesson)}
          >
            <Edit2Icon size={14} />
            <span className="text-sm">Edit lesson</span>
          </button>
          <button
            className="flex items-center gap-2 border rounded-md px-4 py-2 border-[#DFDAD3] text-primary hover:bg-[#5458c918] transition-colors"
            onClick={() => console.log("Duplicate lesson", lesson)}
          >
            <Copy size={14} />
            <span className="text-sm">Duplicate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const groupLessonsByTime = (
  lessons: LessonNote[],
  isCompleted: boolean
): GroupedLessons => {
  const today = new Date();
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
  const startOfNextWeek = new Date(endOfWeek);
  startOfNextWeek.setDate(endOfWeek.getDate() + 1);
  const endOfNextWeek = new Date(startOfNextWeek);
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
  const next30Days = new Date(today);
  next30Days.setDate(today.getDate() + 30);

  if (isCompleted) {
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return {
      thisMonth: lessons.filter((lesson) => {
        const lessonDate = new Date(lesson.lessonDate);
        return lessonDate >= startOfMonth && lessonDate < today;
      }),
      olderLessons: lessons.filter((lesson) => {
        const lessonDate = new Date(lesson.lessonDate);
        return lessonDate < startOfMonth;
      }),
    };
  }

  return {
    today: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate.toDateString() === today.toDateString();
    }),
    thisWeek: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate > today && lessonDate <= endOfWeek;
    }),
    nextWeek: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate >= startOfNextWeek && lessonDate <= endOfNextWeek;
    }),
    next30Days: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate > endOfNextWeek && lessonDate <= next30Days;
    }),
  };
};

type TabType = "upcoming" | "completed";
type ViewType = "grid" | "list";
type SortType = "closest" | "furthest";

interface TLessonsProps {
  initialLessons?: LessonNote[];
}

const TLessons: React.FC<TLessonsProps> = ({ initialLessons = [] }) => {
  const [selectedTab, setSelectedTab] = React.useState<TabType>("upcoming");
  const [selectedClass, setSelectedClass] =
    React.useState<string>("All classes");
  const [selectedStatus, setSelectedStatus] =
    React.useState<string>("All statuses");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [viewType, setViewType] = React.useState<ViewType>("grid");
  const [sortType, setSortType] = React.useState<SortType>("closest");

  const [lessons] = React.useState<LessonNote[]>(initialLessons);

  const filteredLessons = React.useMemo(() => {
    return lessons.filter((lesson) => {
      if (selectedClass !== "All classes" && lesson.classname !== selectedClass)
        return false;
      if (
        searchQuery &&
        !lesson.topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }, [lessons, selectedClass, searchQuery]);

  const groupedLessons = React.useMemo(() => {
    return groupLessonsByTime(filteredLessons, selectedTab === "completed");
  }, [filteredLessons, selectedTab]);

  return (
    <div className="p-6 w-[94%] flex flex-col gap-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Lessons</h1>
        <Link
          href="/create-lesson"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Create Lesson
        </Link>
      </div>

      <div className="flex gap-4 border-b">
        <button
          className={`pb-2 px-1 ${
            selectedTab === "upcoming"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`pb-2 px-1 ${
            selectedTab === "completed"
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4 rounded-md bg-white ">
        <div className="flex justify-between items-end  gap-4 ">
          <div className="flex gap-4">
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option>All classes</option>
                {Array.from(new Set(lessons.map((l) => l.classname))).map(
                  (className) => (
                    <option key={className}>{className}</option>
                  )
                )}
              </select>
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option>All statuses</option>
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
            <div className=" ">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search lessons
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 pl-8 border rounded-md"
                  placeholder="Search"
                />
                <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <button
              className="text-primary px-4 py-2 flex items-center gap-1 rounded-md border text-sm font-semibold"
              onClick={() =>
                setSortType(sortType === "closest" ? "furthest" : "closest")
              }
            >
              Sort by date: {sortType === "closest" ? "Closest" : "Furthest"} <ChevronDown size={14} />
            </button>
            <button
              className="text-primary px-4 py-2 flex items-center gap-2 rounded-md border text-sm font-semibol"
              onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
            >
            {viewType==="list"?<Grid2X2 size={14}/>:<List size={14}/>}  Show as {viewType === "grid" ? "list" : "cards"} 
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {selectedTab === "upcoming"
            ? ["today", "thisWeek", "nextWeek", "next30Days"].map((period) => {
                const periodLessons =
                  groupedLessons[period as keyof GroupedLessons];
                return (
                  (periodLessons ?? []).length > 0 && (
                    <div className="flex flex-col gap-3" key={period}>
                      <h2 className="caption uppercase">
                        {camelCaseToTwoLetters(period)}
                      </h2>
                      <div
                        className={`${
                          viewType === "grid"
                            ? "flex overflow-x-auto space-x-4"
                            : "grid grid-cols-1 gap-4"
                        }`}
                      >
                        {(periodLessons ?? []).map((lesson, index) => (
                          <div
                            key={`${lesson.day}-${index}`}
                            className={`${
                              viewType === "grid"
                                ? "min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                                : ""
                            }`}
                          >
                            <LessonCard
                              lesson={lesson}
                              isDraft={period === "thisWeek"}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                );
              })
            : ["thisMonth", "olderLessons"].map((period) => {
                const periodLessons =
                  groupedLessons[period as keyof GroupedLessons];
                return (
                  (periodLessons ?? []).length > 0 && (
                    <div className="flex flex-col gap-3" key={period}>
                      <h2 className="caption uppercase">
                        {camelCaseToTwoLetters(period)}
                      </h2>
                      <div
                        className={`${
                          viewType === "grid"
                            ? "flex overflow-x-auto space-x-4"
                            : "grid grid-cols-1 gap-4"
                        }`}
                      >
                        {(periodLessons ?? []).map((lesson, index) => (
                          <div
                            key={`${lesson.day}-${index}`}
                            className={`${
                              viewType === "grid"
                                ? "min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                                : ""
                            }`}
                          >
                            <LessonCard lesson={lesson} isDraft={false} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default TLessons;

interface LessonNote {
  day: string;
  dayOfWeek: string;
  lessonDate: string;
  launchLessonLink: string;
  classname: string;
  topic: string;
}

interface GroupedLessons {
  today?: LessonNote[];
  thisWeek?: LessonNote[];
  nextWeek?: LessonNote[];
  next30Days?: LessonNote[];
  thisMonth?: LessonNote[];
  olderLessons?: LessonNote[];
}
