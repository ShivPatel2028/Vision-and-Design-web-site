import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutPreview from '@/components/home/AboutPreview';
import StatsCounter from '@/components/home/StatsCounter';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ClientLogos from '@/components/home/ClientLogos';
import GallerySection from '@/components/home/GallerySection';
import CTABanner from '@/components/home/CTABanner';
import FAQPreview from '@/components/home/FAQPreview';
import IndustriesSection from '@/components/home/IndustriesSection';

export const metadata: Metadata = {
  title: 'Vision And Design | Where Creativity Meets Innovation',
  description: 'Vision And Design is a premium creative agency specializing in branding, digital design, event management, fashion choreography, construction, and interior design.',
  keywords: ['creative agency', 'branding', 'digital design', 'event management', 'interior design', 'India'],
  openGraph: {
    title: 'Vision And Design | Where Creativity Meets Innovation',
    description: 'Premium creative agency crafting extraordinary brand experiences.',
    url: 'https://visionanddesign.in',
    images: [{ url: 'https://visionanddesign.in/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsCounter />
      <AboutPreview />
      <IndustriesSection />
      <PortfolioShowcase />
      <GallerySection />
      <ProcessTimeline />
      <ClientLogos />
      <FAQPreview />
      <CTABanner />
    </>
  );
}
