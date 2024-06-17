import React from 'react';

const Aboutstats = () => {
  return (
    <div className="max-w-full px-2 py-2 sm:mx-auto sm:px-10 md:px-20 lg:px-32 xl:px-40  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg px-5 py-4 sm:p-6 transition-transform transform-gpu hover:scale-110">
          <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-400 mb-2">Resources available</h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">300+</p>
        </div>
        <div className="bg-white rounded-lg px-5 py-4 sm:p-6 transition-transform transform-gpu hover:scale-110">
          <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-400 mb-2">Courses available</h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">120+</p>
        </div>
        <div className="bg-white rounded-lg px-5 py-4 sm:p-6 transition-transform transform-gpu hover:scale-110">
          <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-400 mb-2">Active Users</h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">5k+</p>
        </div>
       
        
        <div className="bg-white rounded-lg px-5 py-4 sm:p-6 transition-transform transform-gpu hover:scale-110">
          <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-400 mb-2">External Resources</h3>
          <p className="text-2xl sm:text-3xl lg:text4xl font-bold text-black">1000+</p>
        </div>
      
      </div>
    </div>
  );
};

export default Aboutstats;
