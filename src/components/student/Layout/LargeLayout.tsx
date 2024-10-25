import React from 'react'
import StudentSidebar from '../Sidebar/StudentSidebar'

interface Props{
  selectedMainPage:React.JSX.Element;
}

export default function LargeLayout({selectedMainPage}:Props) {
  return (
    <div className='flex gap-2'>
      <StudentSidebar/>
      {selectedMainPage}
    </div>
  )
}
