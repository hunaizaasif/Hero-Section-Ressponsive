import React from 'react'
import Image from 'next/image'


const CardDeatail = ()  => {
   return (
    <div className='flex items-center justify-center min-h-screen bg-slate-200 p-8 '>
<div  className="hover:scale-110 transform transition duration-300 ease-in-out flex flex-col items-center justify-center w-full max-w-md bg-white p-6 rounded-lg shadow-md  ">
  


<Image
  src="/image-1-w-.jpg"
  alt="Water Bottle"
  width={450}
  height={300}
  className="rounded-md mb-4  " 
/>
<p className="text-center text-lg font-bold">PKR 99.00</p>

<div className="flex justify-center mt-4">
  <button className="bg-blue-500 text-white rounded-lg px-10 py-3 hover:bg-blue-700 hover:text-white">
    Order Now
  </button>
</div>
</div> 
</div>      

  )
}

export default CardDeatail
