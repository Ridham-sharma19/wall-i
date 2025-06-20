import React from 'react';

export default function Hero() {
  return (
    <div className='bg-[#FEFFFE] w-full relative'> 

     
      <div className='p-2 md:p-4 rounded-2xl relative overflow-hidden'> 
     
        <img
          className='rounded-2xl md:rounded-3xl h-auto w-full object-cover max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]' // Adjusted max-height for better image scaling
          src="inventory.jpg"
          alt="Inventory Management"
        />

       
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8"> 
          
          <div className='w-full flex flex-col items-center justify-center px-2 md:px-0'> 
            <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight drop-shadow-lg mb-4 md:mb-6 lg:mb-8'> {/* Reduced max text size and adjusted margin-bottom */}
              Manage Inventory<br/>with <span className='text-[#FEC221]'>AI Assistance</span>
            </h1>
          
           
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full max-w-4xl mx-auto px-4 md:px-0"> {/* Added max-w-4xl and mx-auto to constrain width and center */}
              <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Always on Point</button>
              <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Predict Restock</button>
              <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Real-Time Inventory</button>
              <button className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:font-medium bg-white rounded-full text-[#001F61]">Everyday Efficiency</button>
            </div>
          </div> 
          
        </div> 
      </div> 

    </div>
  );
}