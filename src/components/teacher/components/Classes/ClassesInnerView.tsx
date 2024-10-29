import React from "react";
import {
  Search,
  Bookmark,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import LessonCardHorizontal from "@/components/common/cards/LessonCardHorizontal";
import { ArrowRight, Pencil, Trash } from "@phosphor-icons/react";
import TextAreaWithActions from "../CreateLesson/TextAreaWithActions";

// Temporary component for memory log items
interface MemoryLogItemProps {
  date: string;
  topic: string;
}

const MemoryLogItem: React.FC<MemoryLogItemProps> = ({ date, topic }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-4">
      <div className="bg-slate-100 p-2 rounded-lg">
        <Bookmark size={15} />
      </div>
      <div>
        <div className="caption">LOG DATE</div>
        <div className="text-sm">{date}</div>
      </div>
      <div>
        <div className="caption">LOG TOPIC</div>
        <div className="text-sm font-semibold">{topic}</div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="text-primary p-2 rounded-lg border hover:bg-slate-200">
        <Trash />
      </button>
      <button className="text-primary p-2 rounded-lg border  hover:bg-slate-200">
        <Pencil />
      </button>
    </div>
  </div>
);

interface Props {
  classId: string;
}
export default function ClassesInnerView({ classId }: Props) {
  const [isAddFiles, setIsAddFiles] = React.useState(false);
  const [isAddUrl, setIsAddUrls] = React.useState(false);

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
  ];

  const upcomingLessons = [
    {
      day: "31",
      dayOfWeek: "Sun",
      lessonDate: "31/10/24",
      classname: "Algebra I, Block A",
      topic: "Writing Equations to Model Relationships",
      launchLessonLink: "#",
    },
    {
      day: "8",
      dayOfWeek: "Tue",
      lessonDate: "Tomorrow",
      classname: "Algebra I, Block A",
      topic: "Equations and Their Solutions",
      launchLessonLink: "#",
    },
    {
      day: "9",
      dayOfWeek: "Wed",
      lessonDate: "10/12/24",
      classname: "Algebra I, Block A",
      topic: "Equations and Their Graphs",
      launchLessonLink: "#",
    },
  ];

  return (
    <div className="w-full p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="bodyBig">Algebra I, Block A</h1>
        <div className="flex gap-4">
          <Button variant="outline">Go to class notebook</Button>
          <Button>Create Lesson</Button>
        </div>
      </div>

      {/* Memory Input Section */}
      <div className="flex flex-col gap-2">
        <div className="bodyBig">Add a Memory</div>
        <TextAreaWithActions
          onAddFiles={() => {
            setIsAddFiles(true)
          }}
          onAddUrl={() => {
            setIsAddUrls(true);
          }}
          description="add a memory to deita"
          label="Update DeiTA on new information that it needs to know for this class"
          placeholder="Type your note"
          value=""
          onChange={() => {}}
        />
        {isAddUrl && (
          <div className="flex flex-col gap-2">
            <input
              placeholder="http:// Type in or paste the URL adress"
              className="px-4 text-sm py-2 w-full border rounded-lg"
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setIsAddUrls(false);
                }}
                className="px-2 py-1 text-sm border rounded-lg bg-white"
              >
                cancel
              </button>
              <button
                onClick={() => {
                  setIsAddUrls(false);
                }}
                className="bg-primary px-4 py-2 rounded-lg  text-white text-sm"
              >
                Add memory
              </button>
            </div>
          </div>
        )}

        {isAddFiles && (
          <div className="flex flex-col gap-2">
            <input
             type="file"
              className="px-4 text-sm bg-white py-2 w-full border rounded-lg"
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setIsAddFiles(false);
                }}
                className="px-2 py-1 text-sm border rounded-lg bg-white"
              >
                cancel
              </button>
              <button
                onClick={() => {
                  setIsAddFiles(false);
                }}
                className="bg-primary px-4 py-2 rounded-lg  text-white text-sm"
              >
                Add memory
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Memory Log Section */}
      <Card>
        <CardHeader>
          <CardTitle>Class memory log</CardTitle>
          <p className="text-sm text-gray-500">
            List of all the information DeltA already knows about the class
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-4">Showing 5 of 50</div>
          {memoryLogs.map((log, index) => (
            <MemoryLogItem key={index} {...log} />
          ))}
          <button className="px-4 flex items-center gap-2 py-2 text-primary rounded-lg border mt-4">
            See All <ArrowRight />
          </button>
        </CardContent>
      </Card>

      <div className="bg-white p-6 flex flex-col gap-2 rounded-lg">
        {/* Automatic Review Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold">Automatic review</h2>
            <Switch />
            <span>On</span>
          </div>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>
        <Textarea placeholder="Type your note" />

        {/* Lessons Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold mb-4">Lessons</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Upcoming</h3>
              <div className="space-y-2">
                {upcomingLessons.map((lesson, index) => (
                  <LessonCardHorizontal key={index} {...lesson} />
                ))}
              </div>
            </div>
          </div>
          <Button
            variant="link"
            className="mt-4 w-fit px-4 py-2 rounded-lg border text-primary"
          >
            See upcoming lessons
          </Button>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Recently Completed</h3>
              <div className="space-y-2">
                {upcomingLessons.map((lesson, index) => (
                  <LessonCardHorizontal key={index} {...lesson} />
                ))}
              </div>
              <Button
                variant="link"
                className="mt-4 w-fit px-4 py-2 rounded-lg border text-primary"
              >
                See recently completed lessons
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
