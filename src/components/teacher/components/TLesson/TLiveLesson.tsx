import React from 'react';
import { Users, AlertCircle } from 'lucide-react';

type StudentGroup = {
  name: string;
  students: Array<{
    name: string;
    percentage: number;
  }>;
  currentProblem: number;
  progress: {
    status: 'OK' | 'Risk';
    academic: number;
    social: number;
  };
  sentiment: {
    status: 'OK' | 'Risk';
    positive: number;
    negative: number;
  };
  metrics: {
    participation: 'Balanced' | 'Unbalanced' | 'Partially Balanced';
    interactions: 'High' | 'Medium' | 'Low';
    subjectRelevance: number;
  };
}

const ProgressBar = ({ value, color }: { value: number; color: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-32 h-2 bg-gray-200 rounded-full">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-sm font-medium">{value}%</span>
  </div>
);

const StatusBadge = ({ status }: { status: 'OK' | 'Risk' }) => (
  <span className={`px-2 py-1 text-xs rounded-full ${
    status === 'OK' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800'
  }`}>
    {status}
  </span>
);

const MetricBadge = ({ 
  type,
  value 
}: { 
  type: 'participation' | 'interactions'; 
  value: string;
}) => {
  const getColor = (value: string) => {
    switch (value) {
      case 'Balanced':
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Partially Balanced':
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Unbalanced':
      case 'Low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-600">{type}</span>
      <span className={`px-2 py-1 text-sm rounded-full ${getColor(value)}`}>
        {value}
      </span>
    </div>
  );
};

export default function TLiveLesson() {

const groups: StudentGroup[] = [
    {
        name: 'Group A',
        students: [
            { name: 'J Brisset', percentage: 30 },
            { name: 'J Davidson', percentage: 40 },
            { name: 'S Hauser', percentage: 30 }
        ],
        currentProblem: 8,
        progress: {
            status: 'OK',
            academic: 70,
            social: 67
        },
        sentiment: {
            status: 'OK',
            positive: 75,
            negative: 20
        },
        metrics: {
            participation: 'Balanced',
            interactions: 'High',
            subjectRelevance: 40
        }
    },
    {
        name: 'Group B',
        students: [
            { name: 'A Smith', percentage: 50 },
            { name: 'B Johnson', percentage: 30 },
            { name: 'C Williams', percentage: 20 }
        ],
        currentProblem: 5,
        progress: {
            status: 'Risk',
            academic: 50,
            social: 45
        },
        sentiment: {
            status: 'Risk',
            positive: 40,
            negative: 50
        },
        metrics: {
            participation: 'Unbalanced',
            interactions: 'Medium',
            subjectRelevance: 30
        }
    },
    {
        name: 'Group C',
        students: [
            { name: 'D Brown', percentage: 60 },
            { name: 'E Jones', percentage: 25 },
            { name: 'F Garcia', percentage: 15 }
        ],
        currentProblem: 3,
        progress: {
            status: 'OK',
            academic: 80,
            social: 75
        },
        sentiment: {
            status: 'OK',
            positive: 85,
            negative: 10
        },
        metrics: {
            participation: 'Partially Balanced',
            interactions: 'Low',
            subjectRelevance: 60
        }
    },
    {
        name: 'Group D',
        students: [
            { name: 'G Martinez', percentage: 40 },
            { name: 'H Rodriguez', percentage: 35 },
            { name: 'I Hernandez', percentage: 25 }
        ],
        currentProblem: 7,
        progress: {
            status: 'Risk',
            academic: 55,
            social: 50
        },
        sentiment: {
            status: 'Risk',
            positive: 45,
            negative: 40
        },
        metrics: {
            participation: 'Balanced',
            interactions: 'High',
            subjectRelevance: 50
        }
    },
    {
        name: 'Group E',
        students: [
            { name: 'J Lopez', percentage: 70 },
            { name: 'K Gonzalez', percentage: 20 },
            { name: 'L Wilson', percentage: 10 }
        ],
        currentProblem: 2,
        progress: {
            status: 'OK',
            academic: 90,
            social: 85
        },
        sentiment: {
            status: 'OK',
            positive: 95,
            negative: 5
        },
        metrics: {
            participation: 'Unbalanced',
            interactions: 'Medium',
            subjectRelevance: 80
        }
    }
];

  return (
    <div className=" p-6  ">
      <div className='flex flex-col gap-4'>
      <div className="flex items-center justify-between bg-white p-6 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Writing Equations to Model Relationships</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} />
            <span>CLASS</span>
            <span>Algebra 1, Block A</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-orange-500">
          <AlertCircle size={16} />
          <span className="text-sm font-medium">LESSON IN PROGRESS</span>
        </div>
      </div>

      <div className="space-y-6">
        {groups.map((group, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white">
            <div className="flex justify-between mb-4">
              <div className='flex flex-col gap-2'>
                <h2 className="text-lg font-semibold">{group.name}</h2>
                <div className="text-sm text-gray-600">
                  {group.students.map((student, idx) => (
                    <span key={idx}>
                      {student.name} ({student.percentage}%)
                      {idx < group.students.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <div >
                  <span className="caption">WORKING ON</span>
                  <div className="bodyBig">Problem {group.currentProblem}</div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">Progress</h3>
                    <StatusBadge status={group.progress.status} />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Academic</span>
                      <ProgressBar 
                        value={group.progress.academic} 
                        color="bg-green-400" 
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Social</span>
                      <ProgressBar 
                        value={group.progress.social} 
                        color="bg-green-400" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">Sentiment</h3>
                    <StatusBadge status={group.sentiment.status} />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Positive</span>
                      <ProgressBar 
                        value={group.sentiment.positive} 
                        color="bg-green-400" 
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Negative</span>
                      <ProgressBar 
                        value={group.sentiment.negative} 
                        color="bg-red-400" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <MetricBadge 
                    type="participation" 
                    value={group.metrics.participation} 
                  />
                  <MetricBadge 
                    type="interactions" 
                    value={group.metrics.interactions} 
                  />
                  <div>
                    <span className="text-xs text-gray-600">Subject relevance</span>
                    <div className="mt-1">
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        group.metrics.subjectRelevance >= 70 
                          ? 'bg-green-100 text-green-800'
                          : group.metrics.subjectRelevance >= 40
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {group.metrics.subjectRelevance}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='h-32' />
      </div>

      <div className="flex p-6 bg-white border-t justify-between mt-6 fixed left-0 right-0 bottom-0">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          End lesson
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Pause lesson
        </button>
      </div>
    </div>
  );
}