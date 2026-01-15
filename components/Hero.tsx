'use client'

import { motion } from 'framer-motion'
import { StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Pho Kho Gia Lai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Authentic Vietnamese Cuisine in the Heart of Libertyville
            </p>
          </motion.div>

          {/* Rating and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-8"
          >
            <div className="flex items-center space-x-1">
              <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
              <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
              <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
              <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
              <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-gray-700 font-medium">4.8/5</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span>Tue-Sun 11AM-8PM</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="w-5 h-5" />
              <span>Libertyville, IL</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Order Online Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Full Menu
            </button>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🎉 Grand Opening Special
            </h3>
            <p className="text-gray-600 mb-4">
              Get 20% off your first order when you order online!
            </p>
            <div className="text-sm text-gray-500">
              Use code: <span className="font-mono bg-orange-100 px-2 py-1 rounded">WELCOME20</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
} 