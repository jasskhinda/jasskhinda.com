'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-600/10 border border-blue-600/30 rounded-full px-4 py-2 text-sm text-blue-400 mb-4"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            Available for Full-Time Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Jaspal Singh
            <span className="block text-3xl md:text-4xl text-gray-400 font-normal mt-2">
              (Jass Khinda)
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
            Full-Stack Developer
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              I build production-ready web applications that solve real business problems.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-lg p-4 mb-8"
            >
              <p className="text-gray-300 font-medium">
                🚀 Recently completed <span className="text-blue-400">3 healthcare apps in 19 days</span> that 2 developers couldn&apos;t finish in 3 years
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#works"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-8 py-3 rounded-full font-medium transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a 
              href="https://github.com/jasskhinda" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/jasskhinda" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:info@jasskhinda.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-gray-600 animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  )
}