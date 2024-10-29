import React from 'react'
import TeacherSidebar from '../Sidebar/TeacherSidebar';
import TeacherSidebarMobile from '../Sidebar/TeacherSidebarMobile';

interface Props{
    selectedMainPage:React.JSX.Element;
  }
export default function TSmallLayout({selectedMainPage}:Props) {
  return (
    <div className='flex flex-col gap-2'>
        <TeacherSidebarMobile/>
        {selectedMainPage}
    </div>
  )
}
