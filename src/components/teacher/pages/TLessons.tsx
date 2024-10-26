import Link from "next/link";
import React from "react";
import { ChevronDown, ChevronLeft, ChevronRightIcon, Grid2X2, List, Search } from "lucide-react";
import { camelCaseToTwoLetters } from "@/lib/formatter/camelCaseToTwoLetters";
import LessonCardHorizontal from "@/components/common/cards/LessonCardHorizontal";
import LessonCard from "@/components/common/cards/LessonCard";
import { SmileySad } from "@phosphor-icons/react";
import groupLessonsByTime from "@/lib/utils/grouping";

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
  const [noDataAvailable, setNoDataAvailable] = React.useState<boolean>(false);
  const [noFilteredResults, setNoFilteredResults] =
    React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 20;

  const [lessons] = React.useState<LessonNote[]>(initialLessons);

  React.useEffect(() => {
    setNoDataAvailable(lessons.length === 0);
  }, [lessons]);

  const filteredLessons = React.useMemo(() => {
    const filtered = lessons.filter((lesson) => {
      if (selectedClass !== "All classes" && lesson.classname !== selectedClass)
        return false;
      if (
        searchQuery &&
        !lesson.topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });

    setNoFilteredResults(filtered.length === 0 && lessons.length > 0);
    return filtered;
  }, [lessons, selectedClass, searchQuery]);

  const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);

  const paginatedLessons = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredLessons.slice(startIndex, endIndex);
  }, [filteredLessons, currentPage]);

  const groupedLessons = React.useMemo(() => {
    return groupLessonsByTime(filteredLessons, selectedTab === "completed");
  }, [filteredLessons, selectedTab]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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

      <div className="flex flex-col gap-4 p-6 rounded-md bg-white ">
        <div className="flex justify-between items-end  gap-4 ">
          <div className="flex gap-4">
            <div className="">
              <label className="caption mb-1">Class</label>
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
              <label className="caption  mb-1">Status</label>
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
              <label className="caption  mb-1">Search lessons</label>
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
              Sort by date: {sortType === "closest" ? "Closest" : "Furthest"}{" "}
              <ChevronDown size={14} />
            </button>
            <button
              className="text-primary px-4 py-2 flex items-center gap-2 rounded-md border text-sm font-semibol"
              onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
            >
              {viewType === "list" ? <Grid2X2 size={14} /> : <List size={14} />}{" "}
              Show as {viewType === "grid" ? "list" : "cards"}
            </button>
          </div>
        </div>

        {noDataAvailable ? (
          <div className="flex flex-col items-center justify-center h-64 gap-2">
            <SmileySad size={20} />
            <p className="text-gray-600 ">No data available</p>
          </div>
        ) : noFilteredResults ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Search className="h-16 w-16 text-gray-400" />
            <p className="text-gray-600 mt-4">Clear filters to show more</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {selectedTab === "upcoming"
              ? ["today", "thisWeek", "nextWeek", "next30Days"].map(
                  (period) => {
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
                            {(viewType === "grid" ? periodLessons : paginatedLessons)?.map((lesson, index) => (
                              <div
                                key={`${lesson.day}-${index}`}
                                className={`${
                                  viewType === "grid"
                                    ? "min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                                    : ""
                                }`}
                              >
                                {viewType === "grid" ? (
                                  <LessonCard
                                    lesson={lesson}
                                    isDraft={period === "thisWeek"}
                                  />
                                ) : (
                                  <LessonCardHorizontal {...lesson} />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    );
                  }
                )
              : ["past"].map((period) => {
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
                          {(viewType === "grid" ? periodLessons : paginatedLessons)?.map((lesson, index) => (
                            <div
                              key={`${lesson.day}-${index}`}
                              className={`${
                                viewType === "grid"
                                  ? "min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                                  : ""
                              }`}
                            >
                              {viewType === "grid" ? (
                                <LessonCard
                                  lesson={lesson}
                                  isDraft={period === "thisWeek"}
                                />
                              ) : (
                                <LessonCardHorizontal {...lesson} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  );
                })}
          </div>
        )}

        {viewType === "list" && (
          <div className="flex gap-2 items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              <ChevronLeft/>
            </button>
            <span className="caption">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              <ChevronRightIcon/>
            </button>
          </div>
        )}
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
  past?: LessonNote[];
}
