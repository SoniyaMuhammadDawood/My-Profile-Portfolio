import type React from "react"
import type { ReactElement } from "react"

interface LinkBtnProps {
  icon: ReactElement
  label: string
  url: string
  gradientClass?: string
  hoverScale?: string
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  icon,
  label,
  url,
  gradientClass = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  hoverScale = "hover:scale-110",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative cursor-pointer outline-none border-none rounded-full 
        flex flex-row items-center justify-center h-12 w-12 
        hover:w-[120px] transition-all duration-500 ease-in-out
        before:content-[''] before:absolute before:w-full before:h-full before:inset-0 
        before:rounded-full before:transition-all before:duration-300 
        ${hoverScale} active:scale-95 
        text-white shadow-lg hover:shadow-xl
        ${gradientClass}
      `}
    >
      <span className="absolute left-2 group-hover:left-3 transition-all duration-300 z-10 w-8 h-8 flex items-center justify-center">
        {icon}
      </span>
      <span className="absolute right-3 text-[15px] font-semibold w-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-500 whitespace-nowrap">
        {label}
      </span>
    </a>
  )
}

export default LinkBtn
