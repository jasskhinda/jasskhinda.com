'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Star, Clock, Users, Zap, Eye, Code2, Rocket } from 'lucide-react'

const featuredProject = {
  title: 'Compassionate Caregivers Ecosystem',
  subtitle: 'Healthcare Transportation Revolution',
  description: 'Inherited 5 unfinished apps in development hell for 3 years. Rebuilt everything from scratch using cutting-edge tech stack and delivered 3 production-ready apps in just 19 days.',
  image: '/api/placeholder/600/400',
  tech: ['Next.js', 'React.js', 'Supabase', 'Tailwind CSS', 'MongoDB', 'Firebase'],
  stats: {
    daysToComplete: 19,
    appsBuilt: 3,
    totalApps: 5,
    previousDevTime: '3 years'
  },
  apps: [
    { 
      name: 'Facility Portal', 
      url: 'https://facility.compassionatecaretransportation.com/',
      status: 'live',
      description: 'Healthcare facility management interface'
    },
    { 
      name: 'Booking App', 
      url: 'https://book.compassionatecaretransportation.com/',
      status: 'live',
      description: 'Patient booking and scheduling system'
    },
    { 
      name: 'Dispatcher Dashboard', 
      url: 'https://dispatch.compassionatecaretransportation.com/',
      status: 'live',
      description: 'Real-time dispatch and routing control'
    },
    { 
      name: 'Admin Panel', 
      url: 'https://admin.compassionatecaretransportation.com/',
      status: 'development',
      description: 'System administration and analytics'
    },
    { 
      name: 'Driver App', 
      url: 'https://driver.compassionatecaretransportation.com/',
      status: 'development',
      description: 'Driver mobile application'
    }
  ],
  impact: [
    'Reduced booking time by 75%',
    'Real-time driver tracking and dispatch',
    'Automated scheduling and routing',
    'Seamless facility integration',
    'Owner and staff extremely impressed'
  ]
}

const otherProjects = [
  {
    title: 'CC Healthcare App',
    description: 'Real-time healthcare management platform with advanced user management',
    tech: ['React.js', 'Supabase', 'MongoDB'],
    type: 'Healthcare Platform',
    status: 'Live Production',
    url: 'http://ccapp.compassionatecaregivershc.com/',
    highlights: ['Real-time updates', 'Secure data handling', 'User management']
  },
  {
    title: 'Interactive 3D Portfolio',
    description: 'This very portfolio showcasing advanced web technologies',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
    type: 'Portfolio Showcase',
    status: 'Live Demo',
    highlights: ['3D interactions', 'Advanced animations', 'Modern design']
  },
  {
    title: 'E-commerce Empire',
    description: '150+ successful online stores built with conversion optimization',
    tech: ['WordPress', 'Shopify', 'WooCommerce'],
    type: 'E-commerce Solutions',
    status: 'Multiple Live Sites',
    highlights: ['150+ stores delivered', 'Conversion optimized', 'Revenue focused']
  }
]

export default function ProjectShowcase() {
  const [selectedApp, setSelectedApp] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#75ccca] via-[#0e8774] to-[#75ccca] mb-6"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Project Showcase
          </motion.h2>
          <p className="text-xl text-gray-300">
            Where impossible becomes possible • Click to explore live apps
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-[#75ccca]/10 via-[#0e8774]/10 to-[#75ccca]/10 backdrop-blur-md rounded-3xl p-8 border border-[#75ccca]/30 relative overflow-hidden">
            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4"
            >
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Star size={16} />
                LEGENDARY
              </div>
            </motion.div>

            <motion.h3
              className="text-4xl md:text-5xl font-black text-white mb-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {featuredProject.title}
            </motion.h3>
            <p className="text-xl text-[#75ccca] font-semibold mb-6">{featuredProject.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
              {featuredProject.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Clock className="text-[#75ccca] mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.daysToComplete}</div>
                <div className="text-green-300 text-sm font-medium">Days to Complete</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-[#75ccca]/20 border border-[#75ccca]/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Zap className="text-[#75ccca] mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.appsBuilt}</div>
                <div className="text-blue-300 text-sm font-medium">Apps Delivered</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Users className="text-[#0e8774] mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-red-300 text-sm font-medium">Previous Devs Failed</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-[#0e8774]/20 border border-[#0e8774]/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Star className="text-purple-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-purple-300 text-sm font-medium">Success Rate</div>
              </motion.div>
            </div>

            {/* App Selector */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Rocket className="text-[#75ccca]" />
                Live Production Apps
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredProject.apps.map((app, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedApp(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedApp === index
                        ? 'bg-[#75ccca] text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {app.name}
                    <span className={`ml-2 w-2 h-2 rounded-full inline-block ${
                      app.status === 'live' ? 'bg-[#75ccca] animate-pulse' : 'bg-[#0e8774]'
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Selected App Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedApp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-white mb-2">
                        {featuredProject.apps[selectedApp].name}
                      </h5>
                      <p className="text-gray-300 mb-4">
                        {featuredProject.apps[selectedApp].description}
                      </p>
                    </div>
                    <motion.a
                      href={featuredProject.apps[selectedApp].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#75ccca] hover:bg-[#0e8774] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
                    >
                      <Eye size={18} />
                      View Live
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="text-[#75ccca]" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gradient-to-r from-[#75ccca]/20 to-[#0e8774]/20 text-[#75ccca] px-4 py-2 rounded-full text-sm font-medium border border-[#75ccca]/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Business Impact</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {featuredProject.impact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#75ccca] rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Epic Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-[#75ccca]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#75ccca]/10 to-[#0e8774]/10"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-[#75ccca]/20 text-[#75ccca] px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-gray-400 hover:text-[#75ccca] transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1 h-1 bg-[#75ccca] rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <span className="text-[#75ccca] font-medium text-sm">
                      ✅ {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}