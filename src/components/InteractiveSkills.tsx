'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Database, Smartphone, ShoppingCart, Zap, Star } from 'lucide-react'

const skillCategories = [
  {
    title: 'Full-Stack Development',
    icon: Code,
    color: 'from-[#75ccca] to-[#0e8774]',
    skills: [
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'React.js', level: 85, color: '#61dafb' },
      { name: 'Supabase', level: 85, color: '#3ecf8e' },
      { name: 'Firebase', level: 80, color: '#ffa000' },
      { name: 'MongoDB', level: 75, color: '#47a248' },
      { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
    ]
  },
  {
    title: 'Web Technologies',
    icon: Database,
    color: 'from-[#0e8774] to-[#75ccca]',
    skills: [
      { name: 'HTML/CSS', level: 95, color: '#e34c26' },
      { name: 'JavaScript', level: 85, color: '#f7df1e' },
      { name: 'TypeScript', level: 70, color: '#3178c6' },
      { name: 'Bootstrap', level: 80, color: '#7952b3' },
    ]
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-[#75ccca] to-[#0e8774]',
    skills: [
      { name: 'React Native', level: 75, color: '#61dafb' },
      { name: 'Mobile-First Design', level: 85, color: '#10b981' },
    ]
  },
  {
    title: 'E-commerce',
    icon: ShoppingCart,
    color: 'from-[#0e8774] to-[#75ccca]',
    skills: [
      { name: 'WordPress', level: 95, color: '#21759b' },
      { name: 'Shopify', level: 85, color: '#7ab55c' },
      { name: 'WooCommerce', level: 90, color: '#96588a' },
    ]
  }
]

export default function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#75ccca]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Interactive Skills Galaxy
          </motion.h2>
          <p className="text-xl text-gray-300">
            Click categories • Hover skills • Watch the magic happen
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 ${
                selectedCategory === index
                  ? 'border-[#75ccca] bg-[#75ccca]/10'
                  : 'border-gray-600 bg-gray-800/30 hover:border-[#75ccca]/50'
              }`}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-xl`}
                animate={{
                  opacity: selectedCategory === index ? 0.3 : 0.1,
                }}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={selectedCategory === index ? { rotate: 360 } : {}}
                  transition={{ duration: 1 }}
                >
                  <category.icon 
                    size={32} 
                    className={`mx-auto mb-3 ${
                      selectedCategory === index ? 'text-[#75ccca]' : 'text-gray-400'
                    }`} 
                  />
                </motion.div>
                <h3 className={`font-bold ${
                  selectedCategory === index ? 'text-[#75ccca]' : 'text-gray-300'
                }`}>
                  {category.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Category Skills */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              {(() => {
                const Icon = skillCategories[selectedCategory].icon
                return <Icon className="text-[#75ccca]" size={40} />
              })()}
            </motion.div>
            <h3 className="text-3xl font-bold text-white">
              {skillCategories[selectedCategory].title}
            </h3>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Star className="text-[#75ccca]" size={24} />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-[#75ccca]/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                    <motion.div
                      animate={hoveredSkill === skill.name ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap 
                        className="text-[#75ccca]" 
                        size={20}
                        style={{ filter: hoveredSkill === skill.name ? 'drop-shadow(0 0 8px #fbbf24)' : 'none' }}
                      />
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                      <motion.div
                        className="h-3 rounded-full relative overflow-hidden"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={hoveredSkill === skill.name ? {
                            x: ['-100%', '100%'],
                          } : {}}
                          transition={{ duration: 1, repeat: hoveredSkill === skill.name ? Infinity : 0 }}
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <motion.span 
                        className="font-bold"
                        animate={{ 
                          color: hoveredSkill === skill.name ? '#ffffff' : '#9ca3af',
                          scale: hoveredSkill === skill.name ? 1.1 : 1
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#75ccca]/20 via-[#0e8774]/20 to-[#75ccca]/20 backdrop-blur-md rounded-2xl p-8 border border-[#75ccca]/30">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Zap className="text-[#75ccca]" size={48} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuously Evolving Tech Stack
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Always learning, always growing. Currently mastering Full Stack Development with META 
              and expanding database expertise at Loyalist College. The tech world never sleeps, and neither do I!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}