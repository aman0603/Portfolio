import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    imageUrl: "/project1.jpg",
    projectUrl: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    imageUrl: "/project2.jpg",
    projectUrl: "https://project2.com",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard demoUrl={""} codeUrl={""} technologies={[]} key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

