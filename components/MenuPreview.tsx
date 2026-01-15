'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function MenuPreview() {
  const popularDishes = [
    {
      id: '1',
      name: 'Rare Steak and Meatball Pho',
      vietnameseName: 'Phở Tái Bò Viên',
      description: 'Our signature pho with tender rare steak and homemade meatballs in aromatic beef broth simmered for 12 hours.',
      price: 14.99,
      imageEmoji: '🍜',
      isPopular: true
    },
    {
      id: '2',
      name: 'Spicy Hue Style Soup',
      vietnameseName: 'Bún Bò Huế',
      description: 'Traditional spicy beef noodle soup with lemongrass, shrimp paste, and thick rice noodles from Central Vietnam.',
      price: 15.99,
      imageEmoji: '🍲',
      isPopular: true
    },
    {
      id: '3',
      name: 'Shrimp Spring Rolls',
      vietnameseName: 'Gỏi Cuốn Tôm',
      description: 'Fresh shrimp, pork, vermicelli, and herbs wrapped in rice paper. Served with peanut sauce (2 pcs).',
      price: 6.99,
      imageEmoji: '🥬',
      isPopular: false
    },
    {
      id: '4',
      name: 'Vietnamese Crispy Pancake',
      vietnameseName: 'Bánh Xèo',
      description: 'Crispy turmeric crepe filled with shrimp, pork, and bean sprouts. Served with fresh herbs and dipping sauce.',
      price: 13.99,
      imageEmoji: '🥞',
      isPopular: true
    },
    {
      id: '5',
      name: 'Crispy Fried Eggrolls',
      vietnameseName: 'Chả Giò',
      description: 'Golden fried eggrolls stuffed with pork, vegetables, and glass noodles. Served with fish sauce (3 pcs).',
      price: 7.99,
      imageEmoji: '🥟',
      isPopular: false
    },
    {
      id: '6',
      name: 'Vermicelli with Grilled Beef',
      vietnameseName: 'Bún Bò Nướng',
      description: 'Rice vermicelli bowl topped with marinated grilled beef, fresh vegetables, herbs, and fish sauce.',
      price: 14.99,
      imageEmoji: '🥗',
      isPopular: false
    }
  ]

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with authentic Vietnamese flavors and the freshest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <span className="text-6xl">{dish.imageEmoji}</span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-500">{dish.vietnameseName}</p>
                  </div>
                  {dish.isPopular && (
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/menu" className="btn-secondary text-lg px-8 py-4 inline-block">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
