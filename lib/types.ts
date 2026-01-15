export interface MenuItem {
  id: string
  name: string
  vietnameseName: string
  description: string
  price: number
  category: string
  imageEmoji: string
  isAvailable: boolean
  isPopular?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  displayOrder: number
  items: MenuItem[]
}

export interface MenuData {
  categories: MenuCategory[]
  lastUpdated: string
}
