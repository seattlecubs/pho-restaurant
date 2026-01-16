'use client'

import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { restaurant } from '@/lib/config'

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
                  <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  <p className="text-sm text-gray-400">{restaurant.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {restaurant.description}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <a
                  href={restaurant.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                >
                  <MapPinIcon className="w-4 h-4" />
                  <span>{restaurant.address.full}</span>
                </a>
                <a
                  href={restaurant.phoneLink}
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>{restaurant.phone}</span>
                </a>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{restaurant.hoursShort}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                {restaurant.social.yelp && (
                  <li>
                    <a
                      href={restaurant.social.yelp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      Yelp Reviews
                    </a>
                  </li>
                )}
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
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} {restaurant.name}. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
