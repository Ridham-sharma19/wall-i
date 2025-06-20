import React from 'react'

export default function Info() {
  return (
   <div className='grid grid-cols-1 min-h-screen p-6 md:p-12 bg-gradient-to-br gap-4 md:grid-cols-2 lg:grid-cols-2 items-center justify-center'>
  
  {/* Feature 1: Easy to Use */}
  <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl'>
    <div className='text-3xl md:text-4xl font-bold text-[#001F61] mb-3'>Easy to Use</div>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-2'>Just upload your Excel file.</p>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>And track all your stock with powerful AI Assistance.</p>
  </div>

  {/* Feature 2: Quick Response */}
  <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl'>
    <div className='text-3xl md:text-4xl font-bold text-[#001F61] mb-3'>Get Quick Response</div>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>With real-time updates and Alerts 🔔</p>
  </div>

  {/* Feature 3: Real-time Insights (New Box) */}
  <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl'>
    <div className='text-3xl md:text-4xl font-bold text-[#001F61] mb-3'>Real-time Insights</div>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-2'>Gain deep understanding of your inventory flow.</p>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>Make data-driven decisions instantly.</p>
  </div>

  {/* Feature 4: Cost Optimization (New Box) */}
  <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl'>
    <div className='text-3xl md:text-4xl font-bold text-[#001F61] mb-3'>Cost Optimization</div>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-2'>Reduce holding costs and prevent overstocking.</p>
    <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>Optimize your budget with smart predictions.</p>
  </div>

</div>
  )
}
