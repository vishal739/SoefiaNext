import React from "react";
import ClassesInnerView from "../components/Classes/ClassesInnerView";
import ClassSideBar from "../components/Classes/ClassSideBar";

const sasmpleClasses = ["Alegbra I", "Maths 4", "Chemistry 2"];

export default function TClasses() {
  const [selectedClass, setSelectedClass] = React.useState<string>("Alegbra I");
  return (
    <div className="w-full flex md:flex-row flex-col">
      <ClassSideBar
      selectedClass={selectedClass}
        classes={sasmpleClasses}
        onClassChange={(val) => {
          setSelectedClass(val);
        }}
      />
      {selectedClass ? (
        <ClassesInnerView classId={selectedClass} />
      ) : (
        <div className="w-full p-6 space-y-8">Select a class to view</div>
      )}
    </div>
  );
}
