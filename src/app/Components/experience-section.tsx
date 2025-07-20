import { Card, CardContent } from "./card"
import { GraduationCap, Briefcase, Code, Calendar, MapPin } from "lucide-react"
import IconCloudDemo from "./circleIcon"

const academicQualifications = [
    {
    degree: "Software engineering", 
    institution: "Panaversity",
    year: "2024-2025",
    location: "Karachi, Pakistan",
    grade: "A",
  },
    {
    degree: "Bachelor of Commerce (B.COM)", 
    institution: "Government College of Commerce & Economics P.I.D.C",
    year: "2022-2024",
    location: "Karachi, Pakistan",
    grade: "B",
  },
    {
    degree: "Intermediate (I.COM)",
    institution: "Karachi college for women",
    year: "2019-2021",
    location: "Karachi, Pakistan",
    grade: "B",
  },
    {
    degree: "High School Diploma",
    institution: "CMS higher sec. school nishter road",
    year: "2016-2018",
    location: "Karachi, Pakistan",
    grade: "B",
  },



]

const workExperience = [
  {
  position:  "Training & Technical Skills",
  company: "GIAIC - Agentic AI, Web 3.0 & Metaverse Student",
  duration: "2024 - Present",
  location: "Remote",
  responsibilities: [
    "Built responsive, high-performance web applications using Next.js, TypeScript, and Tailwind CSS",
    "Improved page load speed and interactivity to enhance user experience across devices",
    "Practiced Python for backend development and basic API integrations",
    "Explored Agentic AI concepts to design intelligent and automated web agents",
    "Focused on clean code architecture and reusable components for scalability"
  ],
},

  {
    position: "Accounting assosiate",
    company: "Snakes & lattes (Restaurant)",
    duration: "2023 - Present",
    location: "Toronto Canada, Remote",
    responsibilities: [
      "Reconciled daily sales data from MarginEdge and exported it to QuickBooks",
      "Reviewed and approved daily invoices from MarginEdge for accounting accuracy",
      "Downloaded and organized bills from vendor portals including Amazon, Staples, Breakthru, and others",
      "Categorized payroll tips and other entries within QuickBooks",
      "Cleared daily Toast deposits in QuickBooks and ensured accurate matching",
      "Booked and posted vendor invoices in QuickBooks",
      "Maintained a well-organized invoice tracking system in Excel",
      "Assisted with various additional accounting and administrative tasks as needed",
    ],
  },
]

const technicalSkills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Agentic AI", level: "Beginner" },
  { name: "NextJs", level: "Advanced" },
  { name: "Accounting", level: "Intermediate" },
  { name: "Excel", level: "Intermediate" },
]

export default function ExperienceSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-black min-h-screen">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side - Experience Sections */}
        <div className="space-y-8">
          {/* Academic Qualifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-900 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Academic Qualifications</h2>
            </div>

            <div className="space-y-4">
              {academicQualifications.map((edu, index) => (
                <Card key={index} className="hover:shadow-xl hover:shadow-gray-800/50 transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{edu.degree}</h3>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="font-medium text-gray-300">Grade: {edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-900 rounded-lg">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>

            <Card className="hover:shadow-xl hover:shadow-gray-800/50 transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          skill.level === "Advanced"
                            ? "bg-green-900 text-green-300 border border-green-700"
                            : skill.level === "Intermediate"
                              ? "bg-yellow-900 text-yellow-300 border border-yellow-700"
                              : "bg-blue-900 text-blue-300 border border-blue-700"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side - Work Experience */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-900 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            </div>

            <div className="space-y-4">
              {workExperience.map((work, index) => (
                <Card key={index} className="hover:shadow-xl hover:shadow-gray-800/50 transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{work.position}</h3>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {work.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-gray-300 font-medium">{work.company}</p>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {work.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {work.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Space for Future Content */}
          <div className="bg-gray-900 rounded-xl  border-2 border-dashed border-gray-600">
                <main className="flex  flex-col items-center justify-center p-2">
      <IconCloudDemo />
    </main>
         
          </div>
        </div>
      </div>
    </section>
  )
}
