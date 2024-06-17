import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const Herovalue = () => {
  return (
<div class="max-w-full mx-1 py-2 sm:mx-auto ">
    <div class="sm:flex sm:space-x-4">
        <div class="inline-block align-bottom bg-white rounded-lg  mb-4 w-full pr-5 hover:  sm:w-1/3 sm:my-8 transition-transform transform-gpu hover:scale-110">
            <div class="bg-white pt-2">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Resources available</h3>
                        <p class="text-3xl font-bold text-black">300+</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg px-5 transition-transform transform-gpu hover:scale-110 mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white pt-2 px-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Courses available</h3>
                        <p class="text-3xl font-bold text-black">120+</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg px-5 transition-transform transform-gpu hover:scale-110 mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white pt-2 px-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Active Users</h3>
                        <p class="text-3xl font-bold text-black">5k+</p>
                    </div>
                </div>
            </div>
        </div>
        
        <Card title="external resources" count={1000}></Card>
        
    </div>
</div>
  )
}


const Card=({title,count})=>
{
    

    
   return(
    <motion.div 
   
    class="inline-block align-bottom bg-white rounded-lg px-5 ttransition-transform transform-gpu hover:scale-110 mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white pt-2">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left w-full">
                        <h3 class="text-sm leading-6 font-medium text-gray-400 "> {title}</h3>
                        <p class="text-3xl font-bold text-black">{count}+</p>
                    </div>
                </div>
            </div>
        </motion.div>
   );
}

export default Herovalue