'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { Float, Text, Html, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const skills: Skill[] = [
  { name: 'Next.js', level: 90, color: '#000000', position: [0, 2, 0] },
  { name: 'React.js', level: 85, color: '#61dafb', position: [2, 1, -1] },
  { name: 'Supabase', level: 85, color: '#3ecf8e', position: [-2, 1, -1] },
  { name: 'Firebase', level: 80, color: '#ffa000', position: [1, -1, 1] },
  { name: 'MongoDB', level: 75, color: '#47a248', position: [-1, -1, 1] },
  { name: 'Tailwind', level: 90, color: '#06b6d4', position: [0, 0, -2] },
  { name: 'React Native', level: 75, color: '#61dafb', position: [2, 0, 1] },
  { name: 'WordPress', level: 95, color: '#21759b', position: [-2, 0, 1] },
]

interface Skill {
  name: string
  level: number
  color: string
  position: [number, number, number]
}

function SkillSphere({ skill, index }: { skill: Skill, index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      
      const scale = hovered ? 1.2 : clicked ? 1.5 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
      
      meshRef.current.position.y = skill.position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  const radius = 0.3 + (skill.level / 100) * 0.4

  return (
    <group position={skill.position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setClicked(!clicked)}
        >
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        
        {(hovered || clicked) && (
          <Html center>
            <div className="bg-black/80 backdrop-blur-md rounded-lg p-3 border border-blue-600/30 text-center">
              <h3 className="text-white font-bold">{skill.name}</h3>
              <div className="w-20 h-2 bg-gray-700 rounded-full mt-2">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-gray-300 text-sm mt-1">{skill.level}%</p>
            </div>
          </Html>
        )}
        
        <Text
          position={[0, -radius - 0.3, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  )
}

function ConnectingLines() {
  const linesRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={linesRef}>
      {skills.map((skill, index) => {
        const nextSkill = skills[(index + 1) % skills.length]
        const start = new THREE.Vector3(...skill.position)
        const end = new THREE.Vector3(...nextSkill.position)
        
        const geometry = new THREE.BufferGeometry()
        geometry.setFromPoints([start, end])
        
        return (
          <primitive key={index} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#3b82f6', opacity: 0.3, transparent: true }))} />
        )
      })}
    </group>
  )
}

export default function Skills3D() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Interactive Skills Galaxy
        </h2>
        <p className="text-gray-400 text-center">
          Click and drag to explore • Hover over spheres to see details
        </p>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
          
          <ConnectingLines />
          
          {skills.map((skill, index) => (
            <SkillSphere key={skill.name} skill={skill} index={index} />
          ))}
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxDistance={15}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="bg-black/50 backdrop-blur-md rounded-lg px-6 py-3 border border-blue-600/30">
          <p className="text-white text-sm">
            Sphere size represents skill level • Larger = Higher proficiency
          </p>
        </div>
      </div>
    </section>
  )
}