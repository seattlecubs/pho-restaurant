import { MenuItem, MenuCategory, MenuData } from './types'

// Replace these with your actual Google Sheet published CSV URLs
// To get these URLs: File > Share > Publish to web > Select tab > CSV > Publish
const MENU_SHEET_URL = process.env.NEXT_PUBLIC_MENU_SHEET_URL || ''
const CATEGORIES_SHEET_URL = process.env.NEXT_PUBLIC_CATEGORIES_SHEET_URL || ''

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split('\n')
  if (lines.length === 0) return []

  // Parse header row, handling quoted values
  const headers = parseCSVLine(lines[0]).map(h =>
    h.trim().toLowerCase().replace(/\s+/g, '_')
  )

  return lines.slice(1).map(line => {
    const values = parseCSVLine(line)
    const row: Record<string, string> = {}
    headers.forEach((header, i) => {
      row[header] = values[i]?.trim() || ''
    })
    return row
  })
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)

  return result
}

export async function getMenuData(): Promise<MenuData> {
  // If no URLs configured, return fallback data
  if (!MENU_SHEET_URL || !CATEGORIES_SHEET_URL) {
    return getFallbackMenuData()
  }

  try {
    const [menuResponse, categoriesResponse] = await Promise.all([
      fetch(MENU_SHEET_URL, { next: { revalidate: 300 } }),
      fetch(CATEGORIES_SHEET_URL, { next: { revalidate: 300 } })
    ])

    if (!menuResponse.ok || !categoriesResponse.ok) {
      console.error('Failed to fetch menu data from Google Sheets')
      return getFallbackMenuData()
    }

    const menuCSV = await menuResponse.text()
    const categoriesCSV = await categoriesResponse.text()

    const menuRows = parseCSV(menuCSV)
    const categoryRows = parseCSV(categoriesCSV)

    const menuItems: MenuItem[] = menuRows
      .filter(row => row.is_available?.toLowerCase() === 'true')
      .map(row => ({
        id: row.id || String(Math.random()),
        name: row.name || '',
        vietnameseName: row.vietnamese_name || row.name || '',
        description: row.description || '',
        price: parseFloat(row.price) || 0,
        category: row.category?.toLowerCase() || 'other',
        imageEmoji: row.image_emoji || '🍽️',
        imageUrl: row.image_url || undefined,
        isAvailable: true,
        isPopular: row.is_popular?.toLowerCase() === 'true'
      }))

    const categories: MenuCategory[] = categoryRows
      .sort((a, b) => parseInt(a.display_order) - parseInt(b.display_order))
      .map(row => ({
        id: row.id || '',
        name: row.name || '',
        displayOrder: parseInt(row.display_order) || 0,
        items: menuItems.filter(item => item.category === row.id)
      }))
      .filter(cat => cat.items.length > 0)

    return {
      categories,
      lastUpdated: new Date().toISOString()
    }
  } catch (error) {
    console.error('Failed to fetch menu data:', error)
    return getFallbackMenuData()
  }
}

function getFallbackMenuData(): MenuData {
  const fallbackItems: MenuItem[] = [
    {
      id: '1',
      name: 'Rare Steak and Meatball Pho',
      vietnameseName: 'Phở Tái Bò Viên',
      description: 'Our signature pho with tender rare steak and homemade meatballs in aromatic beef broth simmered for 12 hours.',
      price: 14.99,
      category: 'pho',
      imageEmoji: '🍜',
      imageUrl: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=600&h=400&fit=crop',
      isAvailable: true,
      isPopular: true
    },
    {
      id: '2',
      name: 'Spicy Hue Style Soup',
      vietnameseName: 'Bún Bò Huế',
      description: 'Traditional spicy beef noodle soup with lemongrass, shrimp paste, and thick rice noodles from Central Vietnam.',
      price: 15.99,
      category: 'pho',
      imageEmoji: '🍲',
      imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop',
      isAvailable: true,
      isPopular: true
    },
    {
      id: '3',
      name: 'Shrimp Spring Rolls',
      vietnameseName: 'Gỏi Cuốn Tôm',
      description: 'Fresh shrimp, pork, vermicelli, and herbs wrapped in rice paper. Served with peanut sauce (2 pcs).',
      price: 6.99,
      category: 'appetizers',
      imageEmoji: '🥬',
      imageUrl: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&h=400&fit=crop',
      isAvailable: true
    },
    {
      id: '4',
      name: 'Crispy Fried Eggrolls',
      vietnameseName: 'Chả Giò',
      description: 'Golden fried eggrolls stuffed with pork, vegetables, and glass noodles. Served with fish sauce (3 pcs).',
      price: 7.99,
      category: 'appetizers',
      imageEmoji: '🥟',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      isAvailable: true
    },
    {
      id: '5',
      name: 'Vietnamese Crispy Pancake',
      vietnameseName: 'Bánh Xèo',
      description: 'Crispy turmeric crepe filled with shrimp, pork, and bean sprouts. Served with fresh herbs and dipping sauce.',
      price: 13.99,
      category: 'specialties',
      imageEmoji: '🥞',
      imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop',
      isAvailable: true,
      isPopular: true
    },
    {
      id: '6',
      name: 'Vermicelli with Grilled Beef',
      vietnameseName: 'Bún Bò Nướng',
      description: 'Rice vermicelli bowl topped with marinated grilled beef, fresh vegetables, herbs, and fish sauce.',
      price: 14.99,
      category: 'vermicelli',
      imageEmoji: '🥗',
      imageUrl: 'https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=600&h=400&fit=crop',
      isAvailable: true
    },
    {
      id: '7',
      name: 'Seafood Crispy Egg Noodle',
      vietnameseName: 'Mì Xào Giòn Hải Sản',
      description: 'Crispy egg noodles topped with shrimp, squid, and vegetables in savory sauce.',
      price: 16.99,
      category: 'noodles',
      imageEmoji: '🍝',
      imageUrl: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=600&h=400&fit=crop',
      isAvailable: true
    },
    {
      id: '8',
      name: 'Stir Fried Squid',
      vietnameseName: 'Mực Xào',
      description: 'Tender squid stir-fried with vegetables in a savory garlic sauce.',
      price: 15.99,
      category: 'specialties',
      imageEmoji: '🦑',
      imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop',
      isAvailable: true
    }
  ]

  const categories: MenuCategory[] = [
    {
      id: 'pho',
      name: 'Pho & Noodle Soups',
      displayOrder: 1,
      items: fallbackItems.filter(item => item.category === 'pho')
    },
    {
      id: 'appetizers',
      name: 'Appetizers',
      displayOrder: 2,
      items: fallbackItems.filter(item => item.category === 'appetizers')
    },
    {
      id: 'vermicelli',
      name: 'Vermicelli Bowls',
      displayOrder: 3,
      items: fallbackItems.filter(item => item.category === 'vermicelli')
    },
    {
      id: 'noodles',
      name: 'Stir-Fried Noodles',
      displayOrder: 4,
      items: fallbackItems.filter(item => item.category === 'noodles')
    },
    {
      id: 'specialties',
      name: 'House Specialties',
      displayOrder: 5,
      items: fallbackItems.filter(item => item.category === 'specialties')
    }
  ].filter(cat => cat.items.length > 0)

  return {
    categories,
    lastUpdated: new Date().toISOString()
  }
}

export function getAllMenuItems(menuData: MenuData): MenuItem[] {
  return menuData.categories.flatMap(cat => cat.items)
}

export function getPopularItems(menuData: MenuData, limit: number = 6): MenuItem[] {
  const allItems = getAllMenuItems(menuData)
  const popular = allItems.filter(item => item.isPopular)

  if (popular.length >= limit) {
    return popular.slice(0, limit)
  }

  // Fill with non-popular items if not enough popular ones
  const remaining = allItems.filter(item => !item.isPopular)
  return [...popular, ...remaining].slice(0, limit)
}
