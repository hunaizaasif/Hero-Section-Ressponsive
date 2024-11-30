import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className="container bg-slate-100 p-5 mx-auto ">
      
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
        
        {/* First Image */}

        <div className='hover:scale-110 transform transition duration-300 ease-in-out flex justify-center md:w-2/3'>
            <Image
              src="/men-hand.jpg"
              alt="bottle"
              width={450}
              height={300}
              className="rounded-md "
            />
          </div>
            {/* Other Image */}
            <div className="hover:scale-110 transform transition duration-300 ease-in-out flex flex-col md:flex-row md:w-2/3 gap-5 ">
            
              <Image
                src="/women-w-drink.jpg"
                alt="Women Drinking Water"
                width={450}
                height={300}
                className="rounded-md "
              />
              </div>
            <div className='hover:scale-110 transform transition duration-300 ease-in-out flex flex-col md:flex-row md:w-2/3 gap-5 '>
              <Image
                src="/women-drink-2.jpg"
                alt="Women Drinking Water"
                width={450}
                height={300}
                className="rounded-md "
              />
             </div> 
            </div>
          </div>
        
        
      
    
      
  );
};

export default Feature;