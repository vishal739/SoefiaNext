import React, { useState } from 'react';
import StudentTopSummary from '../components/StudentTopSummary';
import RecentLessonNotes from '../components/LessonNotes/RecentLessonNotes';
import VoiceTestDialog from '../components/home/VoiceTestDialog';

export default function StudentHomePage() {
  const [voiceTestOpen, setVoiceTestOpen] = useState(false);

  return (
    <div className="px-8 py-[2%] w-full flex flex-col gap-4">
      <StudentTopSummary />
      <div className="bg-white p-6 rounded-lg flex flex-col gap-2">
        <span className="caption">voice test</span>
        <button
          onClick={() => setVoiceTestOpen(true)}
          className="px-4 py-2 rounded-lg bg-primary text-sm text-white w-fit"
        >
          Voice Test
        </button>
      </div>
      <RecentLessonNotes />
      <VoiceTestDialog
        isOpen={voiceTestOpen}
        onClose={() => setVoiceTestOpen(false)}
      />
    </div>
  );
}