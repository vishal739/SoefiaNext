import SmallProgressIndicator from "@/components/common/Indicators/SmallProgressIndicator";
import StatusBadge from "@/components/common/Indicators/StatusBadge";
import { ChatCenteredDots, Note } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function TNoteBookLessonNote({
    date,
    title,
    metrics,
  }: {
    date: string;
    title: string;
    metrics: {
      progress: { academic: number; social: number };
      socialPosture: { positive: number; negative: number };
      participation: string;
      interactLevel: string;
      interactRelevance: number;
    };
  }){
    const router = useRouter();
    
   return  <div className="flex flex-col md:flex-row items-start gap-4 p-6 border rounded-lg w-full">
      <div className="bg-slate-100 p-2 rounded-lg">
        <Note />
      </div>
      <div className="w-full md:w-24">
        <div className="caption">NOTE DATE</div>
        <div>{date}</div>
      </div>
      <div className="flex-1">
        <div className="caption">LESSON GOAL SUMMARY</div>
        <div className="font-medium">{title}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mt-4">
          <div className="space-y-2">
            <div className="caption">PROGRESS</div>
            <div className="flex items-center gap-2">
              <SmallProgressIndicator value={metrics.progress.academic} />
              <span className="text-sm">Academic</span>
            </div>
            <div className="flex items-center gap-2">
              <SmallProgressIndicator value={metrics.progress.social} />
              <span className="text-sm">Social</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">SOCIAL POSTURE</div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <SmallProgressIndicator value={metrics.socialPosture.positive} />
                <span className="text-sm">Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <SmallProgressIndicator value={metrics.socialPosture.negative} />
                <span className="text-sm">Negative</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">PARTICIPATION</div>
            <div className="mt-2">
              <StatusBadge status={metrics.participation} />
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">INTERACT LEVEL</div>
            <div className="mt-2">
              <StatusBadge status={metrics.interactLevel} />
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">INTERACT RELEVANCE</div>
            <div className="mt-2">
              <SmallProgressIndicator value={metrics.interactRelevance} />
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>{
        router.push("/teacher?page=review")
      }} className="text-primary hover:bg-blue-50 flex gap-2 items-center px-4 py-2 rounded-lg border text-sm font-semibold">
        <ChatCenteredDots /> Review
      </button>
    </div>
  }

