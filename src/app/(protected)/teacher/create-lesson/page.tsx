import CreateLesson from '@/components/teacher/pages/CreateLesson'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateLesson/>
    </Suspense>
  )
}
