import React from 'react'
import StudentSidebar from '../Sidebar/StudentSidebar'
import StudentSidebarMobile from '../Sidebar/StudentSidebarMobile';

interface Props{
  selectedMainPage:React.JSX.Element;
}

export default function SmallLayout({selectedMainPage}:Props) {
  return (
    <div className='flex flex-col gap-2'>
      <StudentSidebarMobile/>
      {selectedMainPage}
    </div>
  )
}
