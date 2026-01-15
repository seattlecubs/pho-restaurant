'use client'

import { motion } from 'framer-motion'
import { HeartIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    {
      icon: HeartIcon,
      title: 'Family Recipes',
      description: 'Authentic recipes passed down through generations, preserving the true taste of Vietnam.'
    },
    {
      icon: UsersIcon,
      title: 'Warm Hospitality',
      description: 'Experience the warmth and friendliness that makes every visit feel like coming home.'
    },
    {
      icon: SparklesIcon,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients, sourced locally whenever possible.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Pho Kho Gia Lai, where tradition meets taste in the heart of Libertyville. 
              Our journey began with a simple dream: to share the authentic flavors of Vietnam with our community.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by the Nguyen family, who brought their cherished family recipes from Gia Lai province, 
              we've been serving the most authentic Vietnamese pho and traditional dishes since our opening. 
              Every bowl tells a story of heritage, passion, and love for great food.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🍜</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Authentic Vietnamese Experience
                </h3>
                <p className="text-gray-600 mb-6">
                  From our signature pho to traditional banh mi and fresh spring rolls, 
                  every dish is crafted with care and authenticity.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">50+</div>
                    <div className="text-gray-600">Menu Items</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 