'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Star, Zap, Eye, Code2, Rocket, Smartphone } from 'lucide-react'

const webApps = [
  {
    name: 'Facility Portal',
    url: 'https://facility.compassionatecaretransportation.com/',
    github: 'https://github.com/jasskhinda/facility_app',
    status: 'live',
    description: 'Multi-tenant facility management with automated invoicing, client management, and trip scheduling',
    tech: ['Real-time updates', 'Role-based access', 'Automated billing']
  },
  {
    name: 'Booking App',
    url: 'https://book.compassionatecaretransportation.com/',
    github: 'https://github.com/jasskhinda/booking_app',
    status: 'live',
    description: 'Dynamic pricing engine with real-time cost calculation and automated trip scheduling',
    tech: ['Cost optimization', 'Payment integration', 'Trip management']
  },
  {
    name: 'Dispatcher Dashboard',
    url: 'https://dispatch.compassionatecaretransportation.com/',
    github: 'https://github.com/jasskhinda/dispatcher_app',
    status: 'live',
    description: 'Real-time dispatch control with live driver tracking, trip management, and route optimization',
    tech: ['.NET', 'C#', 'Real-time GPS', 'Live updates', 'Trip approval workflow']
  },
  {
    name: 'Admin Panel',
    url: 'https://admin.compassionatecaretransportation.com/',
    github: 'https://github.com/jasskhinda/admin_app',
    status: 'live',
    description: 'Enterprise admin dashboard with user management, analytics, and system-wide configuration',
    tech: ['User management', 'Analytics', 'System configuration']
  },
  {
    name: 'Driver App',
    url: 'https://driver.compassionatecaretransportation.com/',
    github: 'https://github.com/jasskhinda/driver',
    status: 'live',
    description: 'Driver interface with trip acceptance, real-time location sharing, and status updates',
    tech: ['GPS tracking', 'Push notifications', 'Trip management']
  },
  {
    name: 'Compassionate Caregivers Web Portal',
    url: 'https://ccapp.compassionatecaregivershc.com/',
    github: 'https://github.com/jasskhinda/compassionate-caregivers-app',
    status: 'live',
    description: 'Comprehensive caregiver training platform with exam management, video content delivery, real-time chat, and night shift monitoring system',
    tech: ['Video streaming', 'Real-time chat', 'Exam system', 'Alert system']
  },
  {
    name: 'WhatsTheRub',
    url: 'https://whats-the-rub.vercel.app/',
    github: 'https://github.com/jasskhinda/WhatsTheRub',
    status: 'live',
    description: 'Full-stack web application with modern UI/UX',
    tech: ['Next.js', 'React', 'Modern stack']
  }
]

const mobileApps = [
  {
    name: 'Compassionate Caregivers',
    description: 'Enterprise caregiver training platform with exam management, video content delivery system, real-time group & private chat, and automated night shift monitoring with alert tracking',
    tech: ['Flutter', 'React Native', 'Firebase', 'Video Streaming', 'Real-time Chat'],
    platforms: [
      {
        name: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.compassionate.caregiver&pcampaignid=web_share',
        icon: 'Android'
      },
      {
        name: 'iOS',
        url: 'https://apps.apple.com/us/app/compassionate-caregivers-app/id6751550773',
        icon: 'Apple'
      }
    ],
    github: 'https://github.com/jasskhinda/compassionate-caregivers-app',
    features: [
      'Admin-managed exam creation & caregiver testing',
      'Video content management (public/private sharing)',
      'Real-time group & private messaging',
      'Night shift monitoring with automated alerts',
      'Staff progress tracking & content delivery',
      'Cross-platform (iOS, Android, Web)'
    ]
  },
  {
    name: 'CCT Facility Portal',
    description: 'Healthcare facility transportation management system designed for seamless coordination with the CCT transportation network including dispatchers, drivers, and billing systems',
    tech: ['Flutter', 'React Native', 'Stripe', 'Real-time Updates', 'Push Notifications'],
    platforms: [
      {
        name: 'iOS',
        url: 'https://apps.apple.com/ca/app/cct-facility-portal/id6754805955',
        icon: 'Apple'
      },
      {
        name: 'Android',
        url: '#',
        icon: 'Android'
      }
    ],
    github: 'https://github.com/jasskhinda/facility_app_mobile_ios_android',
    features: [
      'Effortless trip booking with real-time pricing',
      'Client management & roster tracking',
      'Real-time trip tracking with driver assignments',
      'Direct messaging with dispatch team',
      'Comprehensive billing & invoice tracking',
      'Dashboard insights & statistics'
    ]
  }
]

const featuredProject = {
  title: 'Compassionate Caregivers Ecosystem',
  subtitle: 'Enterprise Healthcare Transportation Platform',
  description: 'Comprehensive healthcare transportation management system featuring multiple web applications and a cross-platform mobile solution. Built with modern architecture patterns and real-time capabilities to serve healthcare facilities, patients, dispatchers, and drivers.',
  image: '/api/placeholder/600/400',
  tech: ['Next.js', 'React.js', 'Flutter', 'Supabase', 'Tailwind CSS', 'MongoDB', 'Firebase'],
  stats: {
    appsBuilt: 7,
    platforms: 3,
    technologies: 7
  },
  impact: [
    'Reduced booking time by 75%',
    'Real-time driver tracking and dispatch',
    'Automated scheduling and routing',
    'Seamless facility integration',
    'Cross-platform mobile accessibility'
  ]
}

const otherProjects = [
  {
    title: 'KFresh Organic Groceries',
    description: 'Premium organic grocery e-commerce platform with advanced filtering and ordering',
    tech: ['WordPress', 'WooCommerce', 'Custom PHP'],
    type: 'E-commerce Platform',
    status: 'Live Production',
    url: 'http://kfresh.ca/',
    highlights: ['Organic product catalog', 'Advanced search', 'Order management']
  },
  {
    title: 'Fenning Farms',
    description: 'Agricultural business website with product showcase and contact system',
    tech: ['WordPress', 'Custom CSS', 'PHP'],
    type: 'Business Website',
    status: 'Live Production',
    url: 'https://fenningfarms.com/',
    highlights: ['Product showcase', 'Farm gallery', 'Contact integration']
  },
  {
    title: 'R&J Medical Services',
    description: 'Professional healthcare services website with appointment booking',
    tech: ['WordPress', 'Custom Theme', 'Contact Forms'],
    type: 'Healthcare Website',
    status: 'Live Production',
    url: 'https://randjmedicalservices.com/',
    highlights: ['Service listings', 'Appointment booking', 'Professional design']
  },
  {
    title: 'BugzBugMe Pest Control',
    description: 'Pest control services website with service area mapping',
    tech: ['WordPress', 'Custom Design', 'Maps Integration'],
    type: 'Service Business',
    status: 'Live Production',
    url: 'https://bugzbugme.com/',
    highlights: ['Service areas', 'Quote requests', 'Professional branding']
  },
  {
    title: 'My5Health Wellness',
    description: 'Health and wellness platform with product catalog',
    tech: ['WordPress', 'E-commerce', 'Health Plugins'],
    type: 'Health Platform',
    status: 'Live Production',
    url: 'http://my5health.com/',
    highlights: ['Wellness products', 'Health resources', 'User accounts']
  },
  {
    title: 'iVitaBoost Supplements',
    description: 'Vitamin and supplement e-commerce store with subscription model',
    tech: ['WordPress', 'WooCommerce', 'Subscription System'],
    type: 'E-commerce Store',
    status: 'Live Production',
    url: 'http://ivitaboost.com/',
    highlights: ['Subscription products', 'Supplement catalog', 'Recurring billing']
  },
  {
    title: 'The Mug Coffee Shop',
    description: 'Local coffee shop website with menu and location details',
    tech: ['WordPress', 'Custom Theme', 'Menu System'],
    type: 'Restaurant Website',
    status: 'Live Production',
    url: 'http://themug.com/',
    highlights: ['Digital menu', 'Location info', 'Coffee shop branding']
  },
  {
    title: 'Griggsby Station',
    description: 'Community website with event listings and local information',
    tech: ['WordPress', 'Event Management', 'Community Features'],
    type: 'Community Platform',
    status: 'Live Production',
    url: 'https://griggsbystation.net/',
    highlights: ['Event calendar', 'Community news', 'Local directory']
  }
]

export default function ProjectShowcase() {
  // const [selectedApp, setSelectedApp] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#000000] via-indigo-900 to-[#000000] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
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
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-indigo-600 mb-6"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Project Showcase
          </motion.h2>
          <p className="text-xl text-white">
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
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-indigo-600/10 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 relative overflow-hidden">
            <motion.h3
              className="text-4xl md:text-5xl font-black text-white mb-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {featuredProject.title}
            </motion.h3>
            <p className="text-xl text-blue-400 font-semibold mb-6">{featuredProject.subtitle}</p>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-4xl">
              {featuredProject.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Zap className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.appsBuilt}</div>
                <div className="text-blue-400 text-sm font-medium">Applications Delivered</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Code2 className="text-purple-500 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.platforms}</div>
                <div className="text-blue-400 text-sm font-medium">Platforms (Web, iOS, Android)</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-indigo-600/20 border border-indigo-500/30 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <Star className="text-indigo-500 mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{featuredProject.stats.technologies}</div>
                <div className="text-blue-400 text-sm font-medium">Technology Stack</div>
              </motion.div>
            </div>

            {/* Full Stack Web Apps Section */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="text-blue-400" />
                FULL STACK WEB APPS
              </h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webApps.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-indigo-600/20 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/50 transition-all"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-lg font-bold text-white">{app.name}</h5>
                        <span className={`w-3 h-3 rounded-full ${
                          app.status === 'live' ? 'bg-blue-400 animate-pulse' : 'bg-indigo-600'
                        }`} />
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        {app.description}
                      </p>

                      {/* Tech badges */}
                      {app.tech && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {app.tech.map((techItem, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs border border-blue-400/20"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <motion.a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                      >
                        <Eye size={16} />
                        Live
                      </motion.a>

                      {app.github && (
                        <motion.a
                          href={app.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-indigo-600/40 border border-blue-400/50 hover:bg-indigo-600/60 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                        >
                          <Code2 size={16} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Full Stack Mobile Apps Section */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Smartphone className="text-blue-400" />
                FULL STACK MOBILE APPS
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {mobileApps.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-indigo-600/30 to-blue-500/20 border-2 border-blue-400/40 rounded-xl p-6 hover:border-blue-400/60 transition-all"
                  >
                    <div className="mb-4">
                      <h5 className="text-xl font-bold text-white mb-2">{app.name}</h5>
                      <p className="text-white/80 text-sm mb-4">{app.description}</p>
                    </div>

                    {/* Platform Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {app.platforms.map((platform, pIndex) => (
                        <motion.a
                          key={pIndex}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg text-sm"
                        >
                          <Smartphone size={16} />
                          <span>{platform.name}</span>
                          <ExternalLink size={14} />
                        </motion.a>
                      ))}
                    </div>

                    {app.github && (
                      <motion.a
                        href={app.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-indigo-600/40 border-2 border-blue-400/50 hover:bg-indigo-600/60 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg mb-4 text-sm"
                      >
                        <Code2 size={16} />
                        <span>View Code</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                      {app.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-white">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="text-blue-400" />
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
                    className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6">
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
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-white">{item}</span>
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
                className="bg-indigo-600/20 backdrop-blur-md rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-blue-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-white mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-blue-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-blue-400/30">
                    <span className="text-blue-400 font-medium text-sm">
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