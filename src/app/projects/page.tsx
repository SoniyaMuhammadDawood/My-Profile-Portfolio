"use client"

import { useState } from "react"
import GlowingCard from "../Components/GlowingCard"

const projects = {

  "Next.js": [
    {
      imageSrc: "/images/n1.jpg",
      title: "E-commerce Website",
      description: "Full-stack store with Stripe integration",
      buttonText: "Live Demo",
      live_link: "https://perfume-website-s.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/n2.jpg",
      title: "Governor sindh website",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://governor-sindh-website-s.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/n3.jpg",
      title: "blog-website",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://blog-website-eta-umber.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/n4.jpg",
      title: "NextJs portfolio custom-css",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://next-js-portfolio-custom-css-nine.vercel.app",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/n5.jpg",
      title: "Nike Website with Sanity",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://figma-website-six.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/n6.jpg",
      title: "Car website",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://multipage-custom-css-website-two.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/n7.jpg",
      title: "Nextjs portfolio",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://next-js-portfolio-s.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },


  ],
  Python: [
    {
      imageSrc: "/images/p1.jpg",
      title: "Password Generator App",
      description: "Data scraping tool using BeautifulSoup",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p2.jpg",
      title: "Money Making Machine",
      description: "Full-stack blog application",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p3.jpg",
      title: "Time Zone Converter App",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p4.jpg",
      title: "Simple Calculator App",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p5.jpg",
      title: "Mood Tracker App",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p6.jpg",
      title: "Random Joke Generator",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p7.jpg",
      title: "Rent & Utility Calculator",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "/images/p8.jpg",
      title: "Quiz App",
      description: "COVID-19 data visualization with Pandas",
      buttonText: "Live Demo",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
  ],

  AI: [
    {
      imageSrc: "",
      title: "Chatbot",
      description: "AI chatbot using OpenAI API",
      buttonText: "Live link",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
    {
      imageSrc: "",
      title: "Image Classifier",
      description: "ML model for image recognition",
      buttonText: "Live link",
      live_link: "#",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
  ],
    "HTML+CSS": [
    {
      imageSrc: "/images/c1.jpg",
      title: "Travel Website",
      description: "Responsive website with modern CSS animations",
      buttonText: "View Project",
      live_link: "https://travel-website-s.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood"
    },
    {
      imageSrc: "/images/c2.jpg",
      title: "neon-effect-text",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://neon-effect-text.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/c3.jpg",
      title: "Dynamic Resume",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://dynamic-resume-builder-soniya.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/c5.jpg",
      title: "Static Resume",
      description: "Admin dashboard with real-time data",
      buttonText: "Live Demo",
      live_link: "https://static-resume-sage-six.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/c6.jpg",
      title: "Animation text",
      description: "Animation text",
      buttonText: "Live Demo",
      live_link: "https://im-developer-animation-text.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
        {
      imageSrc: "/images/c7.jpg",
      title: "Space theme portfolio",
      description: "Animation text",
      buttonText: "Live Demo",
      live_link: "https://space-portfolio-custom-css.vercel.app/",
      src_code:"https://github.com/SoniyaMuhammadDawood",
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Next.js")
  const tabs = Object.keys(projects)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-8 mt-14 font-satisfy tracking-wider ">My Projects</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div key={index} className="animate-fadeIn">
              <GlowingCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
