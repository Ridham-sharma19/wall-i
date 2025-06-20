import React from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/ui/Hero'
import Info from '../components/ui/Info'
import Footer from '../components/ui/Footer'

export default function Landing() {
  return (
    <div className='overflow-hidden'>
      <div className='t-0'><Navbar></Navbar></div>
      
      <div className="mt-20">
     <Hero />
    <Info></Info>
    <Footer></Footer>
   </div>
      

    </div>
  )
}
