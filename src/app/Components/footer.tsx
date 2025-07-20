import { Heart, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  // Define your social media links here
  const socialLinks = [
    {
      Icon: Github,
      delay: "0ms",
      href: "https://github.com/SoniyaMuhammadDawood", // Replace with your GitHub username
      label: "GitHub",
    },
    {
      Icon: Twitter,
      delay: "200ms",
      href: "https://x.com/Soniya_Tech_Hub", // Replace with your X/Twitter username
      label: "X (Twitter)",
    },
    {
      Icon: Linkedin,
      delay: "400ms",
      href: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn profile
      label: "LinkedIn",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-r from-black via-blue-950 to-black text-white py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-20 right-10 w-12 h-12 bg-purple-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand with animation */}
          <div className="group">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Soniya Dawood
            </h3>
            <p className="text-base font-semibold text-gray-300 transform group-hover:translate-x-2 transition-transform duration-300">
              © 2025 All rights reserved
            </p>
          </div>

          {/* Social icons centered */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ Icon, delay, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                style={{ animationDelay: delay }}
              >
                <Icon className="w-5 h-5 hover:text-pink-400 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Made with love - moved to right */}
          <div className="flex items-center space-x-2">
            <span className="text-medium font-semibold">Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse hover:animate-bounce cursor-pointer transform hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full">
            <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
