'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900/50" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Available for Full-Time Opportunities</h3>
              
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-lg p-6 mb-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I&apos;m actively seeking a full-time developer position where I can bring the same level of impact I&apos;ve demonstrated at Compassionate Caregivers to your team.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-gray-300">Available to start immediately</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">Based in Brampton, Ontario (Open to remote/hybrid)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-gray-300">Seeking permanent full-time role (PR pathway)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
              
              <div className="space-y-4">
                <a
                  href="mailto:info@jasskhinda.com"
                  className="flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">info@jasskhinda.com</p>
                  </div>
                </a>

                <a
                  href="tel:6473556441"
                  className="flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">(647) 355-6441</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jasskhinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/jasskhinda</p>
                  </div>
                </a>

                <a
                  href="https://github.com/jasskhinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-medium">github.com/jasskhinda</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Hire Me?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Proven Track Record</h4>
                  <p className="text-gray-300">
                    I deliver where others can&apos;t. Completed 3 complex healthcare apps in 19 days that stumped 2 developers for 3 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Modern Tech Stack</h4>
                  <p className="text-gray-300">
                    Expert in Next.js, React, Supabase, and modern JavaScript. Ready to work with your cutting-edge technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Business Impact Focus</h4>
                  <p className="text-gray-300">
                    I don&apos;t just write code—I build solutions that drive real business value and improve user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Immediate Availability</h4>
                  <p className="text-gray-300">
                    Ready to start contributing to your team from day one. No ramp-up time needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-lg p-6">
              <p className="text-gray-300 text-center mb-4">
                Let&apos;s discuss how I can bring this same level of excellence to your team.
              </p>
              <a
                href="mailto:info@jasskhinda.com"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
              >
                Schedule a Conversation
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2024 Jaspal Singh (Jass Khinda). Built with Next.js, React, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}