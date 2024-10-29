import React from 'react';
import SmallProgressIndicator from "@/components/common/Indicators/SmallProgressIndicator";
import { Edit } from "lucide-react";
import TNoteBookLessonNote from '../components/TNoteBook/TNoteBookLessonCard';

const studentData = {
  name: "Jaylen Brown",
  engagement: {
    participation: "+46%",
    interactionsLevel: "High",
    interactionsRelevance: 59
  },
  socialPosture: {
    positive: 54,
    negative: 34
  },
  observations: [
    "Jaylen participates actively in class and is encouraging to his fellow classmate, bringing a positive attitude and energy. He is always willing to take a shot and try something new.",
    "His progression during the term has been consistent. While he had some difficulty initially in understanding factoring and order of operations, he has now demonstrated master of these while progressing to simple equation solutioning. Setting up and solving equations within the context of word problems and real world examples would expectantly be his next skill mastery."
  ],
  lessonNotes: [
    {
      date: "4 Oct 24",
      title: "Standard Deviations",
      metrics: {
        progress: { academic: 89, social: 87 },
        socialPosture: { positive: 49, negative: 11 },
        participation: "Balanced",
        interactLevel: "High",
        interactRelevance: 61
      }
    },
    {
      date: "3 Oct 24",
      title: "Comparing and Contrasting Data Distributions",
      metrics: {
        progress: { academic: 89, social: 72 },
        socialPosture: { positive: 48, negative: 21 },
        participation: "Part Balance",
        interactLevel: "High",
        interactRelevance: 68
      }
    },
    // Add other lesson notes following the same pattern...
  ]
};

export default function TStudents() {
  const [selectedStudent, setSelectedStudent] = React.useState(studentData.name);
  const [showContent, setShowContent] = React.useState(true);

  return (
    <div className="p-6 flex flex-col gap-4 w-full">
      <h2 className="text-xl font-semibold">Students</h2>
      
      <div className="p-6 rounded-lg bg-white w-full flex flex-col gap-4">
        <div className="caption">Student</div>
        <input 
          type="text" 
          value={selectedStudent}
          onChange={(e) => {
            setSelectedStudent(e.target.value);
            setShowContent(e.target.value === studentData.name);
          }}
          placeholder="Select student" 
          className="rounded-lg border p-2" 
        />
      </div>

      {showContent && (
        <>
          <div className="p-6 rounded-lg bg-white flex flex-col gap-2">
            <h3 className="text-lg font-semibold ">Engagement and Collaboration Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="label">Engagement</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <span>Participation - Above or Below Average</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {studentData.engagement.participation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <span>Interactions level</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {studentData.engagement.interactionsLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <span>Interactions relevance</span>
                    <SmallProgressIndicator value={studentData.engagement.interactionsRelevance} />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Social Posture</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <span>Positive</span>
                    <SmallProgressIndicator value={studentData.socialPosture.positive} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <span>Negative</span>
                    <SmallProgressIndicator value={studentData.socialPosture.negative} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">DeITA&apos;s observations</h3>
            
            </div>
            <div className="space-y-4 bodySmall">
              {studentData.observations.map((observation, index) => (
                <p key={index} className="text-gray-600">{observation}</p>
              ))}
            </div>
            <button className="text-primary border rounded-lg mt-3 flex items-center gap-2 p-3">
                <Edit size={16} /> Edit manually
              </button>
          </div>

          <div className="p-6 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-4 text-primary">Lesson notes</h3>
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search notes"
                  className="rounded-lg border p-3 pl-10"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
              <select className="rounded-lg border p-3">
                <option>Sort by date: Newest</option>
              </select>
            </div>
            <div className="space-y-4">
              {studentData.lessonNotes.map((note, index) => (
                <TNoteBookLessonNote
                  key={index}
                  date={note.date}
                  title={note.title}
                  metrics={note.metrics}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}