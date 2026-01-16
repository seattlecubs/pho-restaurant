export const restaurant = {
  name: 'Pho Kho Gia Lai',
  tagline: 'Authentic Vietnamese Cuisine',
  description: 'Family-owned Vietnamese restaurant serving authentic pho, banh mi, and traditional dishes in Libertyville, IL.',

  // Contact
  address: {
    street: '328 Peterson Rd',
    city: 'Libertyville',
    state: 'IL',
    zip: '60048',
    full: '328 Peterson Rd, Libertyville, IL 60048',
  },
  phone: '(224) 206-8128',
  phoneLink: 'tel:+12242068128',
  email: 'info@phokhogialai.com',

  // Location
  coordinates: {
    lat: 42.2856,
    lng: -87.9531,
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Pho+Kho+Gia+Lai/@42.2856,-87.9531,17z',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.8!2d-87.9531!3d42.2856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9128acb3f73f%3A0x19b52eed7d9647b!2sPho%20Kho%20Gia%20Lai!5e0!3m2!1sen!2sus!4v1234567890',

  // Hours
  hours: [
    { day: 'Monday', hours: 'Closed', isOpen: false },
    { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', isOpen: true },
    { day: 'Thursday', hours: '11:00 AM - 8:00 PM', isOpen: true },
    { day: 'Friday', hours: '11:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', hours: '11:00 AM - 8:00 PM', isOpen: true },
    { day: 'Sunday', hours: '11:00 AM - 8:00 PM', isOpen: true },
  ],
  hoursShort: 'Tue-Sun 11AM-8PM',

  // Social & Links
  social: {
    yelp: 'https://www.yelp.com/biz/pho-kho-gia-lai-libertyville',
  },

  // Business Info
  rating: 4.8,
  priceRange: '$',
  cuisines: ['Vietnamese', 'Pho', 'Asian'],
}

export type Restaurant = typeof restaurant
