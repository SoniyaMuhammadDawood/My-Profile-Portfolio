'use client'

import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineSceneBasic() {
  return (
  <Card className="w-full min-h-[500px] h-[620px] lg:h-[700px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left content */}
        <div className="flex flex-col justify-center items-start p-4 sm:p-6 lg:p-8 lg:flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-purple-500 p-2">
            Soniya Dawood
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-satisfy text-neutral-300 mt-2 lg:mt-4">
            Building Web Interfaces and Intelligent Systems
          </h2>
          <p className="mt-4 lg:mt-6 text-neutral-200 max-w-2xl text-base sm:text-lg lg:text-xl tracking-wide font-medium leading-relaxed">
            I am Soniya, a self-motivated developer from Pakistan with a strong foundation in web technologies like
            HTML, CSS, NextJs, Tailwind CSS, TypeScript, and Python. I am currently exploring Agentic AI and eager to
            build impactful, intelligent applications, Chatboats & AI Agents.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}






