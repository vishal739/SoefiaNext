import Home from '@/components/student/components/home/Home'
import React, { Suspense } from 'react'

export default function page() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <Home/>
   </Suspense> 
  )
}
