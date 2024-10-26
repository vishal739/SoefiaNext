import TeacherRouteProtection from '@/components/teacher/helpers/TeacherRouteProtection'
import TeacherWrapper from '@/components/teacher/TeacherWrapper'
import React from 'react'

export default function page() {
  return (
    <TeacherRouteProtection>
        <TeacherWrapper/>
    </TeacherRouteProtection>
  )
}
