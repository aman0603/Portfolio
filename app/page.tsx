import dynamic from "next/dynamic"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const AnimatedScene = dynamic(() => import("./components/AnimatedScene"), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 "
        >
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-blue-500">Aman Paswan</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                Full Stack Developer & ML Engineer
              </p>
              <div className="h-96 w-96 mb-8">
                <AnimatedScene />
              </div>
              <a
                href="/Aman_Paswan_Resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-black min-h-screen ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 ">About Me</h2>
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-black -min-h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

