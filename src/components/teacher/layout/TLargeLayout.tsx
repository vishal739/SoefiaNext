import React from 'react'
import TeacherSidebar from '../Sidebar/TeacherSidebar';

interface Props{
    selectedMainPage:React.JSX.Element;
  }
export default function TLargeLayout({selectedMainPage}:Props) {
  return (
    <div className='flex gap-2'>
        <TeacherSidebar/>
        {selectedMainPage}
    </div>
  )
}
