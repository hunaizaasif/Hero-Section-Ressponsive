import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-slate-200">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <p className="text-lg sm:text-base  md:text-xl mb-4">
            Water is one of the fundamental human needs but it’s not safe to drink without a home water filter in Pakistan. Ensure the installation of a quality water filter system for home is not only essential but also a lifesaver as polluted water can cause diarrheal diseases like cholera.
          </p>
          <p className="text-lg sm:text-base md:text-xl">
            So making the right choice about the home water filter system is very significant, though it’s not an easy choice to make as there are many water purifiers and a whole house filter system. It is proven scientifically now that there is no guarantee that bottled water is safe to drink anymore, so it’s a right and logical choice to install your own home water filter system to improve your drinking water. Aqua Cleanses provides the best water filter at a reasonable price in Lahore, Islamabad, and Karachi Pakistan.
          </p>
        </div>
        <div className="hover:scale-110 transform transition duration-300 ease-in-out w-full  md:w-1/3 p-4 flex justify-center">
          <Image
            src="/Blog-Image.jpg"
            alt="Filter Plant"
            width={450}
            height={300}
            className="rounded-md" // Add rounded corners for a modern look
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;