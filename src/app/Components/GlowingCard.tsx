import React from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import Image from "next/image";

interface GlowingCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  live_link: string;
  src_code: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  live_link,
  src_code,
}) => {
  return (
    <div className="relative group max-w-sm mx-auto rounded-lg">
      {/* Glowing border */}
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-borderMove z-0"></div>

      {/* Card Content */}
      <div className="relative z-10 bg-white dark:bg-black rounded-lg overflow-hidden shadow-sm">
        <a href={live_link}>
          <Image
            className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
            height={350}
            width={350}
            src={imageSrc}
            alt="" />
            
        </a>

        <div className="p-5">
          <a href={live_link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap justify-between items-center gap-2 mt-4 ">


            {/* Live link Button */}
            <a
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
        {buttonText}
          <svg
           className="w-4 h-4 ml-2"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
              >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>


<>
  {/* From Uiverse.io by elijahgummer */}
  <a
href={src_code} 
target="_blank"
rel="noopener noreferrer"
className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-2 py-2 max-w-40 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
  >
    <span className="absolute right-0 -mt-12 h-32 w-6 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
    <div className="flex items-center">
      <FaGithub className="mr-1 text-xl" />
      <span className="ml-1 text-white">Source Code</span>
    </div>
    <div className="ml-1 flex items-center gap-1 text-sm md:flex">
      
        <FaStar className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"/>
    </div>
  </a>
</> 


          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;
