"use client"

import { useState } from "react"
import { Bot, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)


  const navItems = [
    { name: "features", href: "/features" },
    { name: "technology", href: "/technology" },
    { name: "agent", href: "/solution" },
    { name: "pricing", href: "/pricing" },
    { name: "contact", href: "/contact" },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm text-white py-6 fixed w-full top-0 z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <Bot className="w-10 h-10 text-purple-500 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Agentia World
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg hover:text-purple-400 transition-all duration-300 hover:scale-110 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg px-8 py-2 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg">
            Get Started
          </Button>

          <button className="md:hidden text-white hover:text-purple-400 hover:scale-110 transition-transform duration-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-6 md:hidden animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-lg hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}

            <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg py-2 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
