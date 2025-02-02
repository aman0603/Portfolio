"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"

const projectsData = {
  Frontend: [
    {
      title: "Todo List",
      description: "A responsive todo list interface built with React.js and Tailwind",
      imageUrl: "img3.png",
      demoUrl: "https://todo-web-xi.vercel.app/",
      codeUrl: "https://github.com/aman0603/DoIt",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with dark and light mode and animations",
      imageUrl: "portfolio.png",
      demoUrl: "https://github.com/aman0603/Portfolio",
      codeUrl: "https://github.com/aman0603/Portfolio",
      technologies: ["Next.js", "Three.js", "Tailwind CSS"],
    },
  ],
  Fullstack: [
    {
      title: "Social Media Platform",
      description: "Full-featured social platform with real-time messaging",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1tCDtECRCbVjufA0fyQz5RIWgs1QHG.png",
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/repo",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1tCDtECRCbVjufA0fyQz5RIWgs1QHG.png",
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/repo",
      technologies: ["Next.js", "Express", "PostgreSQL"],
    },
  ],
  "Machine Learning": [
    {
      title: "Dengue Scope",
      description: "Deep learning model for dengue prediction",
      imageUrl: "/denguescope.png",
      demoUrl: "https://github.com/aman0603/projj",
      codeUrl: "https://github.com/aman0603/projj",
      technologies: ["Python", "TensorFlow", "PyTorch"],
    },
  ],
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")
  const categories = Object.keys(projectsData)
    return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData[activeCategory]?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects

