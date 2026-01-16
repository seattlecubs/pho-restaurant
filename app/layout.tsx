import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { restaurant } from '@/lib/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pho Kho Gia Lai - Authentic Vietnamese Cuisine | Libertyville, IL',
  description: restaurant.description,
  keywords: 'pho, vietnamese restaurant, libertyville, authentic vietnamese cuisine, pho kho gia lai, banh mi, spring rolls',
  openGraph: {
    title: 'Pho Kho Gia Lai - Authentic Vietnamese Cuisine',
    description: restaurant.description,
    type: 'website',
    locale: 'en_US',
  },
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  description: restaurant.description,
  image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=1200',
  address: {
    '@type': 'PostalAddress',
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    addressRegion: restaurant.address.state,
    postalCode: restaurant.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: restaurant.coordinates.lat,
    longitude: restaurant.coordinates.lng,
  },
  telephone: restaurant.phone,
  email: restaurant.email,
  url: 'https://phokhogialai.com',
  priceRange: restaurant.priceRange,
  servesCuisine: restaurant.cuisines,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: restaurant.rating,
    bestRating: '5',
    worstRating: '1',
    ratingCount: '200',
  },
  openingHoursSpecification: restaurant.hours
    .filter(h => h.isOpen)
    .map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '11:00',
      closes: '20:00',
    })),
  menu: 'https://phokhogialai.com/menu',
  acceptsReservations: 'false',
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Pho & Noodle Soups',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Rare Steak and Meatball Pho',
            description: 'Tender rare steak and homemade meatballs in aromatic beef broth',
            offers: {
              '@type': 'Offer',
              price: '14.99',
              priceCurrency: 'USD',
            },
          },
        ],
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
