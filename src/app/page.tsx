import { SplineSceneBasic } from "./Components/robot/demo";
import SeeMoreBtn from "./Components/SeeMoreBtn";
import { HeroSection } from "./Components/about_page/about";
import GlowingCard from "./Components/GlowingCard";
import MainSkill from "./Components/skillComponent/mainSkill";
import ExperienceSection from "./Components/experience-section";


export default function Home() {
  return (
   <div>

    {/* Hero Section  */}
    <SplineSceneBasic/>

    {/* About Page */}
    <HeroSection/>

     {/* Skills */}
     
<div>
  <MainSkill/>
</div>


      {/* Projects */}
 <div className="py-8 px-4 bg-black">
      {/* Heading */}
      <h2 className="text-7xl font-satisfy text-center mb-12 p-4">
        My Latest Projects
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
        <GlowingCard
          imageSrc="/images/n2.jpg"
          title="Governor sindh website"
          description="Discover the top AI trends changing the world in 2025."
          buttonText="Live Demo"
          live_link="https://governor-sindh-website-s.vercel.app/"
          src_code="https://github.com/SoniyaMuhammadDawood/Library-manager-app"
        />
        <GlowingCard
          imageSrc="/images/n1.jpg"
          title="E-commerce Website"
          description="Master modern web frameworks and build responsive websites."
          buttonText="Live Demo"
          live_link="https://perfume-website-s.vercel.app/"
          src_code=""
        />
        <GlowingCard
          imageSrc="/images/n3.jpg"
          title="blog-website"
          description="The future of scalable cloud infrastructure explained."
          buttonText="Live Demo"
          live_link="https://blog-website-eta-umber.vercel.app/"
          src_code=""
        />
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
          {/* See More Button */}
       
        <SeeMoreBtn />
     
        </div>

      </div>
    </div>
            <div className="min-h-screen bg-black">
                    <h2 className="text-7xl font-satisfy text-center mb-2 p-8">
        Experience
      </h2>
      <ExperienceSection />
    </div>

    
    </div>

  );
}
