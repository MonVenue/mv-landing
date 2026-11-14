// Landing page content. Edit copy and links here.

// Replace with the real store URLs once the app is published.
export const storeLinks = {
  appStore: '#download',
  googlePlay: '#download',
}

export const navLinks = [
  { label: 'Why MonVenue', href: '#why' },
  { label: 'How it works', href: '#how' },
  { label: 'For venue owners', href: '#owners' },
]

// Each occasion is drawn as a scene in VenueScene.vue, keyed by id.
export const categories = [
  { id: 'weddings', name: 'Weddings', sub: 'Halls & gardens' },
  { id: 'rooftops', name: 'Rooftops', sub: 'Views & sunsets' },
  { id: 'restaurants', name: 'Restaurants', sub: 'Private dining' },
  { id: 'celebrations', name: 'Celebrations', sub: 'Birthdays & more' },
  { id: 'corporate', name: 'Corporate', sub: 'Meetings & offsites' },
  { id: 'sports', name: 'Sports', sub: 'Courts & pitches' },
]

export const steps = [
  {
    icon: 'download',
    title: 'Get the app',
    body: 'Free on iOS and Android. Create an account with your phone number in under a minute.',
  },
  {
    icon: 'search',
    title: 'Find your space',
    body: 'Browse by occasion, location, capacity and date. Real photos, clear pricing, live availability.',
  },
  {
    icon: 'shield',
    title: 'Book and pay securely',
    body: 'Book instantly or send a request. Pay in the app, with your payment protected until the venue confirms.',
  },
]

export const trustItems = [
  {
    icon: 'shield',
    title: 'Verified listings',
    body: 'Every venue is reviewed before it goes live. What you see is what you book.',
  },
  {
    icon: 'card',
    title: 'Protected payments',
    body: 'Pay in the app. Funds are released to the venue only once your booking is confirmed.',
  },
  {
    icon: 'chat',
    title: 'Clear terms',
    body: 'Pricing, capacity and cancellation policy are shown up front on every listing.',
  },
  {
    icon: 'headset',
    title: 'Real support',
    body: 'A team in Lebanon that answers in Arabic, English or French when plans change.',
  },
]

export const ownerStats = [
  { value: '0%', label: 'commission on your first bookings' },
  { value: '0', label: 'subscription or listing fees, ever' },
]

export const footerLinks = [
  { label: 'About', href: '#top' },
  { label: 'Contact', href: '#top' },
  { label: 'Terms', href: '#top' },
  { label: 'Privacy', href: '#top' },
]
