import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#FEFFFE] h-screen w-screen relative'> 

  <div className='p-2 md:p-8 rounded-2xl relative overflow-hidden'> 
    {/* Image */}
    <img
      className='rounded-2xl md:rounded-3xl h-auto md:max-h-144 w-full object-cover'
      src="inventory.jpg"
      alt="Inventory Management"
    />

   
    <div className="absolute inset-0 mt-4 flex flex-col items-center justify-center pb-24"> 
      <div className=' md:mb-52  '>
        <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl  text-center leading-tight drop-shadow-lg'> 
        Manage Inventory<br/>with <span className='text-[#FEC221]'>AI Assitance</span>
      </h1>
     
      <div className="grid grid-cols-2 gap-4 w-full px-4 py-4 sm:grid-cols-2 md:grid-cols-4 md:px-8 lg:px-16 xl:px-40 ">
  <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Always on Point</button>
  <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Predict Restock</button>
  <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Real-Time Inventory</button>
  <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Everyday Efficiency</button>
</div>

      </div>
     
    </div>
    
  </div>

</div>
  )
}
