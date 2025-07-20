import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <Hero />
        <About />
        <Resume />
        <Works />
        <Contact />
      </main>
    </ThemeProvider>
  )
}