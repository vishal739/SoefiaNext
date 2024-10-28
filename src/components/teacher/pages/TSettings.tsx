import React from "react";
import TSettingsInner from "../components/Settings/TSettingsInner";
import TSettingsSidebar from "../components/Settings/TSettingsSidebar";

export default function TSettings() {
  const [selectedClass,setSelectedClass]=React.useState("");
  return (
    <div className="flex">
      <TSettingsSidebar
        notebooks={["algebra 1","ALgebra32","class"]}
        onClassChange={(val)=>{
          setSelectedClass(val)
        }}
        selectedNotebook={selectedClass}
      />
      <TSettingsInner />
    </div>
  );
}
