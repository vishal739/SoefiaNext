import TeacherRouteProtection from "@/components/teacher/helpers/TeacherRouteProtection";
import TeacherWrapper from "@/components/teacher/TeacherWrapper";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeacherRouteProtection>
        <TeacherWrapper />
      </TeacherRouteProtection>
    </Suspense>
  );
}
