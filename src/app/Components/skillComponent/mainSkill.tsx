import React from 'react'
import { TbBrandPython, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { SiNextdotjs, SiCss3 } from "react-icons/si"; 
import { FaHtml5, FaRobot} from "react-icons/fa";
import { PixelCanvasDemo } from './SkillsDemo';

const MainSkill = () => {
  return (
    <div id='skill' className="flex flex-col justify-center items-center bg-black">
      <h1 className="text-7xl  font-satisfy text-center mb-12 p-2 ">Tech Skills</h1>

        {/* Grid for the 3 cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
  {/* Python - Official Blue & Yellow */}
  <PixelCanvasDemo
    icon={TbBrandPython}
    colors={["#306998", "#FFD43B", "#FFD43B"]}
    iconColor="text-[#FFD43B]"
    borderColor="#FFD43B"
    label="Python"
  />


  {/* CSS - Official Blue */}
  <PixelCanvasDemo
    icon={SiCss3}
    colors={["#ffffff", "#2965f1", "#264DE4"]}
    iconColor="text-[#2965f1]"
    borderColor="#264DE4"
    label="CSS"
  />

  {/* HTML - Official Orange */}
  <PixelCanvasDemo
    icon={FaHtml5}
    colors={["#ffffff", "#F16529", "#E44D26"]}
    iconColor="text-[#E44D26]"
    borderColor="#E44D26"
     label="HTML"
  />

  {/* Tailwind CSS - Official Cyan */}
  <PixelCanvasDemo
    icon={TbBrandTailwind}
    colors={["#ffffff", "#38BDF8", "#06B6D4"]}
    iconColor="text-[#38BDF8]"
    borderColor="#06B6D4"
    label="Tailwind CSS"
  />

  {/* TypeScript - Official Blue */}
  <PixelCanvasDemo
    icon={TbBrandTypescript}
    colors={["#ffffff", "#3178C6", "#007ACC"]}
    iconColor="text-[#007ACC]"
    borderColor="#007ACC"
    label="Typescript"
  />

{/* AI/Robot - Peach Pink Theme */}
<PixelCanvasDemo
  icon={FaRobot}
  colors={["#ffffff", "#f9a8d4", "#ec4899"]} // light pink to rose
  iconColor="text-[#ec4899]"
  borderColor="#ec4899"
  label="Agentic AI"
/>


  {/* Next.js - Black and Gray */}
 
  <PixelCanvasDemo
    icon={SiNextdotjs}
    colors={["#e5e7eb", "#9ca3af", "#fff"]} // silver → medium gray
    iconColor="text-[#6b7280]"
    borderColor="#6b7280" // gray-500
    label="Next.js"
 />
</div>

        </div>
  )
}

export default MainSkill