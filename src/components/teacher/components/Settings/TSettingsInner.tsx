import React, { useState } from 'react';
import { Mic, FileUp, Upload, Plus, Minus } from 'lucide-react';
import { Microphone } from "@phosphor-icons/react";
import TextAreaWithActions from '../CreateLesson/TextAreaWithActions';
import Image from 'next/image';

const TSettingsInner = () => {
  const [activeTab, setActiveTab] = useState('Regular');
  const [stepAwayLimit, setStepAwayLimit] = useState(5);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  const groupRoles = [
    'Spokesperson', 'Recordkeeper', 'Timekeeper', 'Researcher', 'Facilitator'
  ];

  return (
    <div className="max-w-4xl md:mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Settings</h1>
      
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        {['Regular', 'Advanced'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-1 ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     <div className='bg-white rounded-lg p-6 flex flex-col gap-6'>
       {/* Special Instructions Section */}
       <div className="space-y-4">
        <h2 className="text-lg font-semibold">Teacher Special Instructions for DeiTA</h2>
        <p className="text-gray-600 text-sm">
          Update your DeiTAs on any policies or guidelines that they should follow when working with your students
        </p>
        <TextAreaWithActions
        onAddFiles={()=>{}}
        onAddUrl={()=>{}}
        description='take your note'
          label=""
          placeholder="Type your note"
          value={specialInstructions}
          onChange={setSpecialInstructions}
        />
        <button className="ml-auto block text-sm bg-primary text-white px-4 py-2 rounded-lg">
          Add guidance
        </button>
      </div>

      {/* Group Preferences Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Preferences for creating student groups</h2>
        <p className="text-gray-600 text-sm">
          These preferences will be your default settings for creating student groups but can be modified for any lesson when you preview that lesson
        </p>
        
        {/* Formation Options */}
        <div className="flex md:flex-row flex-col md:items-center gap-4">
          <div className="text-sm font-medium">Formation</div>
          <div className="flex md:flex-row flex-col gap-4">
            {['Alphabetic', 'Heterogenous', 'Homogenous', 'Random'].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer  bg-slate-50 px-4 py-2 rounded-lg">
                <input
                  type="radio"
                  name="formation"
                  value={option}
                  defaultChecked={option === 'Alphabetic'}
                  className=""
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Naming Options */}
        <div className="flex  md:items-center md:flex-row flex-col gap-4">
          <div className="text-sm font-medium">Naming</div>
          <div className="flex md:flex-row flex-col gap-4">
            {['Colors', 'Letters', 'Numbers'].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer  bg-slate-50 px-4 py-2 rounded-lg">
                <input
                  type="radio"
                  name="naming"
                  value={option}
                  defaultChecked={option === 'Colors'}
                  className="text-primary"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step Away Limit */}
        <div className="space-y-2">
          <div className="text-sm font-medium flex items-center gap-2">
            Step Away Limit
            <div className="w-4 h-4 rounded-full bg-primary text-white text-xs flex items-center justify-center">?</div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setStepAwayLimit(Math.max(0, stepAwayLimit - 1))}
              className="p-2 border rounded-md hover:bg-gray-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
          
              value={stepAwayLimit}
              onChange={(e) => setStepAwayLimit(parseInt(e.target.value) || 0)}
              className="w-16 text-center border rounded-md p-2"
            />
            <button 
              onClick={() => setStepAwayLimit(stepAwayLimit + 1)}
              className="p-2 border rounded-md hover:bg-gray-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Group Roles */}
        <div className="space-y-2">
          <div className="text-sm font-medium flex items-center gap-2">
            Group Roles
            <div className="w-4 h-4 rounded-full bg-primary text-white text-xs flex items-center justify-center">?</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {groupRoles.map((role) => (
              <span key={role} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                {role}
              </span>
            ))}
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
              + add role
            </button>
          </div>
        </div>
      </div>

      {/* DeiTA Customization Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Creating how your DeiTA looks and sounds</h2>
        <p className="text-gray-600 text-sm">
          These settings will determine how your DeiTAs sound when they speak and how they looks whenever they appear
        </p>
        <div className="border rounded-lg p-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className='flex flex-col items-center justify-center'>
              <Image src="/testing/deita.png" alt="Avatar" className="rounded-lg" height={150}  width={150} />
              <button className="mt-2 text-primary text-sm px-4 py-2 border rounded-lg">Try Again</button>
            </div>
            <div className="col-span-2 space-y-4">
              <textarea
                placeholder="Type your note"
                className="w-full min-h-[150px] p-3 border rounded-md text-sm"
              />
              <div className="flex md:flex-row flex-col gap-4">
                <button className="flex items-center gap-1 text-primary bg-[#E3E4FF] px-4 py-2 rounded-lg">
                  <Mic className="w-4 h-4" />
                  <span className="text-sm">Tell Delta</span>
                </button>
                <button className="flex items-center gap-1 text-primary px-4 py-2 border rounded-lg">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Upload Image</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Voice tone</label>
              <select className="w-full p-2 border rounded-md">
                <option>US - Boston</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Voice sex</label>
              <select className="w-full p-2 border rounded-md">
                <option>Female</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Voice age</label>
              <input type="number" defaultValue={38} className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg ml-auto block">
            Submit
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-primary mt-4 text-white px-4 py-2 rounded-lg ml-auto text-sm block">
        Save
      </button>
     </div>
    </div>
  );
};

export default TSettingsInner;