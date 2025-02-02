import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hi, I'm [Your Name]. I'm a passionate web developer with experience in React, Next.js, and TypeScript. I love
        creating beautiful and functional websites that provide great user experiences.
      </p>
      <p className="mb-4">When I'm not coding, you can find me [your hobbies or interests].</p>
      <Link
        href="/YourName_Resume.pdf"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
        download
      >
        Download Resume
      </Link>
    </div>
  )
}

