'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Float, Html, OrbitControls, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

function ContactOrb({ position, icon: Icon, label, value, href }: {
  position: [number, number, number]
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  href: string
}) {
  const orbRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x += 0.01
      orbRef.current.rotation.y += 0.01
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={orbRef} args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
        
        <Html center>
          <div className="pointer-events-auto">
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block bg-black/80 backdrop-blur-md rounded-lg p-4 border border-blue-600/30 hover:border-blue-600/60 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-3 text-white">
                <Icon size={20} className="text-blue-400" />
                <div>
                  <div className="font-semibold">{label}</div>
                  <div className="text-sm text-gray-400">{value}</div>
                </div>
              </div>
            </a>
          </div>
        </Html>
      </Float>
    </group>
  )
}

function HireNowButton() {
  const buttonRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (buttonRef.current) {
      buttonRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2
      buttonRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={buttonRef} position={[0, 0, 2]}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
        
        <Html center>
          <div className="pointer-events-auto">
            <a
              href="mailto:info@jasskhinda.com"
              className="block bg-gradient-to-r from-green-600 to-blue-600 rounded-full px-8 py-4 text-white font-bold text-lg hover:from-green-500 hover:to-blue-500 transition-all transform hover:scale-110 shadow-lg"
            >
              <div className="text-center">
                <div className="text-xl mb-1">🚀 HIRE ME NOW</div>
                <div className="text-sm opacity-90">Available for Full-Time</div>
              </div>
            </a>
          </div>
        </Html>
      </Float>
    </group>
  )
}

export default function Contact3D() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Let&apos;s Connect in 3D Space
        </h2>
        <p className="text-gray-400 text-center max-w-md mx-auto">
          Ready to bring this same innovation to your team? Click the contact orbs to connect!
        </p>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
          
          <ContactOrb
            position={[-3, 1, 0]}
            icon={Mail}
            label="Email"
            value="info@jasskhinda.com"
            href="mailto:info@jasskhinda.com"
          />
          
          <ContactOrb
            position={[3, 1, 0]}
            icon={Phone}
            label="Phone"
            value="(647) 355-6441"
            href="tel:6473556441"
          />
          
          <ContactOrb
            position={[-3, -1, 0]}
            icon={Linkedin}
            label="LinkedIn"
            value="Connect with me"
            href="https://linkedin.com/in/jasskhinda"
          />
          
          <ContactOrb
            position={[3, -1, 0]}
            icon={Github}
            label="GitHub"
            value="View my code"
            href="https://github.com/jasskhinda"
          />
          
          <ContactOrb
            position={[0, -2, 0]}
            icon={MapPin}
            label="Location"
            value="Brampton, Ontario"
            href="#"
          />
          
          <HireNowButton />
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxDistance={15}
            minDistance={5}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="bg-black/50 backdrop-blur-md rounded-lg px-6 py-3 border border-green-600/30">
          <p className="text-white text-sm mb-1">
            ✨ International Student • PR Pathway Seeker
          </p>
          <p className="text-gray-400 text-xs">
            Ready to contribute from day one
          </p>
        </div>
      </div>
    </section>
  )
}