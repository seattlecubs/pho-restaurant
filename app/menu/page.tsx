import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuItem from '@/components/MenuItem'
import AnimatedSection from '@/components/AnimatedSection'
import { getMenuData } from '@/lib/menu'

export const metadata: Metadata = {
  title: 'Menu | Pho Kho Gia Lai - Authentic Vietnamese Cuisine',
  description: 'View our full menu of authentic Vietnamese dishes including pho, banh mi, rice dishes, and more.',
}

export const revalidate = 300

export default async function MenuPage() {
  const menuData = await getMenuData()

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic Vietnamese dishes made with fresh ingredients and traditional family recipes.
            </p>
          </AnimatedSection>

          {menuData.categories.map((category) => (
            <section key={category.id} className="mb-16">
              <AnimatedSection className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.name}
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
