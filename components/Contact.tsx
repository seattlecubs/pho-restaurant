'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { restaurant } from '@/lib/config'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Location',
      content: restaurant.address.full,
      link: restaurant.googleMapsUrl
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: restaurant.phone,
      link: restaurant.phoneLink
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      content: restaurant.hoursShort,
      link: null
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: restaurant.email,
      link: `mailto:${restaurant.email}`
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience authentic Vietnamese cuisine in a warm, welcoming atmosphere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Business Hours
              </h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {restaurant.hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className={`flex justify-between py-2 border-b border-gray-200 last:border-b-0 ${
                      !schedule.isOpen ? 'text-gray-400' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className={schedule.isOpen ? 'text-gray-600' : 'text-red-500 font-medium'}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(restaurant.address.full)}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <MapPinIcon className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Authentic Vietnamese Cuisine?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Order online for pickup or delivery, or visit us for a memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Order Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
