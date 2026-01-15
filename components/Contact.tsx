'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Location',
      content: '328 Peterson Rd, Libertyville, IL 60048',
      link: 'https://maps.google.com/?q=328+Peterson+Rd,+Libertyville,+IL+60048'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '(224) 206-8128',
      link: 'tel:+12242068128'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      content: 'Tue-Sun: 11:00 AM - 8:00 PM',
      link: null
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'info@phokhogialai.com',
      link: 'mailto:info@phokhogialai.com'
    }
  ]

  const hours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 8:00 PM' }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
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
          {/* Contact Information */}
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

            {/* Hours */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Business Hours
              </h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {hours.map((schedule, index) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 h-full">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPinIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Us in Libertyville
                </h3>
                <p className="text-gray-600 mb-6">
                  Located in the heart of downtown Libertyville, 
                  we're easily accessible with plenty of parking available.
                </p>
                <button className="btn-primary">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
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
            <button className="btn-secondary">
              Make a Reservation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 