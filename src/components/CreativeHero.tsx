'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Zap, Code, Rocket } from 'lucide-react'

export default function CreativeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#0e8774] to-[#000000]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#75ccca] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(117, 204, 202, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-[#0e8774]/20 border border-[#0e8774]/30 rounded-full px-6 py-3 text-[#75ccca] mb-8 backdrop-blur-sm"
          >
            <div className="w-3 h-3 bg-[#75ccca] rounded-full animate-pulse mr-3"></div>
            <span className="font-medium">🚀 Available for Full-Time • Ready to Deliver</span>
          </motion.div>

          {/* Name with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#75ccca] via-[#0e8774] to-[#75ccca] mb-4"
              animate={{
                backgroundPosition: isHovered ? ['0%', '100%'] : ['0%', '50%'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundSize: '200% 200%',
                textShadow: '0 0 30px rgba(117, 204, 202, 0.5)',
              }}
            >
              JASS KHINDA
            </motion.h1>
          </motion.div>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold text-white mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-[#75ccca]" size={40} />
              </motion.div>
              <span>Full-Stack Developer</span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="text-[#0e8774]" size={40} />
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Achievement - Glowing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mb-12"
          >
            <motion.div
              className="relative bg-gradient-to-r from-[#75ccca]/20 via-[#0e8774]/20 to-[#75ccca]/20 border border-[#75ccca]/30 rounded-2xl p-8 backdrop-blur-sm"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(117, 204, 202, 0.3)',
                  '0 0 40px rgba(117, 204, 202, 0.6)',
                  '0 0 20px rgba(117, 204, 202, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Zap className="text-[#75ccca]" size={32} />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  LEGENDARY ACHIEVEMENT
                </h2>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                >
                  <Zap className="text-[#75ccca]" size={32} />
                </motion.div>
              </div>
              <p className="text-xl md:text-2xl text-[#75ccca] font-semibold mb-2">
                🏆 Completed 3 Healthcare Apps in 19 Days
              </p>
              <p className="text-white">
                What 2 previous developers couldn&apos;t finish in 3 years
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-[#0e8774] to-[#75ccca] text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#75ccca] to-[#0e8774]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-3">
                View My Epic Work
                <ArrowDown className="group-hover:animate-bounce" size={20} />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotateX: -10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-[#75ccca] text-[#75ccca] hover:text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#75ccca]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Hire Me Now</span>
            </motion.a>
          </motion.div>

          {/* Social Links with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, href: 'https://github.com/jasskhinda', color: 'text-white hover:text-[#75ccca]' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jasskhinda', color: 'text-[#75ccca] hover:text-[#0e8774]' },
              { icon: Mail, href: 'mailto:info@jasskhinda.com', color: 'text-[#0e8774] hover:text-[#75ccca]' },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${color} transition-all duration-300`}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, 0],
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#75ccca]"
        >
          <ArrowDown size={32} />
        </motion.div>
        <p className="text-[#75ccca] text-sm mt-2">Scroll for more magic</p>
      </motion.div>
    </section>
  )
}