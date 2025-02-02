"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "../providers/theme-provider"

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          Portfolio
        </a>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

