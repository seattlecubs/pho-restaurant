'use client'

import { motion } from 'framer-motion'
import { MenuItem as MenuItemType } from '@/lib/types'

interface MenuItemProps {
  item: MenuItemType
  index: number
}

export default function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
        <span className="text-6xl">{item.imageEmoji}</span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {item.name}
            </h3>
            {item.vietnameseName !== item.name && (
              <p className="text-sm text-gray-500">{item.vietnameseName}</p>
            )}
          </div>
          {item.isPopular && (
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
