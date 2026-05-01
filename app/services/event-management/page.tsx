import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Calendar, Star, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Event Management Services',
  description: 'Luxury event management — corporate events, weddings, fashion shows, and exclusive gala experiences crafted to perfection.',
};

const packages = [
  { name: 'Essential', icon: Star, desc: 'Intimate gatherings and small corporate events.', features: ['Up to 100 guests', 'Venue coordination', 'Basic décor', 'Event timeline'] },
  { name: 'Signature', icon: Sparkles, desc: 'Our most popular mid-scale luxury package.', features: ['Up to 500 guests', 'Premium décor & florals', 'AV & lighting', 'Catering coordination'], featured: true },
  { name: 'Grand', icon: Calendar, desc: 'The ultimate luxury large-scale experience.', features: ['500+ guests', 'Full luxury production', 'Celebrity coordination', 'Multi-day management'] },
];

const eventTypes = [
  { title: 'Corporate Events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80', desc: 'Product launches to annual galas crafted to impress.' },
  { title: 'Luxury Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80', desc: 'Dream weddings with timeless elegance and precision.' },
  { title: 'Fashion Events', img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=700&q=80', desc: 'High-energy runway shows capturing the essence of style.' },
  { title: 'Private Parties', img: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=700&q=80', desc: 'Exclusive celebrations designed around your personal vision.' },
];

export default function EventManagementPage() {
  return (
    <div className="bg-[#070707] pt-20">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1800&q=80" alt="Event Management" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] to-[#070707]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Link href="/services" className="text-white/30 text-xs hover:text-[#C8A97E] transition-colors duration-200 mb-8 inline-block">← All Services</Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 mb-6">
              <Calendar className="w-3.5 h-3.5 text-[#EC4899]" />
              <span className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase">Event Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-6">
              Events That<br /><span className="text-gradient-gold">Create</span><br />Memories
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              We orchestrate extraordinary events with flawless execution and an unrelenting passion for perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Plan Your Event
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Manage" title="Event" titleHighlight="Categories" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((ev, i) => (
              <AnimatedSection key={ev.title} delay={i * 0.1}>
                <div className="group relative img-zoom rounded-2xl overflow-hidden aspect-video">
                  <Image src={ev.img} alt={ev.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white font-display font-bold text-2xl mb-2">{ev.title}</h3>
                    <p className="text-white/60 text-sm">{ev.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Pricing" title="Event" titleHighlight="Packages" />
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.12}>
                <div className={`relative glass-dark rounded-2xl p-8 border card-hover h-full ${pkg.featured ? 'border-[#C8A97E]/40 glow-gold-sm' : 'border-white/5'}`}>
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C8A97E] to-[#E8D5B7] text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <pkg.icon className={`w-8 h-8 mb-4 ${pkg.featured ? 'text-[#C8A97E]' : 'text-white/40'}`} />
                  <h3 className="text-white font-display font-bold text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-white/50 text-sm mb-6">{pkg.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${SITE_CONFIG.contact1.phone}`} className={`w-full py-3 rounded-full text-sm font-semibold text-center block transition-all duration-300 ${pkg.featured ? 'btn-gold' : 'btn-outline-gold'}`}>
                    Call to Inquire
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Let's Plan Your <span className="text-gradient-gold">Perfect Event</span></h2>
            <p className="text-white/50 mb-8">Reach out directly. We're ready to make it extraordinary.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {SITE_CONFIG.contact1.phone}
              </a>
              <a href={`tel:${SITE_CONFIG.contact2.phone}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {SITE_CONFIG.contact2.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
