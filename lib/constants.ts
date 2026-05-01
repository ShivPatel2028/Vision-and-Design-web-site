import { Service, Testimonial, PortfolioItem, BlogPost, TeamMember, FAQ, StatItem, Industry } from '@/types';

export const SITE_CONFIG = {
  name: 'Vision And Design',
  tagline: 'Where Creativity Meets Innovation',
  description: 'Vision And Design is a forward-thinking creative agency passionate about crafting innovative solutions that elevate brands and experiences.',
  email: 'vision.design2608@gmail.com',
  phone1: '+91 63545 13940',
  phone2: '+91 70160 81776',
  contact1: { name: 'Dhwani Pandya', phone: '+91 63545 13940' },
  contact2: { name: 'Vraj Pandya', phone: '+91 70160 81776' },
  whatsapp: '916354513940',
  url: 'https://visionanddesign.in',
  social: {
    instagram: 'https://instagram.com/visionanddesign',
    linkedin: 'https://linkedin.com/company/visionanddesign',
    twitter: 'https://twitter.com/visionanddesign',
    facebook: 'https://facebook.com/visionanddesign',
  },
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Branding & Identity',
    slug: 'branding-identity',
    shortDescription: 'Craft distinctive brand identities that resonate with your audience.',
    description: 'We create powerful brand identities that tell your story with authenticity. From logos to comprehensive brand systems, we build brands that stand the test of time.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    features: ['Logo Design', 'Brand Guidelines', 'Identity Systems', 'Brand Strategy'],
    color: '#C8A97E',
  },
  {
    id: '2',
    title: 'Digital Design',
    slug: 'digital-design',
    shortDescription: 'Stunning digital experiences for web, mobile and social media.',
    description: 'We design immersive digital experiences that captivate users. From UI/UX to social media creatives, our digital designs drive engagement and conversions.',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    features: ['Website Design', 'UI/UX Design', 'Social Media Creatives', 'Mobile App Design'],
    color: '#6366F1',
  },
  {
    id: '3',
    title: 'Event Management',
    slug: 'event-management',
    shortDescription: 'Unforgettable events crafted with precision and elegance.',
    description: 'From corporate events to luxury weddings, we orchestrate experiences that leave lasting impressions. Our team handles every detail with flawless execution.',
    icon: 'Calendar',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    features: ['Corporate Events', 'Weddings', 'Luxury Events', 'Fashion Events'],
    color: '#EC4899',
  },
  {
    id: '4',
    title: 'Fashion Choreography',
    slug: 'fashion-choreography',
    shortDescription: 'Runway perfection through expert choreography and coordination.',
    description: 'We bring fashion shows to life with expert choreography, model management and runway coordination. Every show becomes a masterpiece of style and elegance.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80',
    features: ['Runway Coordination', 'Event Choreography', 'Model Management', 'Fashion Show Planning'],
    color: '#F59E0B',
  },
  {
    id: '5',
    title: 'Construction',
    slug: 'construction',
    shortDescription: 'Building dreams into reality with quality construction services.',
    description: 'From residential to commercial projects, we deliver construction excellence with attention to quality, safety and timely delivery at every stage.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: ['Civil Work', 'Architecture Support', 'Commercial Construction', 'Residential Projects'],
    color: '#10B981',
  },
  {
    id: '6',
    title: 'Interior Design',
    slug: 'interior-design',
    shortDescription: 'Transform spaces into extraordinary living and working environments.',
    description: 'We craft bespoke interior environments that blend aesthetics with functionality. From space planning to luxury concepts, we create spaces that inspire.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    features: ['Space Planning', 'Modern Interiors', 'Luxury Room Concepts', 'Commercial Interiors'],
    color: '#8B5CF6',
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const STATS: StatItem[] = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Luxe Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    description: 'Complete brand identity for a luxury fashion house.',
    tags: ['Branding', 'Identity', 'Logo'],
  },
  {
    id: '2',
    title: 'E-Commerce Platform UI',
    category: 'Digital Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    description: 'Modern e-commerce UI design with seamless UX.',
    tags: ['UI/UX', 'Web Design', 'Digital'],
  },
  {
    id: '3',
    title: 'Gala Corporate Event',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Premium corporate gala for 500+ attendees.',
    tags: ['Events', 'Corporate', 'Management'],
  },
  {
    id: '4',
    title: 'Fashion Week Runway',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80',
    description: 'Full runway choreography for fashion week showcase.',
    tags: ['Fashion', 'Choreography', 'Runway'],
  },
  {
    id: '5',
    title: 'Luxury Villa Interior',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    description: 'Complete interior design for a luxury 5BHK villa.',
    tags: ['Interior', 'Luxury', 'Residential'],
  },
  {
    id: '6',
    title: 'Commercial Tower',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description: 'Commercial office tower construction project.',
    tags: ['Construction', 'Commercial', 'Architecture'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Brand Identity in 2025',
    slug: 'future-brand-identity-2025',
    excerpt: 'Explore how AI and minimalism are reshaping brand identities in the modern era.',
    content: '',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    category: 'Branding',
    author: 'Dhwani Pandya',
    date: '2025-01-15',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: '10 UI Design Trends Dominating 2025',
    slug: 'ui-design-trends-2025',
    excerpt: 'From glassmorphism to bento grids, here are the trends shaping digital design.',
    content: '',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    category: 'Digital Design',
    author: 'Vraj Pandya',
    date: '2025-02-10',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'How to Plan a Luxury Corporate Event',
    slug: 'plan-luxury-corporate-event',
    excerpt: 'A step-by-step guide to orchestrating unforgettable corporate experiences.',
    content: '',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    category: 'Events',
    author: 'Dhwani Pandya',
    date: '2025-03-05',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Interior Design Trends: Luxury Minimalism',
    slug: 'interior-design-luxury-minimalism',
    excerpt: 'How less is more when it comes to creating opulent interior spaces.',
    content: '',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    category: 'Interior Design',
    author: 'Vraj Pandya',
    date: '2025-03-20',
    readTime: '4 min read',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dhwani Pandya',
    role: 'Co-Founder & Creative Director',
    bio: 'With a passion for visual storytelling and brand strategy, Dhwani leads Vision And Design with an unwavering commitment to creative excellence.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&q=80',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: '2',
    name: 'Vraj Pandya',
    role: 'Co-Founder & Strategy Director',
    bio: 'Vraj brings a unique blend of business acumen and creative vision to every project, ensuring each client receives tailored solutions that drive real results.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What services does Vision And Design offer?',
    answer: 'We offer a comprehensive range of creative services including Branding & Identity, Digital Design, Event Management, Fashion Choreography, Construction, and Interior Design.',
    category: 'General',
  },
  {
    question: 'How long does a typical branding project take?',
    answer: 'A full branding project typically takes 4-8 weeks, depending on scope. This includes discovery, concept development, refinement, and final delivery.',
    category: 'Branding',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients across India and internationally. Our team is equipped to handle remote collaborations with seamless communication.',
    category: 'General',
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes: Discovery & Research, Strategy & Concept, Design & Development, Review & Refinement, and Final Delivery. We keep clients involved at every stage.',
    category: 'Process',
  },
  {
    question: 'Can you handle both small and large-scale events?',
    answer: 'Absolutely! We manage events of all scales — from intimate private gatherings to grand corporate events with 1000+ attendees.',
    category: 'Events',
  },
  {
    question: 'Do you offer package deals for multiple services?',
    answer: 'Yes, we offer customized packages for clients who need multiple services. Contact us to discuss a tailored solution for your needs.',
    category: 'Pricing',
  },
];

export const INDUSTRIES = [
  {
    id: 'fashion',
    name: 'Fashion & Lifestyle',
    description: 'Elevating fashion brands with runway expertise, editorial design, and immersive brand experiences.',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80',
    services: ['Fashion Choreography', 'Branding', 'Event Management', 'Digital Design'],
  },
  {
    id: 'corporate',
    name: 'Corporate & Business',
    description: 'Powering corporate brands with strategic identity, professional events, and digital transformation.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    services: ['Branding', 'Event Management', 'Digital Design', 'Interior Design'],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    description: 'Crafting retail experiences that convert — from store interiors to digital storefronts.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    services: ['Interior Design', 'Digital Design', 'Branding', 'Construction'],
  },
  {
    id: 'technology',
    name: 'Technology & Startups',
    description: 'Helping tech brands stand out with bold visual identity and cutting-edge digital design.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    services: ['Digital Design', 'Branding', 'UI/UX'],
  },
];

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Branding & Identity', href: '/services/branding-identity' },
      { label: 'Digital Design', href: '/services/digital-design' },
      { label: 'Event Management', href: '/services/event-management' },
      { label: 'Fashion Choreography', href: '/services/fashion-choreography' },
      { label: 'Construction', href: '/services/construction' },
      { label: 'Interior Design', href: '/services/interior-design' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
