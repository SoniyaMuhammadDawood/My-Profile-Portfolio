"use client"

import Link from "next/link"
import { useState } from "react"
// import DownloadButton from "./dwncp"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import DownloadButton from "./dwnldBtn"

// Placeholder DownloadButton component - replace with your actual component


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                className="rounded-full object-cover"
                src="/images/ss.jpg"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                alt="Logo"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-4">
              <Link
                href="/"
                className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                prefetch={true}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/#skill"
                className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                prefetch={false}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                prefetch={true}
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <DownloadButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-200 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-white/10">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
              onClick={closeMenu}
              prefetch={true}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-gray-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
              onClick={closeMenu}
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/#skill"
              className="text-gray-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
              onClick={closeMenu}
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-gray-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1"
              onClick={closeMenu}
              prefetch={true}
            >
              Projects
            </Link>
            <div className="pt-2">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
