import React from 'react';
import { ChevronRight } from 'lucide-react';
import TNoteBook from '../../pages/TNoteBook';

type TabProps = {
  active: boolean;
  children: React.ReactNode;
};

const Tab = ({ active, children }: TabProps) => (
  <button
    className={`pb-2 ${
      active 
        ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
        : 'text-gray-600'
    }`}
  >
    {children}
  </button>
);

const ProgressIndicator = ({ value, className }: { value: number; className?: string }) => (
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-6 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`absolute top-0 left-0 h-full rounded-full ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-sm">{value}%</span>
  </div>
);

const StatusBadge = ({ 
  status, 
  change 
}: { 
  status: string; 
  change?: string;
}) => {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case 'high':
      case 'balanced':
        return 'bg-green-100 text-green-800';
      case 'unbalanced':
        return 'bg-red-100 text-red-800';
      case 'part balance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`px-2 py-1 rounded text-sm ${getColor()}`}>
        {status}
      </span>
      {change && (
        <span className="text-sm text-gray-500">
          {change}
        </span>
      )}
    </div>
  );
};

const LessonNote = ({ 
  date, 
  title, 
  metrics 
}: { 
  date: string; 
  title: string; 
  metrics: {
    progress: { academic: number; social: number };
    socialPosture: { positive: number; negative: number };
    participation: string;
    interactLevel: string;
    interactRelevance: string;
  }
}) => (
  <div className="flex items-start gap-4 p-6 border rounded-lg">
    <div className="w-24">
      <div className="text-xs text-gray-500">NOTE DATE</div>
      <div>{date}</div>
    </div>
    <div className="flex-1">
      <div className="text-xs text-gray-500">LESSON GOAL SUMMARY</div>
      <div className="font-medium">{title}</div>
      <div className="grid grid-cols-5 gap-8 mt-4">
        <div className="space-y-2">
          <div className="text-xs text-gray-500">PROGRESS</div>
          <div className="flex items-center gap-2">
            <ProgressIndicator value={metrics.progress.academic} className="bg-green-500" />
            <span className="text-sm">Academic</span>
          </div>
          <div className="flex items-center gap-2">
            <ProgressIndicator value={metrics.progress.social} className="bg-green-500" />
            <span className="text-sm">Social</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">SOCIAL POSTURE</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <ProgressIndicator value={metrics.socialPosture.positive} className="bg-green-500" />
              <span className="text-sm">Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <ProgressIndicator value={metrics.socialPosture.negative} className="bg-yellow-500" />
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
            <ProgressIndicator value={parseInt(metrics.interactRelevance)} className="bg-green-500" />
          </div>
        </div>
      </div>
    </div>
    <button className="text-blue-600 hover:bg-blue-50 px-4 py-1 rounded">
      Review
    </button>
  </div>
);

const TNoteBookInner = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4">Algebra I, Block A</h1>
        
        <div className="flex gap-6 border-b border-gray-200 mb-8">
          <Tab active={true}>Class Summary</Tab>
          <Tab active={false}>Lesson notes</Tab>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">Progress</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Academic Goal</span>
                <ProgressIndicator value={72} className="bg-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span>Social Goal</span>
                <ProgressIndicator value={64} className="bg-green-500" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">Engagement</h2>
            <div className="space-y-4">
              <div>
                <div className="mb-2">Participation</div>
                <StatusBadge status="Balanced" />
              </div>
              <div>
                <div className="mb-2">Interactions level</div>
                <div className="flex items-center gap-2">
                  <StatusBadge status="High" />
                  <span className="text-sm text-green-600">
                    Raised 4% since last lesson
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2">Interactions relevance</div>
                <div className="flex items-center gap-2">
                  <ProgressIndicator value={62} className="bg-green-500" />
                  <span className="text-sm text-red-600">
                    Dropped 3% since last lesson
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">Social Posture</h2>
            <div className="space-y-4">
              <div>
                <div className="mb-2">Positive</div>
                <div className="flex items-center gap-2">
                  <ProgressIndicator value={62} className="bg-green-500" />
                  <span className="text-sm text-gray-500">
                    The same since last lesson
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2">Negative</div>
                <div className="flex items-center gap-2">
                  <ProgressIndicator value={34} className="bg-yellow-500" />
                  <span className="text-sm text-red-600">
                    Lowered 4% since last lesson
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="font-medium mb-4">Summary observations</h2>
          <div className="text-sm text-gray-500 mb-4">Summary of what happened during the lesson</div>
          <p className="text-sm leading-relaxed text-gray-700">
            The lesson topic was absolute value functions, with a focus on graphing and identifying key features. The 
            teacher initiated the lesson with a real-world context to connect absolute value concepts to functions, 
            encouraging students to explore and discuss. Group 3 struggled with the concept of plotting coordinates on a 
            graph when dealing with scalar quantities, particularly in understanding how to represent the distance from a 
            point as an ordered pair. The students engaged in discussions, attempting to resolve their confusion. The 
            collaboration between the students was beneficial, but there was evident difficulty in grasping the mathematical 
            representation.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              <span className="w-4 h-4">🤖</span>
              Correct with DelTA
            </button>
            <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              ✏️ Edit manually
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-medium mb-4">Review</h2>
          <div className="text-sm text-gray-500 mb-4">Insights and Possible Actions</div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Points of Teaching Emphasis:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Clarify the distinction between scalar and vector quantities before attempting to graph ordered pairs.</li>
                <li>Reinforce the concept of absolute value as distance and how it translates into graph coordinates.</li>
                <li>Provide visual aids and concrete examples to illustrate how distances can be represented on a graph.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Exercises or Lesson Approaches:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Start with a review exercise on plotting points using both scalar and vector examples.</li>
                <li>Use interactive graphing tools where students can manipulate points on a number line and observe the corresponding graph changes.</li>
                <li>Implement a step-by-step guided activity that walks students through the process of converting real-world distances into graph coordinates before moving to more complex functions.</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              <span className="w-4 h-4">🤖</span>
              Correct with DelTA
            </button>
            <button className="flex items-center gap-2 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              ✏️ Edit manually
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Latest lesson notes</h2>
            <div className="text-sm text-gray-500">Showing 3 of 50</div>
          </div>
          
          <div className='flex flex-col gap-4'>
            <LessonNote
              date="4 Oct 24"
              title="Standard Deviations"
              metrics={{
                progress: { academic: 89, social: 67 },
                socialPosture: { positive: 46, negative: 11 },
                participation: "Balanced",
                interactLevel: "High",
                interactRelevance: "61"
              }}
            />
            <LessonNote
              date="3 Oct 24"
              title="Comparing and Contrasting Data Distributions"
              metrics={{
                progress: { academic: 89, social: 72 },
                socialPosture: { positive: 45, negative: 21 },
                participation: "Part Balance",
                interactLevel: "High",
                interactRelevance: "58"
              }}
            />
            <LessonNote
              date="2 Oct 24"
              title="The Effect of Extremes"
              metrics={{
                progress: { academic: 42, social: 42 },
                socialPosture: { positive: 10, negative: 39 },
                participation: "Unbalanced",
                interactLevel: "Low",
                interactRelevance: "46"
              }}
            />
          </div>

          <button className="mt-4 text-blue-600 flex items-center hover:underline">
            See all
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TNoteBookInner;