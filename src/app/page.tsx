'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import LoadingScreen from '@/components/LoadingScreen'
import CreativeHero from '@/components/CreativeHero'
import About from '@/components/About'
import InteractiveSkills from '@/components/InteractiveSkills'
import ProjectShowcase from '@/components/ProjectShowcase'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LoadingScreen />
      <main className="relative">
        {/* Creative Hero Section */}
        <CreativeHero />
        
        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0e8774]">
          <About />
        </section>
        
        {/* Interactive Skills Galaxy */}
        <InteractiveSkills />
        
        {/* Project Showcase */}
        <ProjectShowcase />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Floating Navigation */}
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-black/50 backdrop-blur-md rounded-full p-2 border border-[#75ccca]/30">
            <div className="space-y-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-4 h-4 rounded-full bg-gradient-to-r from-[#75ccca] to-[#0e8774] hover:scale-125 transition-all duration-300 shadow-lg"
                title="Hero"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="block w-4 h-4 rounded-full bg-[#0e8774] hover:bg-gradient-to-r hover:from-[#75ccca] hover:to-[#0e8774] hover:scale-125 transition-all duration-300"
                title="About"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
                className="block w-4 h-4 rounded-full bg-[#0e8774] hover:bg-gradient-to-r hover:from-[#75ccca] hover:to-[#0e8774] hover:scale-125 transition-all duration-300"
                title="Skills"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
                className="block w-4 h-4 rounded-full bg-[#0e8774] hover:bg-gradient-to-r hover:from-[#75ccca] hover:to-[#0e8774] hover:scale-125 transition-all duration-300"
                title="Projects"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })}
                className="block w-4 h-4 rounded-full bg-[#0e8774] hover:bg-gradient-to-r hover:from-[#75ccca] hover:to-[#0e8774] hover:scale-125 transition-all duration-300"
                title="Contact"
              />
            </div>
          </div>
        </nav>
        
        {/* Achievement Badge - Floating */}
        <div className="fixed bottom-8 left-8 z-50">
          <div className="bg-gradient-to-r from-[#75ccca]/90 via-[#0e8774]/90 to-[#75ccca]/90 backdrop-blur-md rounded-xl p-4 border border-[#75ccca]/50 max-w-xs shadow-2xl animate-pulse">
            <div className="text-white text-sm">
              <div className="font-black mb-1 flex items-center gap-2">
                🏆 LEGENDARY ACHIEVEMENT
                <span className="text-xs bg-[#75ccca] text-black px-2 py-1 rounded-full font-bold">NEW</span>
              </div>
              <div className="text-xs opacity-90 font-semibold">3 apps delivered in 19 days</div>
              <div className="text-xs text-[#75ccca] mt-1 font-medium">What others couldn&apos;t do in 3 years</div>
            </div>
          </div>
        </div>
        
        {/* Status Indicator - Animated */}
        <div className="fixed top-8 left-8 z-50">
          <div className="bg-gradient-to-r from-[#75ccca]/90 to-[#0e8774]/90 backdrop-blur-md rounded-full px-6 py-3 border border-[#75ccca]/50 flex items-center gap-3 shadow-xl">
            <div className="relative">
              <div className="w-3 h-3 bg-[#75ccca] rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 bg-[#75ccca] rounded-full"></div>
            </div>
            <span className="text-white font-bold text-sm">🚀 AVAILABLE FOR HIRE</span>
          </div>
        </div>

        {/* Cursor Follow Effect */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#75ccca]/5 via-transparent to-transparent"></div>
        </div>
      </main>
    </ThemeProvider>
  )
}