import React from "react";
import { X, Edit2, PanelTopIcon } from "lucide-react";
import {
  Calendar,
  Info,
  Repeat,
  Users,
  UserSound,
} from "@phosphor-icons/react";
import { toast } from "react-toastify";
import GroupPreview, { GroupData } from "../GroupPreview/GroupPreview";
import { DialogTrigger, Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface Props {
  setCompletionStep: VoidFunction;
}

interface DetailItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  element?: React.JSX.Element;
}

interface EditableSection {
  title: string;
  content: string[];
  hasEdit?: boolean;
  hasCorrect?: boolean;
}


const generateId = () => Math.random().toString(36).substr(2, 9);
const sampleData: GroupData = {
  "Group A": [
    { id: generateId(), name: "Davison", role: "Recordkeeper" },
    { id: generateId(), name: "Brissett", role: "Spokesperson" },
    { id: generateId(), name: "Hauser", role: "Timekeeper" },
    { id: generateId(), name: "Mazzulla", role: "Researcher" },
  ],
  "Group B": [
    { id: generateId(), name: "Smith", role: "Recordkeeper" },
    { id: generateId(), name: "Johnson", role: "Spokesperson" },
    { id: generateId(), name: "Williams", role: "Timekeeper" },
    { id: generateId(), name: "Watson", role: "Researcher" },
  ],
  "Group C": [
    { id: generateId(), name: "Brown", role: "Recordkeeper" },
    { id: generateId(), name: "Jones", role: "Spokesperson" },
    { id: generateId(), name: "Garcia", role: "Timekeeper" },
  ],
  "Group D": [
    { id: generateId(), name: "Miller", role: "Recordkeeper" },
    { id: generateId(), name: "Davis", role: "Spokesperson" },
    { id: generateId(), name: "Rodriguez", role: "Timekeeper" },
    { id: generateId(), name: "Martinez", role: "Researcher" },
  ],
  "Group E": [
    { id: generateId(), name: "Hernandez", role: "Recordkeeper" },
    { id: generateId(), name: "Lopez", role: "Spokesperson" },
    { id: generateId(), name: "Gonzalez", role: "Timekeeper" },
  ],
};

const DetailRow = ({ icon, label, value, element }: DetailItem) => (
  <div className="flex items-center gap-2 py-2 ">
    {icon}
    <div className="flex gap-4 items-center">
      <div className="flex flex-col ">
        <span className="caption">{label}</span>
        <span className="bodyMedium">{value}</span>
      </div>
      {element}
    </div>
  </div>
);

const Section = ({
  title,
  content,
  hasEdit = true,
  hasCorrect = true,
}: EditableSection) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="font-medium">{title}</h3>
    </div>
    <div className="space-y-2">
      {content.map((item, index) => (
        <p key={index} className="text-sm text-gray-600">
          {item}
        </p>
      ))}
    </div>
    <div className="flex gap-4 items-center">
      {hasCorrect && (
        <button className="text-primary text-sm bg-[#E3E4FF] px-4 py-2 rounded-lg border hover:bg-[#E3E4FF]/80 flex items-center gap-2">
          <UserSound weight="fill" />
          Correct with DeltA
        </button>
      )}
      {hasEdit && (
        <button className="text-primary text-sm hover:text-primary/80 flex items-center gap-1 px-4 py-2 rounded-lg border">
          <Edit2 className="w-4 h-4" />
          Edit manually
        </button>
      )}
    </div>
  </div>
);

export default function CreateLessonStepTwo({ setCompletionStep }: Props) {
  const [groups, setGroups] = React.useState(sampleData);
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Create lesson</h1>
          <p className="text-sm opacity-80">Step 2 out of 2</p>
        </div>
        <button onClick={()=>{
          router.back();
        }} className="p-2 hover:bg-white/10 rounded-full">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="2xl:max-w-[80%] p-6 space-y-8">
        {/* Details Section */}
        <section className="bg-white rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Details</h2>
            <button className="text-primary flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:text-primary/80">
              <Edit2 size={14} /> Edit details
            </button>
          </div>
          <div className="space-y-4">
            <DetailRow
              icon={<Calendar size={24} />}
              label="DATE"
              value="10/07/2024"
            />

            <DetailRow
              icon={<Users size={24} />}
              label="CLASS"
              value="Algebra I Block A"
              element={
                <Dialog >
                  <DialogTrigger className="text-primary text-sm px-4 py-2 flex items-center gap-2 rounded-lg border hover:text-primary/80">
                      <Users /> See group preview
                  </DialogTrigger>
                  <DialogContent >
                  <DialogTitle></DialogTitle>
                    <GroupPreview groups={groups} onChange={setGroups} />
                    {/* <div className="w-[1200px]"> */}

                    {/* </div> */}
                  </DialogContent>
                </Dialog>
              }
            />

            <DetailRow
              icon={<PanelTopIcon size={24} />}
              label="TOPIC"
              value="Writing Equations to Model Relationships"
            />
          </div>
        </section>

        {/* Lesson Plan Section */}
        <section className="bg-white rounded-lg p-6 space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium">Lesson plan</h2>
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100">
                <Info />
              </span>
            </div>
            <button className="text-primary text-sm hover:text-primary/80 px-4 py-2 rounded-lg border flex items-center gap-2">
              <Edit2 size={14} /> Edit lesson information
            </button>
          </div>

          <Section
            title="Objective"
            content={[
              "Students should be able to establish the relationships between different pieces of information in order to create a numeric model of these relationships.",
              "• Understanding variables and their use in models",
              "• Writing equations using both variables and constants to describe relationships and constraints",
              "• Identify quantities that vary and those that do not based on both narrative descriptions and mathematical expressions, such as equations",
            ]}
          />

          <Section
            title="Standards"
            content={[
              "HSA-CED.A.2: Create equations in two or more variables to represent relationships between quantities; graph equations on coordinate axes with labels and scales",
              "HSA-CED.A.3: Represent constraints by equations or inequalities, and by systems of equations and/or inequalities, and interpret solutions as viable or nonviable options in...",
            ]}
          />

          <Section
            title="Description"
            content={[
              "• Warm up activity (5 minutes), provided on worksheet",
              "• Direct instruction (20 minutes), relationships between quantities using geometric concepts",
              "• Group work (20 minutes), solving 10 problems (including sub-parts), from simple relationship representations to more complex deductions from narrative",
              "• Wrap up (5 minutes) - no homework",
            ]}
          />

          <Section
            title="Activity"
            content={[
              "First, students write equations to represent quantities and relationships in two situations. In each situation, students express the same relationship multiple times: initially using numbers and variables and later using only variables. The progression helps students see that quantities can be known or unknown, and can stay the same or vary, but both kinds of quantities can be expressed with numbers or letters.",
              "Then, from the given descriptions, students are aware that there are four relevant quantities in the car purchase situations. In each situation, the value of at least one quantity is not given and there is no need for students to name it, either using a word or a phrase (for instance, 'total price' or 'original price') or to use a variable (for example, t or P). Some students might choose to use a symbol. Monitor for the different ways students represent these quantities.",
            ]}
          />

          <Section
            title="Activity Academic Goal"
            content={[
              "Academic progress during the group work will be reported as follows:",
              "• Question 1: 5 minutes (each relatively simple sup-part benchmarked to 50 seconds)",
              "• Question 2: 5 minutes (a discussion question, with different qualitative answers)",
              "• Question 3: 5 minutes (each sub-part benchmarked to 60 seconds)",
              "• Question 4: 5 minutes (discussion questions requiring abstract manipulation of the results of Question 3)",
            ]}
          />

          <Section
            title="Activity Social or Collaboration Goal"
            content={[
              "Social progress will be reported as follows:",
              "• The number of students in the group x 3 = total interactions, e.g., 9 in a 3 student group",
              "• Each contributed student relevant interaction = 1/9 = 11.1% progress (up to 3 per student, based on the stated goal)",
              "• Irrelevant interactions will contributed no progress towards the social goal",
            ]}
          />

          <Section
            title="Homework"
            content={["There is no homework for this lesson"]}
          />
          <button className="hover:text-gray-800 flex gap-2 items-center border px-4 py-2 rounded-lg text-sm font-semibold text-primary">
            <Repeat /> Try again: Create new preview
          </button>
        </section>
        <GroupPreview groups={groups} onChange={setGroups} />

        <div className="h-36" />

        {/* Footer */}
        <div className="flex justify-between p-6 fixed bottom-0 right-0 left-0 w-full bg-white border-t shadow-md">
          <button className="hover:text-gray-800 border px-4 py-2 rounded-lg text-sm font-semibold text-primary">
            Cancel
          </button>
          <div className="space-x-4">
            <button className="text-primary px-4 text-sm py-2 rounded-lg border hover:text-primary/80">
              Save as draft
            </button>
            <button
              onClick={() => {
                toast.success("Lesson created successfully");
              }}
              className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Create lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
