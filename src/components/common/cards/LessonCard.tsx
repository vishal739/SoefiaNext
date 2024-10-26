import { Play, Edit2Icon, Copy, FileText } from "lucide-react";
import Link from "next/link";

export interface LessonCardProps {
  lesson: LessonNote;
  isDraft?: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, isDraft = false }) => {
  const today = new Date();
  const lessonDate = new Date(lesson.lessonDate);
  const isToday = lessonDate.toDateString() === today.toDateString();
  const isFuture = lessonDate > today;

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-center flex flex-col bg-[#F9F3EB] px-2 py-1 items-center justify-center border-t-4 border-t-red-600 rounded-md">
            <div className="font-bold">{lesson.day}</div>
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
        ) : isToday ? (
          <Link
            href={lesson.launchLessonLink}
            className="px-4 py-2 flex items-center gap-1 bg-[#E3E4FF] text-primary text-sm font-semibold rounded-md"
          >
            <Play size={16} />
            Launch
          </Link>
        ) : isFuture ? (
          <button
            className="px-4 py-2 flex items-center gap-1 bg-[#E3E4FF] text-primary text-sm font-semibold rounded-md"
            onClick={() => console.log("Edit lesson", lesson)}
          >
            <Edit2Icon size={16} />
            Edit
          </button>
        ) : (
          <button
            className="px-4 py-2 flex items-center gap-1 bg-[#E3E4FF] text-primary text-sm font-semibold rounded-md"
            onClick={() => console.log("Review notes", lesson)}
          >
            <FileText size={16} />
            Review Notes
          </button>
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

export default LessonCard;