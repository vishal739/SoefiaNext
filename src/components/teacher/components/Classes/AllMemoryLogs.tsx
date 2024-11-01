import React, { useState } from "react";
import MemoryLogItem from "./MemoryLogItem";

const memoryLogs = [
  { date: "4 Oct 24", topic: "Standard Deviations" },
  { date: "3 Oct 24", topic: "Comparing and Contrasting Data Distributions" },
  {
    date: "3 Oct 24",
    topic:
      "Comparing and Contrasting Data Distributions (pictures from activity)",
  },
  { date: "2 Oct 24", topic: "The Effect of Extremes" },
  {
    date: "2 Oct 24",
    topic:
      "The Effect of Extremes (youtube video: Normal Distribution and the 68-95-99.7 Rule)",
  },
  { date: "1 Oct 24", topic: "Technological Graphing" },
  { date: "30 Sep 24", topic: "Introduction to Probability" },
  { date: "29 Sep 24", topic: "Probability Rules" },
  { date: "28 Sep 24", topic: "Conditional Probability" },
  { date: "27 Sep 24", topic: "Random Variables" },
  { date: "26 Sep 24", topic: "Binomial Distributions" },
  { date: "25 Sep 24", topic: "Geometric Distributions" },
  { date: "24 Sep 24", topic: "Sampling Distributions" },
  { date: "23 Sep 24", topic: "Confidence Intervals" },
  { date: "22 Sep 24", topic: "Hypothesis Testing" },
  { date: "21 Sep 24", topic: "Chi-Square Tests" },
];

export default function AllMemoryLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredLogs = memoryLogs
    .filter((log) =>
      log.topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="md:p-6 p-4 w-full flex flex-col gap-6">
      <h1 className="headline">Class Memory Logs</h1>

      <div className="md:p-6 p-4 bg-white w-full rounded-lg">
        <div className="flex gap-4 md:flex-row flex-col justify-between mb-4">
          <input
            type="text"
            placeholder="Search by topic"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border text-primary bg-white border-gray-300 rounded"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div>
          {filteredLogs.map((log, index) => (
            <MemoryLogItem key={index} {...log} />
          ))}
        </div>
      </div>
    </div>
  );
}
