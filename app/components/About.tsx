import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 px-4">
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xm1Q7UPFIp0BAQryG0Tv5V8uE52TZv.png"
            alt="Aman Paswan"
            width={300} 
            height={300} 
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-lg mb-2">
          I'm a passionate full-stack developer with experience in building modern web applications. I love creating
          beautiful and functional user interfaces while ensuring robust backend implementations.
        </p>
        <p className="text-lg mb-2">
          My expertise includes React, Next.js, Node.js, and various other modern web technologies. I'm always eager to
          learn new technologies and improve my skills.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
          enjoying outdoor activities.
        </p>
      </div>
    </div>
  )
}

export default About
