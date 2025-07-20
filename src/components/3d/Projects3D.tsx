'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { Float, Html, OrbitControls, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Compassionate Caregivers Ecosystem',
    description: '5-app healthcare transportation system',
    tech: ['Next.js', 'Supabase', 'MongoDB'],
    status: 'Live Production',
    impact: '3 apps in 19 days',
    color: '#3b82f6',
    position: [0, 0, 0] as [number, number, number],
    apps: [
      { name: 'Facility Portal', url: 'https://facility.compassionatecaretransportation.com/' },
      { name: 'Booking App', url: 'https://book.compassionatecaretransportation.com/' },
      { name: 'Dispatcher', url: 'https://dispatch.compassionatecaretransportation.com/' }
    ]
  },
  {
    title: 'CC Healthcare App',
    description: 'Real-time healthcare management platform',
    tech: ['React.js', 'Supabase', 'MongoDB'],
    status: 'Live Production',
    impact: 'Real-time updates',
    color: '#10b981',
    position: [4, 0, -2] as [number, number, number],
    apps: [
      { name: 'HC App', url: 'http://ccapp.compassionatecaregivershc.com/' }
    ]
  },
  {
    title: '3D Portfolio Experience',
    description: 'This interactive 3D portfolio',
    tech: ['Three.js', 'React Three Fiber', 'Next.js'],
    status: 'Live Demo',
    impact: 'Next-level showcase',
    color: '#8b5cf6',
    position: [-4, 0, -2] as [number, number, number],
    apps: []
  },
  {
    title: 'E-commerce Solutions',
    description: '150+ stores built with modern stack',
    tech: ['WordPress', 'Shopify', 'WooCommerce'],
    status: 'Multiple Live Sites',
    impact: '150+ stores',
    color: '#f59e0b',
    position: [0, 3, -1] as [number, number, number],
    apps: []
  }
]

interface Project {
  title: string
  description: string
  tech: string[]
  status: string
  impact: string
  color: string
  position: [number, number, number]
  apps: Array<{ name: string; url: string }>
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.position.y = project.position[1] + Math.sin(state.clock.elapsedTime + index * 2) * 0.2
      
      if (hovered) {
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1
      }
    }
  })

  return (
    <group ref={groupRef} position={project.position}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <RoundedBox
          args={[2.5, 3, 0.1]}
          radius={0.05}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setClicked(!clicked)}
        >
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
            roughness={0.1}
            metalness={0.8}
          />
        </RoundedBox>
        
        {(hovered || clicked) && (
          <Html
            center
            transform
            position={[0, 0, 0.2]}
            style={{
              width: '240px',
              pointerEvents: clicked ? 'auto' : 'none'
            }}
          >
            <div className="bg-black/90 backdrop-blur-md rounded-lg p-4 border border-blue-600/30 text-center">
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs mb-3">
                {project.status}
              </div>
              
              <div className="text-yellow-400 font-semibold text-sm mb-3">
                🚀 {project.impact}
              </div>
              
              {project.apps.length > 0 && (
                <div className="space-y-2">
                  {project.apps.map((app) => (
                    <a
                      key={app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-xs transition-colors"
                    >
                      {app.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Html>
        )}
        
        {!hovered && !clicked && (
          <Html center transform position={[0, 0, 0.2]}>
            <div className="text-center pointer-events-none">
              <h3 className="text-white font-bold text-sm">{project.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{project.impact}</p>
            </div>
          </Html>
        )}
      </Float>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <sphereGeometry args={[15, 64, 64]} />
      <pointsMaterial
        color="#3b82f6"
        size={0.01}
        sizeAttenuation
        transparent
        opacity={0.4}
      />
    </points>
  )
}

export default function Projects3D() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          3D Project Showcase
        </h2>
        <p className="text-gray-400 text-center">
          Interact with project cards • Click for details and live links
        </p>
      </div>
      
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 10, 25]} />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />
          
          <FloatingParticles />
          
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxDistance={20}
            minDistance={8}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="bg-black/50 backdrop-blur-md rounded-lg px-6 py-3 border border-blue-600/30">
          <p className="text-white text-sm mb-2">
            🎮 Interactive 3D Experience
          </p>
          <p className="text-gray-400 text-xs">
            Drag to rotate • Scroll to zoom • Click cards for details
          </p>
        </div>
      </div>
    </section>
  )
}