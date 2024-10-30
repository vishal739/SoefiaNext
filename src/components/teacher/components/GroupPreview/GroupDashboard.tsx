import React, { useState } from "react";
import { X } from "lucide-react";

const GroupDashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState("Group C");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const groups = [
    "Group A",
    "Group B",
    "Group C",
    "Group D",
    "Group E",
    "Group F",
  ];
  
  const members = [
    { name: "Overview", role: "Whole Group" },
    { name: "Jaylen Brown", role: "Recordkeeper" },
    { name: "Derrick White", role: "Researcher" },
    { name: "Jayson Tatum", role: "Spokesperson" },
    { name: "Jrue Holiday", role: "Timekeeper" },
  ];

  const toggleMemberSelection = (memberName: string) => {
    setSelectedMembers(prev => {
      if (prev.includes(memberName)) {
        return prev.filter(name => name !== memberName);
      } else {
        return [...prev, memberName];
      }
    });
  };

  return (
    <div className="bg-white/80 flex items-start justify-center">
      <div className="w-full rounded-lg flex justify-between h-full">
        {/* Sidebar */}
        <div className="w-48 border-r  flex flex-col justify-between ">
         <div className="flex flex-col gap-4">
         {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`w-full text-left py-2 px-4 rounded transition-colors hover:bg-blue-50/50 ${
                group === selectedGroup
                  ? "bg-blue-50 text-primary font-medium"
                  : "text-gray-600"
              }`}
            >
              {group}
            </button>
          ))}
         </div>
          <div className="pt-4">
            <button className="flex items-center text-primary py-2 px-4">
              <span>Close groups</span>
              <X className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold">{selectedGroup}</h2>
          </div>

          {/* Select section */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-2">Select</h3>
          
            <div className="grid grid-cols-4 gap-4">
              {members.map((member) => (
                <button
                  key={member.name}
                  onClick={() => toggleMemberSelection(member.name)}
                  className={`text-left p-3 rounded-md transition-all ${
                    selectedMembers.includes(member.name)
                      ? "bg-blue-50 border-2 border-blue-200"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Summary section */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">
              Lesson, Engagement, and Collaboration Summary
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {/* Progress */}
              <div>
                <h4 className="text-sm text-gray-600 mb-4">Progress</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Academic</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      75%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Social</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      70%
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div>
                <h4 className="text-sm text-gray-600 mb-4">Engagement</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Participation</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      Balanced
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Interactions level</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                      Medium
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Interactions relevance</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      67%
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Posture */}
              <div>
                <h4 className="text-sm text-gray-600 mb-4">Social Posture</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Positive</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      61%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Negative</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                      26%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the component remains the same */}
          {/* DeiTA's observations */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">DeiTA&apos;s observations</h3>
            <p className="text-gray-600 mb-4">
              Group C struggled with how the standard deviation and other
              measures of variability change when you add, change, or remove
              values in a data set. Derrick and Jayson could not seem to
              visualize how a single data point impacted the entire data set&apos;s
              results. The students engaged in discussions, attempting to
              resolve their confusion. Jaylen did not seem especially engaged in
              the exercise. He repeatedly asked about plans after school, rather
              than the exercise. This distracted Jayson in particular.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-md">
                <span className="mr-2">Correct with DeiTA</span>
              </button>
              <button className="flex items-center px-4 py-2 text-blue-600 rounded-md border border-blue-200">
                <span className="mr-2">Edit manually</span>
              </button>
            </div>
          </div>

          {/* Observations from students */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Observations from students</h3>
            <p className="text-gray-600">
              The students enjoyed changing the data sets and relating the items
              in those sets to objects. Some students, in particular White and
              Holiday, felt that it was hard to participate as a group, however,
              and that it was difficult to share ideas during the discussion
              questions.
            </p>
          </div>

          {/* Synthesis and Analysis */}
          <div>
            <h3 className="font-medium mb-2">Synthesis and Analysis</h3>
            <div className="text-sm text-gray-500 mb-4">
              Insights and Possible Actions
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Points of Teaching Emphasis:</h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>Reinforce the difference between x and s and σ and μ</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Exercises or Lesson Approaches:
                </h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>
                    Implement a step-by-step guided activity that walks students
                    through the process of converting real-world distributions
                    into a mathematically calculated standard deviation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDashboard;