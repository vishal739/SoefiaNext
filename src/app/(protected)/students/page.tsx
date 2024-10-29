import StudentRouteProtection from "@/components/student/helpers/StudentRouteProtection";
import StudentWrapper from "@/components/student/StudentWrapper";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StudentRouteProtection>
        <StudentWrapper />
      </StudentRouteProtection>
    </Suspense>
  );
}
