import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Building2, Shield, Award, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Construction Services',
  description: 'Premium construction services — civil work, architecture support, commercial construction, and residential projects delivered with excellence.',
};

const services = [
  { icon: Building2, title: 'Civil Work', desc: 'Structural excellence in every foundation, beam, and wall — built to last generations.' },
  { icon: Award, title: 'Architecture Support', desc: 'Collaborative architectural planning and support that brings visionary designs to life.' },
  { icon: Shield, title: 'Commercial Construction', desc: 'Office towers, retail spaces, and commercial hubs built with precision and quality.' },
  { icon: Clock, title: 'Residential Projects', desc: 'Dream homes and luxury residences crafted with care, quality, and attention to detail.' },
];

export default function ConstructionPage() {
  return (
    <div className="bg-[#FDFBF7] pt-20">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80" alt="Construction" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16161a] to-[#16161a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Link href="/services" className="text-black/30 text-xs hover:text-[#C8A97E] transition-colors duration-200 mb-8 inline-block">← All Services</Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
              <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase">Construction</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] leading-[0.9] mb-6">
              Building<br /><span className="text-gradient-gold">Dreams</span><br />Into Reality
            </h1>
            <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-md">
              From concept to completion, we deliver construction excellence with uncompromising quality, structural integrity, and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Discuss Your Project
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                💬 WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Build" title="Construction" titleHighlight="Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group glass rounded-2xl p-7 border border-black/5 hover:border-[#10B981]/20 card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <h3 className="text-[#1A1A1A] font-display font-bold text-lg mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">{s.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Projects" title="Construction" titleHighlight="Portfolio" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80', alt: 'Commercial building', span: 'col-span-2 row-span-2' },
              { img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80', alt: 'Construction site' },
              { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', alt: 'Architecture' },
              { img: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=700&q=80', alt: 'Residential', span: 'col-span-2' },
            ].map((item, i) => (
              <div key={i} className={`${item.span || ''} img-zoom rounded-2xl overflow-hidden relative aspect-video`}>
                <Image src={item.img} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-[#10B981] text-xs tracking-[0.25em] uppercase font-semibold block mb-4">Quality & Safety</span>
              <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-6">Built With <span className="text-gradient-gold">Integrity</span> & Excellence</h2>
              <p className="text-black/60 leading-relaxed mb-8">
                Every construction project we undertake is backed by rigorous quality control, certified materials, experienced engineers, and an unwavering commitment to safety and timely delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['25+', 'Projects Built'], ['100%', 'On Schedule'], ['0', 'Safety Incidents'], ['5★', 'Client Rating']].map(([val, lbl]) => (
                  <div key={lbl} className="glass rounded-xl p-5 border border-black/5 hover:border-[#10B981]/20 transition-colors duration-300">
                    <div className="text-2xl font-display font-bold text-gradient-gold mb-1">{val}</div>
                    <div className="text-black/40 text-xs">{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
                <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80" alt="Construction quality" fill className="object-cover" sizes="50vw" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-4">Start Your <span className="text-gradient-gold">Construction Project</span></h2>
            <p className="text-black/50 mb-8">Call us today for a free consultation and project assessment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={`tel:${SITE_CONFIG.contact2.phone}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Vraj Pandya
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
