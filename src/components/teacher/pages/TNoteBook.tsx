import React from "react";
import TNoteBookInner from "../components/TNoteBook/TNoteBookInner";
import TNoteBookSidebar from "../components/TNoteBook/TNoteBookSidebar";

const notebooks = ["ALgebra class a", "Notebook 2", "Notebook 3"];

export default function TNoteBook() {
  const [selectedNotebook, setSelectedNotebook] = React.useState(notebooks[0]);
  return (
    <div className="flex gap-2 ">
      <TNoteBookSidebar
        notebooks={notebooks}
        selectedNotebook={selectedNotebook}
        onClassChange={(val) => {
          setSelectedNotebook(val);
        }}
      />

      <TNoteBookInner selectedNoteBook={selectedNotebook
      }  />
    </div>
  );
}
