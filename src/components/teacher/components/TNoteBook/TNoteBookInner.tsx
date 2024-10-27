import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChatCenteredDots, Pencil, UserSound } from "@phosphor-icons/react";
import { Note } from "@phosphor-icons/react/dist/ssr";
import TNoteLessonNotes from "./TNoteLessonNotes";
import TNoteBookLessonNote from "./TNoteBookLessonCard";
import SmallProgressIndicator from "@/components/common/Indicators/SmallProgressIndicator";
import StatusBadge from "@/components/common/Indicators/StatusBadge";

type TabProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Tab = ({ active, children, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`pb-2 ${
      active
        ? "text-blue-600 border-b-2 border-blue-600 font-medium"
        : "text-gray-600"
    }`}
  >
    {children}
  </button>
);




interface Props {
  selectedNoteBook: string;
}

export default function TNoteBookInner({ selectedNoteBook }: Props) {

    // use the selectedNoteBook prop to fetch the data for the selected notebook, api calling


  const [activeTab, setActiveTab] = useState("Class Summary");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4">Algebra I, Block A</h1>

        <div className="flex gap-6 border-b border-gray-200 mb-8">
          <Tab
            active={activeTab === "Class Summary"}
            onClick={() => handleTabClick("Class Summary")}
          >
            Class Summary
          </Tab>
          <Tab
            active={activeTab === "Lesson notes"}
            onClick={() => handleTabClick("Lesson notes")}
          >
            Lesson notes
          </Tab>
        </div>

        {activeTab === "Class Summary" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-white rounded-lg p-6">
              <h2 className="bodyBig">Lesson Summary</h2>
              <div className="grid grid-cols-3 gap-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-medium text-gray-500 ">
                    Progress
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <span>Academic Goal</span>
                      <SmallProgressIndicator value={72} />
                    </div>
                    <div className="flex items-center justify-between  p-4 border rounded-lg">
                      <span>Social Goal</span>
                      <SmallProgressIndicator value={64} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-medium text-gray-500">
                    Engagement
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between p-4 border rounded-lg">
                      <div className="">Participation</div>
                      <StatusBadge status="Balanced" />
                    </div>
                    <div className="flex justify-between p-4 border rounded-lg">
                      <div>
                        <div className="">Interactions level</div>
                        <span className="text-sm text-green-600">
                          Raised 4% since last lesson
                        </span>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <StatusBadge status="High" />
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex justify-between items-center">
                      <div>
                        <div className="">Interactions relevance</div>
                        <span className="text-sm text-red-600">
                          Dropped 3% since last lesson
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SmallProgressIndicator value={62} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-medium text-gray-500 ">
                    Social Posture
                  </h2>
                  <div className="space-y-4">
                    <div className="flex border justify-between items-center p-4 rounded-lg">
                      <div>
                        <div className="">Positive</div>
                        <span className="text-sm text-gray-500">
                          The same since last lesson
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SmallProgressIndicator value={62} />
                      </div>
                    </div>
                    <div className="flex border justify-between items-center p-4 rounded-lg">
                      <div>
                        <div className="">Negative</div>
                        <span className="text-sm text-red-600">
                          Lowered 4% since last lesson
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SmallProgressIndicator value={34} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h2 className="font-medium mb-4">Summary observations</h2>
                <div className="text-sm text-gray-500 mb-4">
                  Summary of what happened during the lesson
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  The lesson topic was absolute value functions, with a focus on
                  graphing and identifying key features. The teacher initiated
                  the lesson with a real-world context to connect absolute value
                  concepts to functions, encouraging students to explore and
                  discuss. Group 3 struggled with the concept of plotting
                  coordinates on a graph when dealing with scalar quantities,
                  particularly in understanding how to represent the distance
                  from a point as an ordered pair. The students engaged in
                  discussions, attempting to resolve their confusion. The
                  collaboration between the students was beneficial, but there
                  was evident difficulty in grasping the mathematical
                  representation.
                </p>
                <div className="flex gap-4 py-4">
                  <button className="flex items-center gap-2 text-primary rounded-lg px-4 py-2 text-sm font-semibold bg-indigo-100">
                    <UserSound />
                    Correct with DelTA
                  </button>
                  <button className="flex items-center gap-2 text-primary rounded-lg px-4 py-2 text-sm font-semibold border">
                    <Pencil /> Edit manually
                  </button>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="font-medium mb-4">Review</h2>
                <div className="text-sm text-gray-500 mb-4">
                  Insights and Possible Actions
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">
                      Points of Teaching Emphasis:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        Clarify the distinction between scalar and vector
                        quantities before attempting to graph ordered pairs.
                      </li>
                      <li>
                        Reinforce the concept of absolute value as distance and
                        how it translates into graph coordinates.
                      </li>
                      <li>
                        Provide visual aids and concrete examples to illustrate
                        how distances can be represented on a graph.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">
                      Exercises or Lesson Approaches:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        Start with a review exercise on plotting points using
                        both scalar and vector examples.
                      </li>
                      <li>
                        Use interactive graphing tools where students can
                        manipulate points on a number line and observe the
                        corresponding graph changes.
                      </li>
                      <li>
                        Implement a step-by-step guided activity that walks
                        students through the process of converting real-world
                        distances into graph coordinates before moving to more
                        complex functions.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 py-4">
                  <button className="flex items-center gap-2 text-primary rounded-lg px-4 py-2 text-sm font-semibold bg-indigo-100">
                    <UserSound />
                    Correct with DelTA
                  </button>
                  <button className="flex items-center gap-2 text-primary rounded-lg px-4 py-2 text-sm font-semibold border">
                    <Pencil /> Edit manually
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Class Summary" && (
          <div className="flex flex-col gap-2 p-6 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Latest lesson notes</h2>
              <div className="text-sm text-gray-500">Showing 3 of 50</div>
            </div>

            <div className="flex flex-col gap-4">
              {sampleData.map((note, index) => (
                <TNoteBookLessonNote
                  key={index}
                  date={note.date}
                  title={note.title}
                  metrics={note.metrics}
                />
              ))}
            </div>

            <button onClick={()=>{
                setActiveTab("Lesson notes")
            }}  className="mt-4 text-primary flex items-center gap-2 border rounded-lg w-fit px-4 py-2 text-sm font-semibold">
              See all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {activeTab === "Lesson notes" && <TNoteLessonNotes />}
      </div>
    </div>
  );
}
