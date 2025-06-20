import React from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/ui/Hero'

export default function Landing() {
  return (
    <div className='overflow-hidden'>
      <div className='t-0'><Navbar></Navbar></div>
      
      <div className="mt-20">
  <Hero />
  <div className="h-[2000px] bg-yellow-300">Scroll Test Area</div>
</div>
      

    </div>
  )
}
