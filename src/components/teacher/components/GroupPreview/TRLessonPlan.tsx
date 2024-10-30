import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TRLessonPlan = () => {
  return (
    <Card className="max-w-3xl mx-auto p-6">
      <CardContent className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Basic function transformations</h1>
            
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm text-gray-600">
                  <span className="font-medium">DATE</span>
                  <br />
                  20 / 09 / 2024
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-sm text-gray-600">
                  <span className="font-medium">CLASS</span>
                  <br />
                  Algebra I, Block B
                </span>
              </div>
            </div>
          </div>
          
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lesson Plan Sections */}
        <div className="space-y-8">
          <Section title="Lesson plan">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum
            </p>
          </Section>
          
          <Section title="Objective">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum
            </p>
          </Section>

          <Section title="Standards">
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-2">
            <span className="text-gray-600 font-medium">14.3.6</span>
            <p className="text-gray-600">
              Name of standard included. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
              ))}
            </div>
          </Section>

          {['Description', 'Activity', 'Materials', 'Activity Academic Goal', 
            'Activity Engagement or Collaboration Goal', 'Homework'].map((title) => (
            <Section key={title} title={title}>
              <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum
              </p>
            </Section>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-6 mt-8 border-t">
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Close
          </button>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Duplicate lesson
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper component for sections
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="space-y-2">
    <h2 className="font-medium text-gray-900">{title}</h2>
    {children}
  </div>
);

export default TRLessonPlan;