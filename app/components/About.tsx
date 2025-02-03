"use client"

import Image from "next/image"
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-4">
      <div className="md:w-1/3 flex justify-center">
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.2 , rotate: 2 }}
      className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg rounded-lg overflow-hidden"
    >
      <Image
        src="my_img.jpg"
        alt="Aman Paswan"
        width={300}
        height={300}
        className="rounded-lg object-cover w-full h-full transition-all duration-500 ease-in-out"
      />
    </motion.div>
      </div>
      <div className="md:w-2/3 text-center md:text-left ">
        
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
