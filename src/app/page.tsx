'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import LoadingScreen from '@/components/LoadingScreen'
import FallbackHero from '@/components/FallbackHero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LoadingScreen />
      <main className="relative">
        {/* Hero Section */}
        <FallbackHero />
        
        {/* Traditional About Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <About />
        </section>
        
        {/* Resume Section */}
        <Resume />
        
        {/* Works Section */}
        <Works />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Floating Navigation */}
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-black/50 backdrop-blur-md rounded-full p-2 border border-blue-600/30">
            <div className="space-y-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-3 h-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
                title="Hero"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="block w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors"
                title="About"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
                className="block w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors"
                title="Resume"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
                className="block w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors"
                title="Works"
              />
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })}
                className="block w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors"
                title="Contact"
              />
            </div>
          </div>
        </nav>
        
        {/* Achievement Badge */}
        <div className="fixed bottom-8 left-8 z-50">
          <div className="bg-gradient-to-r from-green-600/90 to-blue-600/90 backdrop-blur-md rounded-lg p-4 border border-green-600/30 max-w-xs">
            <div className="text-white text-sm">
              <div className="font-bold mb-1">🏆 Achievement Unlocked</div>
              <div className="text-xs opacity-90">3 apps delivered in 19 days</div>
              <div className="text-xs text-green-300 mt-1">Where others failed for 3 years</div>
            </div>
          </div>
        </div>
        
        {/* Availability Status */}
        <div className="fixed top-8 left-8 z-50">
          <div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-green-600/30 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Available for Hire</span>
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}