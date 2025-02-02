import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  demoUrl: string
  codeUrl: string
  technologies: string[]
}

const ProjectCard = ({ title, description, imageUrl, demoUrl, codeUrl, technologies }: ProjectCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md   transition-all duration-700 hover:scale-110">
      <div className="relative h-48 overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

