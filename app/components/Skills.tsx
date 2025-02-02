import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiCplusplus,
  SiGit,
} from "react-icons/si"
import { FaAws, FaJava } from "react-icons/fa"
import { Code2, Database, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      // { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
   
      { name: "Linux", icon: SiLinux },
      ],
  },
  {
    title: "ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      // { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
] as const

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {skillCategories.map((category) => (
    <div key={category.title} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center transition-all duration-500 hover:scale-110"
          >
            {typeof skill.icon === "string" ? (
              <span className="text-3xl mb-2 text-center">{skill.icon}</span>
            ) : (
              <skill.icon className="w-8 h-8 mb-2 text-center" />
            )}
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

  )
}

export default Skills

