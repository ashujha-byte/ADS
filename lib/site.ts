export const WHATSAPP_NUMBER = '919572497103'
export const PHONE_DISPLAY = '+91 95724 97103'

export function whatsappLink(message: string) {
  return `https://wa.me/${9572497103}?text=${encodeURIComponent(message)}`
}

export const INQUIRY_LINK = 'https://wa.me/919572497103?text=Hi%20Nexus%2C%20I%20want%20to%20make%20an%20inquiry'
export const DISCUSS_LINK = whatsappLink("Hi Nexus, let's discuss a project.")

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
] as const

export const services = [
  {
    title: 'Full Stack Development',
    description: 'Production-grade web platforms with typed APIs, databases, auth and edge deployment.',
    tags: ['Next.js', 'Node', 'Postgres'],
  },
  {
    title: 'Frontend & Web Design',
    description: 'Editorial interfaces and design systems engineered for speed, clarity and conversion.',
    tags: ['UI/UX', 'Design Systems', 'Motion'],
  },
  {
    title: 'App & Custom Software',
    description: 'Cross-platform mobile apps, dashboards and internal tools tailored to your operations.',
    tags: ['iOS', 'Android', 'SaaS'],
  },
  {
    title: 'AI Agents & Automation',
    description: 'Custom AI agents, chat assistants and workflow automation that remove repetitive work.',
    tags: ['LLMs', 'Workflows', 'Integrations'],
  },
  {
    title: 'Branding, Logos & Social Growth',
    description: 'Identity systems, logo craft and content strategy that make your brand impossible to ignore.',
    tags: ['Identity', 'Logo', 'Social'],
  },
] as const

export type Project = {
  title: string
  category: string
  year: string
  image: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    title: 'Laksh-Empires',
    category: 'Luxury Real Estate.',
    year: '2026',
    image: '/laksh-empires.png',
    tags: ['html', 'java-script', 'Art Direction'],
    url: 'https://lakshempires.com/',
  },
  {
    title: 'Vantage Pay',
    category: 'Fintech Mobile App',
    year: '2025',
    image: '/work/vantage.png',
    tags: ['React Native', 'Product Design'],
    url: 'https://vercel.com',
  },
  {
    title: 'Sentinel AI',
    category: 'AI Automation Suite',
    year: '2026',
    image: '/work/sentinel.png',
    tags: ['AI Agents', 'Workflows'],
    url: 'https://vercel.com',
  },
  {
    title: 'Oriel Studio',
    category: 'Brand Identity',
    year: '2025',
    image: '/work/oriel.png',
    tags: ['Logo', 'Stationery', 'Guidelines'],
    url: 'https://vercel.com',
  },
  {
    title: 'Kesar Kitchen',
    category: 'Restaurant Website',
    year: '2025',
    image: '/work/kesar.png',
    tags: ['Web Design', 'Reservations'],
    url: 'https://vercel.com',
  },
  {
    title: 'Atlas Freight',
    category: 'Logistics Dashboard',
    year: '2024',
    image: '/work/atlas.png',
    tags: ['SaaS', 'Data Viz', 'Full Stack'],
    url: 'https://vercel.com',
  },
]

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Landing pages ship in 1–2 weeks, full websites in 3–5 weeks, and custom software or apps in 6–12 weeks depending on scope. You get a clear timeline before we start.',
  },
  {
    q: 'What does a project with Nexus cost?',
    a: 'Every project is scoped individually. After a short discovery call we send a fixed quote with milestones, so you always know what you are paying for.',
  },
  {
    q: 'Which technologies do you build with?',
    a: 'We work primarily with Next.js, React, TypeScript, Tailwind CSS, Node.js and Postgres, deployed on Vercel. For AI we integrate leading language models with custom tooling.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. We are based in New Delhi and collaborate with founders and teams worldwide across time zones, with async updates and weekly calls.',
  },
  {
    q: 'Will I own the code and design files?',
    a: 'Absolutely. On final payment you receive full ownership of source code, design files and brand assets, plus documentation for your team.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Every project includes 30 days of post-launch support. Ongoing maintenance, growth and optimisation retainers are available after that.',
  },
] as const

export type Book = {
  id: string
  title: string
  subtitle: string
  category: 'Engineering' | 'Design' | 'Automation' | 'Growth'
  pages: number
  price: string
  cover: string
}

export const books: Book[] = [
  {
    id: 'velvet-stack',
    title: 'The Velvet Stack',
    subtitle: 'A field guide to shipping premium Next.js products.',
    category: 'Engineering',
    pages: 184,
    price: '₹1,499',
    cover: '/store/book-1.png',
  },
  {
    id: 'quiet-systems',
    title: 'Quiet Systems',
    subtitle: 'Building design systems that scale without noise.',
    category: 'Design',
    pages: 142,
    price: '₹1,299',
    cover: '/store/book-2.png',
  },
  {
    id: 'agent-playbook',
    title: 'The Agent Playbook',
    subtitle: 'Designing AI agents that actually do the work.',
    category: 'Automation',
    pages: 126,
    price: '₹1,799',
    cover: '/store/book-3.png',
  },
  {
    id: 'brand-signal',
    title: 'Brand Signal',
    subtitle: 'Identity, logo craft and social growth in one method.',
    category: 'Growth',
    pages: 98,
    price: '₹999',
    cover: '/store/book-4.png',
  },
  {
    id: 'automate-everything',
    title: 'Automate Everything',
    subtitle: 'No-fluff workflows to reclaim 20 hours a week.',
    category: 'Automation',
    pages: 88,
    price: '₹899',
    cover: '/store/book-5.png',
  },
  {
    id: 'editorial-interface',
    title: 'The Editorial Interface',
    subtitle: 'Typography, rhythm and restraint for the modern web.',
    category: 'Design',
    pages: 160,
    price: '₹1,399',
    cover: '/store/book-6.png',
  },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/nexusstudios.in?rpxt=MXY0Njh4N2RnaDRkbA==' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashu-kumar-jha-509589236' },
  { label: 'X / Twitter', href: 'https://x.com' },
  { label: 'GitHub', href: 'https://github.com/ashujha-byte' },
] as const
