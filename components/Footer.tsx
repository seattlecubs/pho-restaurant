'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pho Kho Gia Lai</h3>
                  <p className="text-sm text-gray-400">Authentic Vietnamese Cuisine</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience the authentic flavors of Vietnam in the heart of Libertyville. 
                Our family recipes and warm hospitality create a dining experience you'll never forget.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>328 Peterson Rd, Libertyville, IL 60048</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>(224) 206-8128</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>Tue-Sun: 11:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Order Online
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">Dine-in</li>
                <li className="text-gray-300">Takeout</li>
                <li className="text-gray-300">Delivery</li>
                <li className="text-gray-300">Catering</li>
                <li className="text-gray-300">Private Events</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Pho Kho Gia Lai. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 