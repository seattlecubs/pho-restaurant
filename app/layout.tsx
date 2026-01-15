import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pho Kho Gia Lai - Authentic Vietnamese Cuisine | Libertyville, IL',
  description: 'Experience authentic Vietnamese pho and traditional dishes at Pho Kho Gia Lai in Libertyville, IL. Fresh ingredients, family recipes, and warm hospitality.',
  keywords: 'pho, vietnamese restaurant, libertyville, authentic vietnamese cuisine, pho kho gia lai',
  openGraph: {
    title: 'Pho Kho Gia Lai - Authentic Vietnamese Cuisine',
    description: 'Experience authentic Vietnamese pho and traditional dishes in Libertyville, IL',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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