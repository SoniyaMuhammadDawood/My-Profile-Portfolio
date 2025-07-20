import type React from "react"
interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-gray-900 rounded-lg shadow-lg border border-gray-700 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>
}
