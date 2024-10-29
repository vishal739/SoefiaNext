import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import TNoteBookLessonNote from "./TNoteBookLessonCard";
import { MagnifyingGlass } from "@phosphor-icons/react";

const sampleData = [
    {
        date: "4 Oct 24",
        title: "Standard Deviations",
        metrics: {
            progress: { academic: 89, social: 67 },
            socialPosture: { positive: 46, negative: 11 },
            participation: "Balanced",
            interactLevel: "High",
            interactRelevance: 61,
        },
    },
    {
        date: "3 Oct 24",
        title: "Comparing and Contrasting Data Distributions",
        metrics: {
            progress: { academic: 89, social: 72 },
            socialPosture: { positive: 45, negative: 21 },
            participation: "Part Balance",
            interactLevel: "High",
            interactRelevance: 58,
        },
    },
    {
        date: "2 Oct 24",
        title: "The Effect of Extremes",
        metrics: {
            progress: { academic: 42, social: 42 },
            socialPosture: { positive: 10, negative: 39 },
            participation: "Unbalanced",
            interactLevel: "Low",
            interactRelevance: 46,
        },
    },
    {
        date: "1 Oct 24",
        title: "Introduction to Probability",
        metrics: {
            progress: { academic: 75, social: 80 },
            socialPosture: { positive: 50, negative: 20 },
            participation: "Balanced",
            interactLevel: "Medium",
            interactRelevance: 70,
        },
    },
    {
        date: "30 Sep 24",
        title: "Understanding Variance",
        metrics: {
            progress: { academic: 65, social: 60 },
            socialPosture: { positive: 40, negative: 25 },
            participation: "Balanced",
            interactLevel: "Medium",
            interactRelevance: 65,
        },
    },
    {
        date: "29 Sep 24",
        title: "Analyzing Data Sets",
        metrics: {
            progress: { academic: 80, social: 85 },
            socialPosture: { positive: 55, negative: 15 },
            participation: "Balanced",
            interactLevel: "High",
            interactRelevance: 75,
        },
    },
    {
        date: "28 Sep 24",
        title: "Correlation and Causation",
        metrics: {
            progress: { academic: 90, social: 70 },
            socialPosture: { positive: 60, negative: 10 },
            participation: "Balanced",
            interactLevel: "High",
            interactRelevance: 80,
        },
    },
];

export default function TNoteLessonNotes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredData = sampleData
    .filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  return (
    <div className="flex flex-col gap-2 md:p-6 p-3 bg-white rounded-lg">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="flex flex-col  bg-white  py-2 text-sm  text-primary gap-2">
          <div className="caption font-semibold">Search Notes</div>
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none"
              placeholder="Search"
            />
            <MagnifyingGlass className="absolute right-2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div className="flex bg-white px-4 py-2 text-sm rounded-lg border text-primary items-center gap-1 font-semibold">
          <div className="">Sort by date</div>
          <select
            className="bg-white"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {filteredData.map((note, index) => (
          <TNoteBookLessonNote
            key={index}
            date={note.date}
            title={note.title}
            metrics={note.metrics}
          />
        ))}
      </div>


    </div>
  );
}
