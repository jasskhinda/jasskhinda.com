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
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a <span className="text-blue-400 font-semibold">Full-Stack Developer</span> currently working at Compassionate Caregivers, where I&apos;ve made a significant impact by completing complex healthcare transportation applications that previous developers couldn&apos;t deliver.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My approach is simple: I focus on <span className="text-blue-400">delivering working solutions quickly</span>. When I joined Compassionate Caregivers, I inherited 5 unfinished apps that had been in development for 3 years. I rebuilt them from scratch using modern technologies and delivered 3 production-ready apps in just 19 days.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              As an international student in Canada, I&apos;m driven to secure a full-time developer position that will support my PR pathway. I bring the same dedication and problem-solving skills that impressed my current employer to every project I work on.
            </p>

            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What I Bring to Your Team</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Proven ability to deliver when others can&apos;t
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Full-stack expertise with modern tech stack
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Business-focused problem solving
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Ready to contribute from day one
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
            <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-600/30 transition-colors">
              <Zap className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">19</h3>
              <p className="text-gray-400">Days to Build 3 Apps</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-600/30 transition-colors">
              <Code className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">5</h3>
              <p className="text-gray-400">Apps Rebuilt from Scratch</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-600/30 transition-colors">
              <Target className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-gray-400">Production Ready</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-600/30 transition-colors">
              <TrendingUp className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">150+</h3>
              <p className="text-gray-400">Total Projects Delivered</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
            <p className="text-gray-300 text-lg">
              To leverage my proven track record of delivering complex applications quickly and efficiently, bringing immediate value to a forward-thinking development team while building my career in Canada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}