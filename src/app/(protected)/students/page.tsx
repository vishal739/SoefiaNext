import StudentRouteProtection from "@/components/student/helpers/StudentRouteProtection";
import StudentWrapper from "@/components/student/StudentWrapper";
import React from "react";

export default function page() {
  return (
    <StudentRouteProtection>
      <StudentWrapper />
    </StudentRouteProtection>
  );
}
