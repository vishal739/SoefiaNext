import React from "react";
import { Search } from "lucide-react";
import SmallProgressIndicator from "@/components/common/Indicators/SmallProgressIndicator";
import StatusBadge from "@/components/common/Indicators/StatusBadge";
import LessonCardHorizontal from "@/components/common/cards/LessonCardHorizontal";
import { Users } from "@phosphor-icons/react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import GroupDashboard from "../GroupPreview/GroupDashboard";

interface Student {
  name: string;
}

interface GroupProgress {
  academic: number;
  social: number;
  positive: number;
  negative: number;
}

interface GroupData {
  students: Student[];
  workingOn: string;
  progress: GroupProgress;
  participation: {
    status: string;
    level: string;
    relevance: number;
  };
}

interface Groups {
  [key: string]: GroupData;
}

const TReviewLessonNote = () => {
  const lessonStats = {
    academic: 62,
    social: 68,
    participation: {
      status: "Balanced",
      level: "Medium",
      relevance: 61,
    },
    socialPosture: {
      positive: 61,
      negative: 14,
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Class: Algebra | Block A</span>
          <span>10/04/2024</span>
        </div>
        <h1 className="text-2xl font-semibold">
          Lesson Notes: Basic function transformations
        </h1>
      </div>

      {/* Lesson Summary */}
      <div className="space-y-6">
        <h2 className="font-medium text-gray-700">Lesson summary</h2>
        <LessonCardHorizontal
          day="10"
          dayOfWeek="Mon"
          lessonDate="10-04-2024"
          classname="Algebra | Block A"
          topic="Basic function transformations"
          launchLessonLink="#"
        />
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="font-medium">Progress</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Academic</span>
              <SmallProgressIndicator value={lessonStats.academic} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Social</span>
              <SmallProgressIndicator value={lessonStats.social} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Engagement</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Participation</span>
              <StatusBadge status={lessonStats.participation.status} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Interactions level</span>
              <StatusBadge status={lessonStats.participation.level} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Interactions relevance</span>
              <SmallProgressIndicator
                value={lessonStats.participation.relevance}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Social Posture</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Positive</span>
              <SmallProgressIndicator
                value={lessonStats.socialPosture.positive}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Negative</span>
              <SmallProgressIndicator
                value={lessonStats.socialPosture.negative}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary Observations */}
      <div className="space-y-4">
        <h3 className="font-medium">Summary observations</h3>
        <p className="text-gray-600">
          Summary of what happened during the lesson
        </p>
        <p className="text-sm">
          In this lesson, students are introduced to standard deviation as a
          measure of variation that is similar to the mean absolute deviation
          (MAD). The warm up was to elicit the idea that calculating the
          standard deviation is very similar to calculating the MAD, which will
          be useful when students explore standard deviation in a later
          activity. The activity was to let students investigate what happens to
          the standard deviation using different data sets. Students made
          conjectures about what standard deviation measures and how relative
          size of the standard deviation can be estimated from the shape of the
          distribution. In particular, students recognized that adding or
          subtracting the same value from each value in the data set will change
          the mean by the same amount, but the standard deviation remains
          unchanged. Multiplying or dividing each value in the data set by the
          same value scales both the mean and the standard deviation by the same
          value.
        </p>
      </div>

      {/* Review Section */}
      <div className="space-y-4">
        <h3 className="font-medium">Review</h3>
        <div className="space-y-4">
          <p className="text-gray-600">Insights and Possible Actions</p>

          <div className="space-y-2">
            <h4 className="font-medium">Points of Teaching Emphasis:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Clarify the difference between the population from which a
                sample is drawn and the sample
              </li>
              <li>Reinforce the difference between x and σ and σ and μ</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Exercises or Lesson Approaches:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Start with a review exercise that reminded students of the
                mechanics of calculating absolute deviation
              </li>
              <li>
                Use interactive graphing tools where students can manipulate
                points on a number line and observe the corresponding graph
                changes
              </li>
              <li>
                Implement a step-by-step guided activity that walks students
                through the process of converting real-world distributions into
                a mathematically calculated standard deviation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Groups Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Groups</h3>
          <button className="text-sm text-gray-600">
            Select a group to drill down
          </button>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="See student list"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search in groups"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <GroupCard
            name="Group A"
            students={["J Brissel", "J Davison", "S Hauser"]}
            problem="Problem 3"
            progress={{
              academic: 75,
              social: 70,
              positive: 63,
              negative: 10,
            }}
            sentiment={{
              positive: 63,
              negative: 10,
            }}
            participation={{
              status: "Balanced",
              level: "Medium",
              relevance: 60,
            }}
          />
          <GroupCard
            name="Group A"
            students={["J Brissel", "J Davison", "S Hauser"]}
            problem="Problem 3"
            progress={{
              academic: 75,
              social: 70,
              positive: 63,
              negative: 10,
            }}
            sentiment={{
              positive: 63,
              negative: 10,
            }}
            participation={{
              status: "Balanced",
              level: "Medium",
              relevance: 60,
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface GroupCardProps {
  name: string;
  students: string[];
  problem: string;
  progress: GroupProgress;
  participation: {
    status: string;
    level: string;
    relevance: number;
  };
}

interface GroupCardProps {
  name: string;
  students: string[];
  problem: string;
  progress: GroupProgress;
  sentiment: {
    positive: number;
    negative: number;
  };
  participation: {
    status: string;
    level: string;
    relevance: number;
  };
}

const GroupCard: React.FC<GroupCardProps> = ({
  name,
  students,
  problem,
  progress,
  sentiment,
  participation,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-medium mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{students.join(", ")}</p>
        </div>
        <Dialog>
          <DialogTrigger className="text-primary text-sm px-2 py-2 rounded-lg border hover:text-blue-700">
            See group
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>{""}</DialogTitle>
            <GroupDashboard/>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-4">
        <div className="text-xs text-gray-500 uppercase mb-1">WORKED ON</div>
        <div className="text-sm mb-4">{problem}</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="text-xs text-gray-500 uppercase mb-2">PROGRESS</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <SmallProgressIndicator
                  value={progress.academic}
                  className="w-16"
                />
                <span className="text-sm text-gray-600">Academic</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <SmallProgressIndicator
                  value={progress.social}
                  className="w-16"
                />
                <span className="text-sm text-gray-600">Social</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 uppercase mb-2">
              SENTIMENT
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <SmallProgressIndicator
                  value={sentiment.positive}
                  className="w-16"
                />
                <span className="text-sm text-gray-600">Positive</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <SmallProgressIndicator
                  value={sentiment.negative}
                  className="w-16"
                />
                <span className="text-sm text-gray-600">Negative</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 uppercase mb-2">
            PARTICIPATION
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <StatusBadge status={participation.status} />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mt-3 mb-1">
                INTERACTIONS LEVEL
              </div>
              <StatusBadge status={participation.level} />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mt-3 mb-1">
                INTERACTIONS RELEVANCE
              </div>
              <SmallProgressIndicator
                value={participation.relevance}
                className="w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TReviewLessonNote;
