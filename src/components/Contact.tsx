'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Failed to send message')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 text-center"
      >
        <CheckCircle className="text-blue-400 mx-auto mb-4" size={48} />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-white mb-4">Thank you for reaching out. I&apos;ll get back to you soon!</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-blue-400 hover:text-indigo-600 underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2 font-medium">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-indigo-600/20 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white mb-2 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-indigo-600/20 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
          placeholder="your.email@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2 font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-indigo-600/20 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
          placeholder="Tell me about the opportunity, your project, or what you'd like to discuss..."
        />
      </div>

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-4 flex items-center gap-3"
        >
          <AlertCircle className="text-blue-400" size={20} />
          <p className="text-white">{errorMessage}</p>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 disabled:from-blue-600/50 disabled:to-purple-600/50 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  )
}

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#000000] via-indigo-900 to-[#000000]" id="contact">
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
              
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-400/30 rounded-lg p-6 mb-6">
                <p className="text-white text-lg leading-relaxed">
                  I&apos;m actively seeking a full-time developer position where I can bring the same level of impact I&apos;ve demonstrated at Compassionate Caregivers to your team.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-white">Available to start immediately</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-white">Based in Brampton, Ontario (Open to remote/hybrid)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-white">Seeking permanent full-time role (PR pathway)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
              
              <div className="space-y-4">
                <a
                  href="mailto:info@jasskhinda.com"
                  className="flex items-center gap-4 bg-indigo-600/20 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="bg-blue-500 p-3 rounded-full group-hover:bg-indigo-600 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-white font-medium">info@jasskhinda.com</p>
                  </div>
                </a>

                <a
                  href="tel:6473556441"
                  className="flex items-center gap-4 bg-indigo-600/20 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="bg-blue-500 p-3 rounded-full group-hover:bg-indigo-600 transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <p className="text-white font-medium">(647) 355-6441</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jasskhinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-indigo-600/20 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="bg-blue-500 p-3 rounded-full group-hover:bg-indigo-600 transition-colors">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/jasskhinda</p>
                  </div>
                </a>

                <a
                  href="https://github.com/jasskhinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-indigo-600/20 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="bg-blue-500 p-3 rounded-full group-hover:bg-indigo-600 transition-colors">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">GitHub</p>
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
            className="bg-indigo-600/20 border border-blue-400/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Hire Me?</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Proven Track Record</h4>
                  <p className="text-white">
                    I deliver where others can&apos;t. Completed 3 complex healthcare apps in 19 days that stumped 2 developers for 3 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Modern Tech Stack</h4>
                  <p className="text-white">
                    Expert in Next.js, React, Supabase, and modern JavaScript. Ready to work with your cutting-edge technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Business Impact Focus</h4>
                  <p className="text-white">
                    I don&apos;t just write code—I build solutions that drive real business value and improve user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Immediate Availability</h4>
                  <p className="text-white">
                    Ready to start contributing to your team from day one. No ramp-up time needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-6">Send a Message</h4>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-blue-400/30"
        >
          <p className="text-white/70">
            © 2025 Jaspal Singh (Jass Khinda). Portfolio
          </p>
        </motion.div>
      </div>
    </section>
  )
}