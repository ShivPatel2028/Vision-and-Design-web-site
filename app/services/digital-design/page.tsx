import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Monitor, Smartphone, Share2, Layout } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Digital Design Services',
  description: 'World-class digital design services — website design, UI/UX, mobile apps, and social media creatives that captivate and convert.',
};

const offerings = [
  { icon: Monitor, title: 'Website Design', desc: 'Pixel-perfect, high-converting website designs built for performance and user delight.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80', color: '#6366F1' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Intuitive user interfaces and seamless experiences rooted in data and design thinking.', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80', color: '#8B5CF6' },
  { icon: Share2, title: 'Social Media Creatives', desc: 'Scroll-stopping visuals and campaigns that build brand presence across all platforms.', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80', color: '#EC4899' },
  { icon: Smartphone, title: 'Mobile App Design', desc: 'Beautiful, functional mobile app interfaces for iOS and Android that users love.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', color: '#14B8A6' },
];

const faqs = [
  { q: 'What design tools do you use?', a: 'We work with Figma, Adobe XD, Photoshop, and Illustrator to deliver industry-standard design files ready for development.' },
  { q: 'Do you provide design files for developers?', a: 'Yes. We deliver fully annotated Figma files with component libraries, design tokens, and developer handoff notes.' },
  { q: 'Can you redesign an existing website?', a: 'Absolutely. We specialize in both new designs and redesigns, bringing fresh perspectives while honoring your brand identity.' },
  { q: 'How long does a website design project take?', a: 'A typical website design project takes 3-6 weeks depending on complexity, number of pages, and feedback cycles.' },
];

export default function DigitalDesignPage() {
  return (
    <div className="bg-[#FDFBF7] pt-20">
      {/* Cinematic Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1800&q=80" alt="Digital Design" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16161a] via-[#16161a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-[#16161a]/40" />
        </div>
        {/* Floating UI mockup element */}
        <div className="absolute top-1/4 right-[5%] hidden lg:block z-10">
          <AnimatedSection direction="right">
            <div className="glass rounded-2xl p-4 w-64 border border-[#6366F1]/30 animate-floating">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 h-4 rounded bg-white/10 ml-2" />
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-gradient-to-br from-[#6366F1]/30 to-[#8B5CF6]/20" />
                <div className="h-3 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/5" />
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Link href="/services" className="text-black/30 text-xs hover:text-[#C8A97E] transition-colors duration-200 mb-8 inline-block">← All Services</Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-gold rounded-full mb-6">
              <Monitor className="w-3.5 h-3.5 text-[#6366F1]" />
              <span className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase">Digital Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] leading-[0.9] mb-6">
              Designs That <br /><span className="text-gradient-gold">Captivate</span> <br />& Convert
            </h1>
            <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-lg">
              We create immersive digital experiences that not only look stunning but drive real business results through thoughtful UX and strategic design.
            </p>
            <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Discuss Your Project
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Create" title="Digital Design" titleHighlight="Expertise" />
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group glass rounded-2xl overflow-hidden border border-black/5 hover:border-white/15 card-hover flex flex-col sm:flex-row">
                  <div className="img-zoom w-full sm:w-48 aspect-video sm:aspect-auto relative shrink-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 200px" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${item.color}30, transparent)` }} />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}>
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-[#1A1A1A] font-display font-bold text-lg mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">{item.title}</h3>
                    <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bento showcase */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Work" title="Design" titleHighlight="Showcase" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {[
              { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', alt: 'UI Design', className: 'col-span-2' },
              { img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80', alt: 'Mobile App', className: 'row-span-2' },
              { img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', alt: 'Social Media' },
              { img: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&q=80', alt: 'Web Design' },
            ].map((item, i) => (
              <div key={i} className={`${item.className} img-zoom rounded-2xl overflow-hidden relative`}>
                <Image src={item.img} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title="Digital Design" titleHighlight="Questions" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 border border-black/5 hover:border-[#6366F1]/20 transition-colors duration-300">
                  <h3 className="text-[#1A1A1A] font-semibold mb-2">{faq.q}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-4">Ready for <span className="text-gradient-gold">World-Class Design?</span></h2>
            <p className="text-black/50 mb-8">Let's talk about your digital project. We're one call away.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Dhwani: {SITE_CONFIG.contact1.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
