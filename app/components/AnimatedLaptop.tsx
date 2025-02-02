"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"

function Laptop() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={meshRef}>
      {/* Laptop base */}
      <Box args={[1.5, 0.1, 1]} position={[0, -0.05, 0]}>
        <meshStandardMaterial color="gray" />
      </Box>
      {/* Laptop screen */}
      <Box args={[1.4, 0.8, 0.05]} position={[0, 0.45, -0.475]} rotation={[Math.PI / 8, 0, 0]}>
        <meshStandardMaterial color="black" />
      </Box>
    </group>
  )
}

export default function AnimatedLaptop() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Laptop />
    </Canvas>
  )
}

