'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, Clock, Users, Zap } from 'lucide-react'

const featuredProject = {
  title: 'Compassionate Caregivers App Ecosystem',
  description: 'Complete healthcare transportation management system built from scratch',
  longDescription: 'Inherited 5 unfinished apps that had been in development for 3 years by 2 previous developers. Rebuilt the entire system from scratch using modern technologies and delivered 3 production-ready apps in just 19 days.',
  tech: ['Next.js', 'React.js', 'Supabase', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Real-time Updates'],
  stats: {
    daysToComplete: 19,
    appsBuilt: 3,
    totalApps: 5,
    previousDevTime: '3 years'
  },
  apps: [
    { 
      name: 'Facility Portal', 
      status: 'completed', 
      description: 'Healthcare facility interface',
      url: 'https://facility.compassionatecaretransportation.com/'
    },
    { 
      name: 'Booking App', 
      status: 'completed', 
      description: 'Client-facing booking interface',
      url: 'https://book.compassionatecaretransportation.com/'
    },
    { 
      name: 'Dispatcher Dashboard', 
      status: 'completed', 
      description: 'Centralized dispatch control',
      url: 'https://dispatch.compassionatecaretransportation.com/'
    },
    { 
      name: 'Admin Panel', 
      status: 'in-progress', 
      description: 'System administration',
      url: 'https://admin.compassionatecaretransportation.com/'
    },
    { 
      name: 'Driver App', 
      status: 'in-progress', 
      description: 'Real-time driver management',
      url: 'https://driver.compassionatecaretransportation.com/'
    }
  ],
  impact: [
    'Reduced booking time by 75%',
    'Real-time driver tracking and dispatch',
    'Automated scheduling and routing',
    'Extremely impressed owner and staff'
  ]
}

const otherProjects = [
  {
    title: 'Compassionate Caregivers HC App',
    description: 'Healthcare management platform with real-time features',
    tech: ['Next.js', 'React.js', 'Supabase', 'MongoDB'],
    type: 'Full-Stack Development',
    highlights: ['Real-time updates', 'User management system', 'Secure healthcare data'],
    url: 'http://ccapp.compassionatecaregivershc.com/'
  },
  {
    title: 'Modern Portfolio Site',
    description: 'This portfolio - rebuilt from WordPress to Next.js',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    type: 'Personal Project',
    highlights: ['Modern tech stack', 'Optimized performance', 'Professional design']
  },
  {
    title: 'E-commerce Solutions',
    description: 'Multiple e-commerce platforms built with WordPress and Shopify',
    tech: ['WordPress/WooCommerce', 'Shopify', 'Payment Integration'],
    type: 'E-commerce Development',
    highlights: ['150+ stores built', 'Custom themes', 'Conversion optimized']
  }
]

export default function Works() {
  return (
    <section className="py-20 px-4" id="works">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Works
        </motion.h2>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-yellow-400" size={24} />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Featured Project</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {featuredProject.title}
            </h3>

            <p className="text-gray-300 text-lg mb-6">
              {featuredProject.longDescription}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Clock className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.daysToComplete}</div>
                <div className="text-gray-400 text-sm">Days to Complete</div>
              </div>
              <div className="text-center">
                <Zap className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.appsBuilt}</div>
                <div className="text-gray-400 text-sm">Apps Delivered</div>
              </div>
              <div className="text-center">
                <Users className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-gray-400 text-sm">Previous Developers Failed</div>
              </div>
              <div className="text-center">
                <Star className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Apps List */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Apps in the Ecosystem:</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProject.apps.map((app, index) => (
                  <a
                    key={index}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 block hover:border-blue-600/50 transition-all hover:transform hover:scale-105 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {app.name}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        app.status === 'completed' 
                          ? 'bg-green-600/20 text-green-400' 
                          : 'bg-blue-600/20 text-blue-400'
                      }`}>
                        {app.status === 'completed' ? 'Live' : 'In Progress'}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{app.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Technology Stack:</h4>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Business Impact:</h4>
              <ul className="space-y-2">
                {featuredProject.impact.map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-600/30 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h4>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-300 bg-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring this same impact to your team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m looking for a full-time developer position where I can continue delivering exceptional results and building innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Let&apos;s Talk
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}