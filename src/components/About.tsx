'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Target, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-white text-lg leading-relaxed">
              I&apos;m a <span className="text-blue-400 font-semibold">Full-Stack Developer</span> specializing in building scalable enterprise applications across web and mobile platforms. Currently working at Compassionate Caregivers, I lead the development of comprehensive healthcare management systems.
            </p>

            <p className="text-white text-lg leading-relaxed">
              My expertise spans the entire development lifecycle—from architecting solutions to deployment and maintenance. I&apos;ve successfully delivered multiple production-grade applications using modern tech stacks including <span className="text-blue-400">Next.js, React, Flutter, and cloud infrastructure</span>.
            </p>

            <p className="text-white text-lg leading-relaxed">
              I&apos;m seeking a full-time developer position where I can leverage my proven track record in building robust, scalable applications. I excel at translating business requirements into technical solutions that drive measurable results.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-400/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What I Bring to Your Team</h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Enterprise-level full-stack development expertise
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Cross-platform mobile & web application development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Strong problem-solving and system architecture skills
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Proven track record of delivering production applications
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-indigo-600/20 p-6 rounded-lg text-center border border-blue-400/30 hover:border-blue-400/50 transition-colors">
              <Code className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">6+</h3>
              <p className="text-white/70">Enterprise Applications</p>
            </div>

            <div className="bg-indigo-600/20 p-6 rounded-lg text-center border border-blue-400/30 hover:border-blue-400/50 transition-colors">
              <Target className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">3</h3>
              <p className="text-white/70">Platforms (Web, iOS, Android)</p>
            </div>

            <div className="bg-indigo-600/20 p-6 rounded-lg text-center border border-blue-400/30 hover:border-blue-400/50 transition-colors">
              <Zap className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Full-Stack</h3>
              <p className="text-white/70">Development Expertise</p>
            </div>

            <div className="bg-indigo-600/20 p-6 rounded-lg text-center border border-blue-400/30 hover:border-blue-400/50 transition-colors">
              <TrendingUp className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">150+</h3>
              <p className="text-white/70">Total Projects Delivered</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-indigo-600/20 border border-blue-400/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
            <p className="text-white text-lg">
              To deliver innovative, scalable software solutions that drive business growth and solve complex technical challenges. I bring expertise in full-stack development, modern frameworks, and cross-platform technologies to create applications that make a real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}