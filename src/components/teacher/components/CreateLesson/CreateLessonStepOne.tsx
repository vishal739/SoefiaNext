import React, { useState } from "react";
import { X, Mic, Upload, FileUp } from "lucide-react";
import {
  FormationOption,
  LessonFormData,
  NamingOption,
} from "@/models/create/create.lesson.model";
import { Microphone, Users } from "@phosphor-icons/react";
import TextAreaWithActions from "./TextAreaWithActions";
import { useRouter } from "next/navigation";

interface Props {
  setCompletionStep: VoidFunction;
  pageId?: string | null;
}

const formationOptions: FormationOption[] = [
  { id: "1", label: "Alphabetic", value: "alphabetic" },
  { id: "2", label: "Heterogenous", value: "heterogenous" },
  { id: "3", label: "Homogenous", value: "homogenous" },
  { id: "4", label: "Random", value: "random" },
];

const namingOptions: NamingOption[] = [
  { id: "1", label: "Colors", value: "colors" },
  { id: "2", label: "Letters", value: "letters" },
  { id: "3", label: "Numbers", value: "numbers" },
];

export default function CreateLessonStepOne({
  setCompletionStep,
  pageId,
}: Props) {
  const [formData, setFormData] = useState<LessonFormData>({
    class: "",
    topic: "",
    date: "",
    formation: "homogenous",
    naming: "letters",
    groupCount: 4,
    objective: "",
    standard: "",
    description: "",
    activity: "",
    materials: "",
    activitySocialGoal: "",
    activityAcademicGoal: "",
    homework: "",
  });

  const handleGroupCountChange = (operation: "increment" | "decrement") => {
    setFormData((prev) => ({
      ...prev,
      groupCount:
        operation === "increment"
          ? prev.groupCount + 1
          : Math.max(1, prev.groupCount - 1),
    }));
  };
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Create lesson</h1>
          <p className="text-sm opacity-80">Step 1 out of 2</p>
        </div>
        <button
          onClick={() => {
            router.back();
          }}
          className="p-2 hover:bg-white/10 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="2xl:max-w-[80%] p-6 space-y-8">
        {/* Details Section */}
        <section className="bg-white rounded-lg p-6 flex flex-col gap-6">
          <h2 className="bodyBig">Details</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700 w-fit">
                Class
              </label>
              <select
                className="w-[300px] bg-white p-2 text-gray-500 border rounded-md"
                value={formData.class}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, class: e.target.value }))
                }
              >
                <option value="">Select class</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700 w-fit">
                Topic
              </label>
              <input
                type="text"
                placeholder="Enter the lesson topic"
                className="w-full bg-white p-2 text-gray-500 border rounded-md"
                value={formData.topic}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, topic: e.target.value }))
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700 w-fit">
                Date
              </label>
              <input
                type="date"
                className="w-[300px] bg-white p-2 text-sm text-gray-500 border rounded-md"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
          </div>
        </section>

        {/* Groups Section */}
        <section className="bg-white rounded-lg p-6 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="bodyBig">Groups</h2>
            <p className="bodySmall">
              To change how groups are organized, go to DeltA Preferences and
              change group settings.
            </p>
          </div>

          <div className="flex flex-col gap-5 py-4 ">
            <div className="flex md:flex-row flex-col gap-4 md:items-center">
              <p className="text-sm font-medium ">Formation</p>
              <div className="flex md:flex-row flex-col gap-4 md:ml-6">
                {formationOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 bg-[#10121C0A] p-3 px-4 rounded-lg"
                  >
                    <input
                      type="radio"
                      name="formation"
                      value={option.value}
                      checked={formData.formation === option.value}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          formation: e.target.value,
                        }))
                      }
                      className="text-primary"
                    />
                    <span className="text-sm ">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex md:flex-row flex-col  gap-4 py-4 md:items-center">
              <p className="text-sm font-medium">Naming</p>
              <div className="flex md:flex-row flex-col gap-4 md:ml-10">
                {namingOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 bg-[#10121C0A] p-3 px-4 rounded-lg"
                  >
                    <input
                      type="radio"
                      name="naming"
                      value={option.value}
                      checked={formData.naming === option.value}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          naming: e.target.value,
                        }))
                      }
                      className="text-primary"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm font-medium ">Group No.</p>
              <div className="flex items-center gap-4 text-primary border rounded-md ml-6">
                <button
                  onClick={() => handleGroupCountChange("decrement")}
                  className="w-8 h-8 border rounded-md flex items-center hover:bg-primary hover:bg-opacity-10 justify-center text-lg"
                >
                  -
                </button>
                <span>{formData.groupCount}</span>
                <button
                  onClick={() => handleGroupCountChange("increment")}
                  className="w-8 h-8 border rounded-md flex items-center hover:bg-primary hover:bg-opacity-10 justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button className="text-primary flex px-4 items-center gap-2 py-2 rounded-md border w-fit text-sm">
              <Users weight="fill" />
              Manage Group
            </button>
          </div>
        </section>

        {/* Lesson Plan Section */}
        <section className="bg-white rounded-lg p-6 shadow-sm space-y-6">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="bodyBig">Lesson plan</h2>
              <p className="bodySmall xl:max-w-[50%]">
                Add information about your lesson. DeltA will analyze your input
                and create a lesson plan in the next step. You can also upload a
                file with an existing lesson plan
              </p>
            </div>
            <button className="flex items-center gap-2 text-primary border px-4 py-2 rounded-md w-fit hover:text-primary/80">
              <Upload className="w-4 h-4" />
              <span className="text-sm font-semibold">Upload lesson plan</span>
            </button>
          </div>

          <TextAreaWithActions
            description="take your note"
            label="Objective"
            placeholder="Type your note"
            value={formData.objective}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, objective: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Standard
            </label>
            <input
              type="text"
              placeholder="Type in your the standard"
              className="w-full p-2 border rounded-md mb-2 text-sm"
              value={formData.standard}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, standard: e.target.value }))
              }
            />
            <button className="text-primary hover:text-primary/80 text-sm px-4 py-2 rounded-lg border">
              + Add standard
            </button>
          </div>

          <TextAreaWithActions
            description="take your note"
            label="Description"
            placeholder="Type your note"
            value={formData.description}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, description: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <TextAreaWithActions
            description="take your note"
            label="Activity"
            placeholder="Type your note"
            value={formData.activity}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, activity: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div>
            <h3 className="text-sm font-medium mb-2">
              Materials{" "}
              <span className="text-gray-500">
                (No need to add things you have provided DeltA already through
                the LMS)
              </span>
            </h3>
            <TextAreaWithActions
              description="take your note"
              label=""
              placeholder="Type your note"
              value={formData.materials}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, materials: value }))
              }
              onAddUrl={function (): void {
                throw new Error("Function not implemented.");
              }}
              onAddFiles={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>

          <TextAreaWithActions
            description="take your note"
            label="Activity Social Goal"
            placeholder="Type your note"
            value={formData.activitySocialGoal}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, activitySocialGoal: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <TextAreaWithActions
            description="take your note"
            label="Activity Academic Goal"
            placeholder="Type your note"
            value={formData.activityAcademicGoal}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, activityAcademicGoal: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <TextAreaWithActions
            description="take your note"
            label="Homework"
            placeholder="Type your note"
            value={formData.homework}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, homework: value }))
            }
            onAddUrl={function (): void {
              throw new Error("Function not implemented.");
            }}
            onAddFiles={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </section>
        <div className="h-36" />

        {/* Footer */}
        <div className="flex md:flex-row flex-col gap-4 justify-between p-6 fixed bottom-0 right-0 left-0 w-full bg-white border-t shadow-md ">
          <button className=" hover:text-gray-800 border px-4 py-2 rounded-lg text-sm font-semibold text-primary">
            Cancel
          </button>
          <div className="space-x-4">
            <button className="text-primary px-4 text-sm py-2 rounded-lg border hover:text-primary/80">
              Save as draft
            </button>
            <button
              onClick={setCompletionStep}
              className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Create lesson preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
