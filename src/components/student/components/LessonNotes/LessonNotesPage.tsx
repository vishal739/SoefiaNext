import React from "react";
import {
  FileText,
  Smile,
  Frown,
  Meh,
  Calendar,
  ChevronLeft,
  MessageSquare,
} from "lucide-react";
import ScoreShow from "@/components/common/cards/ScoreShow";
import { useRouter } from "next/navigation";

// Types
interface Props {
  lessonId: string;
}

interface LessonData {
  className: string;
  lessonName: string;
  lessonDate: string;
  exerciseProgress: {
    academic: number;
    engagement: number;
  };
  sentiment: {
    positive: number;
    negative: number;
  };
  engagement: {
    participation: number;
    interactions: string;
    subjectRelevance: number;
  };
  learningContent: {
    whatWasLearned: string;
    groupExerciseSummary: string;
  };
  groupMembers: Array<{
    name: string;
    role: string;
  }>;
}

interface MetricCardProps {
  title: string;
  metrics: Record<string, number | string>;
}

interface SectionProps {
  title: string;
  content: string;
}

interface FeedbackIconProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

// Helper Components
const Header: React.FC<{ className: string; date: string }> = ({
  className,
  date,
}) => (
  <header className="flex gap-4 items-center">
    <h2 className="text-primary border border-[#DFDAD3] px-2 py-1 rounded-lg font-medium">
      {`Class: ${className}`}
    </h2>
    <span className="text-sm text-[#474D68] border border-[#DFDAD3] flex items-center gap-2 py-1 px-2 rounded-lg">
      <Calendar size={16} /> {date}
    </span>
  </header>
);

const MetricCard: React.FC<MetricCardProps> = ({ title, metrics }) => (
  <div className="flex flex-col">
    <h3 className="bodySmall">{title}</h3>
    <div className="flex flex-col pt-2 gap-2">
      {Object.entries(metrics).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between p-2 items-center border rounded-md"
        >
          <p className="label">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          <ScoreShow scoreValue={value} />
        </div>
      ))}
    </div>
  </div>
);

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className="pb-2">
    <h4 className="bodySmall">{title}</h4>
    <div className="regular py-2" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

const FeedbackIcon: React.FC<FeedbackIconProps> = ({
  icon,
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center rounded-md p-2 bg-[#10121C0A] w-full hover:bg-[#10121C1A] transition-colors"
  >
    <div className="text-2xl text-gray-600">{icon}</div>
    <span className="text-xs mt-1">{label}</span>
  </button>
);

const GroupMembers: React.FC<{
  members: Array<{ name: string; role: string }>;
}> = ({ members }) => (
  <div className="p-6 bg-white rounded-lg flex flex-col gap-2">
    <h3 className="label">Group A</h3>
    <div className="grid grid-cols-4 gap-3">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-2 border rounded-lg bg-[#10121C0A]"
        >
          <p className="bodySmall">{member.name}</p>
          <p className="label">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

const FeedbackSection: React.FC = () => {
  const feedbackOptions = [
    { icon: <Frown />, label: "Very unhappy" },
    { icon: <Meh />, label: "Somewhat unhappy" },
    { icon: <Meh />, label: "Neutral" },
    { icon: <Smile />, label: "Somewhat happy" },
    { icon: <Smile />, label: "Very happy" },
  ];

  return (
    <div className="border p-6 rounded-lg bg-white">
      <h3 className="label">Lesson feedback</h3>
      <div className="grid grid-cols-5 py-3 gap-3">
        {feedbackOptions.map((option, index) => (
          <FeedbackIcon key={index} {...option} />
        ))}
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="py-2">
          <h3 className="label">Add Feedback</h3>
          <span className="bodySmall">Let us know how you felt the lesson</span>
        </div>
        <button className="flex items-center w-fit text-primary justify-center gap-3 px-2 py-1 rounded-md border">
          <MessageSquare size={14} /> Give feedback
        </button>
      </div>
    </div>
  );
};



/// get this from api
const mockLessonData: LessonData = {
  className: "Algebra I, Block A",
  lessonName: "Standard Deviation",
  lessonDate: "10/04/2024",
  exerciseProgress: {
    academic: 75,
    engagement: 70,
  },
  sentiment: {
    positive: 75,
    negative: 70,
  },
  engagement: {
    participation: 23,
    interactions: "low",
    subjectRelevance: 20,
  },
  learningContent: {
    whatWasLearned: `
      <p>We can describe the variability of a distribution using the <strong>standard deviation</strong>. 
      The standard deviation is a measure of how spread out numbers are.</p>
      <p>It is calculated as the square root of the variance by determining the variation between each data point relative to the mean.</p>
      <p>In this lesson, we learned how to:</p>
      <ul>
        <li>Calculate the standard deviation for a given set of data.</li>
        <li>Interpret the standard deviation in the context of the data.</li>
        <li>Understand the implications of a high or low standard deviation.</li>
      </ul>
    `,
    groupExerciseSummary: `
      <p>Students wrote equations to represent quantities and relationships in two situations.</p>
      <p>They solved equations <em>graphically</em> and <em>algebraically</em> to find the points of intersection.</p>
      <p>Key steps included:</p>
      <ol>
        <li>Setting up the equations based on the given problems.</li>
        <li>Using graphing techniques to visualize the solutions.</li>
        <li>Applying algebraic methods to solve the equations.</li>
      </ol>
      <p>Overall, the exercise helped reinforce the concepts of equation solving and graphical interpretation.</p>
    `,
  },
  groupMembers: [
    { name: "Alice", role: "Leader" },
    { name: "Bob", role: "Recorder" },
    { name: "Charlie", role: "Presenter" },
    { name: "Dana", role: "Timekeeper" },
  ],
};

const LessonNotesPage: React.FC<Props> = ({ lessonId }) => {
  const lessonData = mockLessonData;

  const router = useRouter();

  return (
    <div className="p-6 w-full flex items-start gap-4">
      <button onClick={()=>{
        router.back();
      }} className="text-primary p-1 border border-[#DFDAD3] rounded-md">
        <ChevronLeft />
      </button>

      <div className="flex flex-col gap-4 w-full">
        <Header className={lessonData.className} date={lessonData.lessonDate} />

        <h1 className="headline">
          Lesson Notes:{" "}
          <span className="font-medium">{lessonData.lessonName}</span>
        </h1>

        <div className="w-full flex flex-col gap-4">
          <div className="bg-white p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-4 border p-4 rounded-lg">
              <MetricCard
                title="Exercise Progress"
                metrics={lessonData.exerciseProgress}
              />
              <MetricCard title="Sentiment" metrics={lessonData.sentiment} />
              <MetricCard
                title="Your Engagement"
                metrics={lessonData.engagement}
              />
            </div>

            <div className="flex flex-col gap-4 py-4">
              <Section
                title="What was learned"
                content={lessonData.learningContent.whatWasLearned}
              />
              <Section
                title="Group exercise summary"
                content={lessonData.learningContent.groupExerciseSummary}
              />
            </div>
          </div>

          <GroupMembers members={lessonData.groupMembers} />
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default LessonNotesPage;
