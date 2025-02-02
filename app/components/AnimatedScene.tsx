"use client"

import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Sphere, Torus, OrbitControls } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"

function AnimatedObject() {
  const groupRef = useRef<THREE.Group>(null!)

  // Rotation animation
  useFrame((state, delta) => {
    groupRef.current.rotation.x += delta * 0.2
    groupRef.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={groupRef}>
      <InteractiveBox position={[-1, 0, 0]} color="hotpink" />
      <InteractiveSphere position={[1, 0, 0]} color="lightblue" />
      <InteractiveTorus position={[0, 1, 0]} color="lightgreen" />
    </group>
  )
}

// Interactive components with scale animation
function InteractiveBox({ position, color }) {
  const [clicked, setClicked] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1, config: { tension: 300, friction: 10 } })

  return (
    <a.mesh position={position} scale={scale} onClick={() => setClicked(!clicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </a.mesh>
  )
}

function InteractiveSphere({ position, color }) {
  const [clicked, setClicked] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1, config: { tension: 300, friction: 10 } })

  return (
    <a.mesh position={position} scale={scale} onClick={() => setClicked(!clicked)}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </a.mesh>
  )
}

function InteractiveTorus({ position, color }) {
  const [clicked, setClicked] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 1.5 : 1, config: { tension: 300, friction: 10 } })

  return (
    <a.mesh position={position} scale={scale} onClick={() => setClicked(!clicked)}>
      <torusGeometry args={[0.3, 0.2, 16, 100]} />
      <meshStandardMaterial color={color} />
    </a.mesh>
  )
}

export default function AnimatedScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={true} />
      <AnimatedObject />
    </Canvas>
  )
}
