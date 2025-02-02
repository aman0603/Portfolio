"use client"

import { motion } from "framer-motion"

const Introduction = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">
        Hi, I am{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-500"
        >
          Aman Paswan
        </motion.span>
      </h1>
      <p className="text-xl mb-8">A passionate developer creating amazing web experiences.</p>
      <a
        href="/AmanPaswan_Resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Introduction

