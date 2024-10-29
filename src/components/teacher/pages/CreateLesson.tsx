"use client";
import React from "react";
import CreateLessonStepOne from "../components/CreateLesson/CreateLessonStepOne";
import { useSearchParams } from "next/navigation";
import CreateLessonStepTwo from "../components/CreateLesson/CreateLessonStepTwo";

export default function CreateLesson() {
  const [completionStep, setCompletionStep] = React.useState(0);
  const page = useSearchParams().get("lesson-id");

  const steps = [
    <CreateLessonStepOne
    key={"CreateLessonStepOne"}
      pageId={page}
      setCompletionStep={() => {
        setCompletionStep(1);
      }}
    />,
    <CreateLessonStepTwo
    key={"CreateLessonStepTwo"}
      setCompletionStep={() => {
        setCompletionStep(1);
      }}
    />,
  ];

  return <div>{steps[completionStep]}</div>;
}
