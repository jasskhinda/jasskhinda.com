'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Float, Center, OrbitControls, Stars } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

function FloatingCube({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

function AnimatedText() {
  const textRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={textRef}>
      <Center>
        <mesh>
          <boxGeometry args={[4, 0.8, 0.2]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
      </Center>
      <Center position={[0, -1.5, 0]}>
        <mesh>
          <boxGeometry args={[3, 0.4, 0.1]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.3} />
        </mesh>
      </Center>
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={particlesRef}>
      <sphereGeometry args={[10, 32, 32]} />
      <pointsMaterial
        color="#3b82f6"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 8, 20]} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <AnimatedText />
          
          <FloatingCube position={[-4, 2, -2]} color="#3b82f6" />
          <FloatingCube position={[4, 2, -2]} color="#8b5cf6" />
          <FloatingCube position={[-4, -2, -2]} color="#10b981" />
          <FloatingCube position={[4, -2, -2]} color="#f59e0b" />
          
          <ParticleField />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-blue-600/30">
          <p className="text-white text-sm font-medium">
            🚀 3 healthcare apps in 19 days
          </p>
        </div>
        <p className="text-gray-400 text-sm mt-4 animate-pulse">
          Scroll to explore my 3D portfolio
        </p>
      </div>
    </div>
  )
}