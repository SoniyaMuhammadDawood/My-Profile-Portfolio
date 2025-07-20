'use client'

import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[620px] bg-black/[0.96] relative overflow-hidden">

       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
<div className="flex flex-col justify-center items-start p-8">
  <h1 className="text-6xl font-nosifer font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-purple-500 p-2">
    Soniya Dawood
  </h1>
  <h2 className=" text-4xl  text-neutral-300 font-satisfy mt-4">
    Building Web Interfaces and Intelligent Systems
  </h2>
  <p className="mt-6 text-neutral-200  max-w-2xl text-xl tracking-wide font-medium ">
    I am Soniya, a self-motivated developer from Pakistan with a strong foundation in web technologies like HTML, CSS, NextJs, Tailwind CSS, TypeScript, and Python. I am currently exploring Agentic AI and eager to build impactful, intelligent applications, Chatboats & AI Agents.
  </p>
</div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}






