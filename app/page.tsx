'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuPreview from '@/components/MenuPreview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuPreview />
      <Contact />
      <Footer />
    </main>
  )
} 