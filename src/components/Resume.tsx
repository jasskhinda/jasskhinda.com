'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react'

const skills = {
  primary: [
    { name: 'Next.js', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Supabase', level: 85 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Firebase', level: 75 }
  ],
  secondary: [
    { name: 'WordPress', level: 95 },
    { name: 'Digital Marketing', level: 85 },
    { name: 'SEO', level: 80 },
    { name: 'AI Integration', level: 75 }
  ]
}

const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'Compassionate Caregivers',
    location: 'US-based Healthcare Transportation',
    period: 'Current',
    achievements: [
      'Rebuilt 5 healthcare transportation apps from scratch using Next.js and Supabase',
      'Delivered 3 production-ready apps in 19 days (previous developers took 3 years without completion)',
      'Implemented real-time booking system, driver management, and facility coordination',
      'Reduced development time by 90% through efficient architecture and modern tooling'
    ]
  }
]

const education = [
  {
    degree: 'Full Stack Development',
    institution: 'META',
    status: 'In Progress',
    year: '2024'
  },
  {
    degree: 'Database and Software Development',
    institution: 'Loyalist College',
    status: 'Ongoing',
    year: '2024'
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'University',
    status: 'Completed',
    year: '2016'
  }
]

const certifications = [
  'Google Digital Marketing & E-commerce',
  'META Front-End Development',
  'Google AI Essentials'
]

export default function Resume() {
  return (
    <section className="py-20 px-4 bg-gray-900/50" id="resume">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Resume
        </motion.h2>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Download size={20} />
            Download Resume PDF
          </a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Primary Stack (Job-Ready)</h4>
              <div className="space-y-4">
                {skills.primary.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Additional Skills</h4>
              <div className="space-y-4">
                {skills.secondary.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gray-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-blue-400" size={28} />
            Professional Experience
          </h3>
          
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-600/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                  <p className="text-blue-400">{job.company}</p>
                  <p className="text-gray-400 text-sm">{job.location}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{job.period}</span>
              </div>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      edu.status === 'Completed' 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-blue-600/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-blue-400" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-600/30 transition-colors flex items-center gap-3"
                >
                  <Award className="text-blue-400" size={20} />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}