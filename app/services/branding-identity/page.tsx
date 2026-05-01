import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Branding & Identity Services',
  description: 'Professional branding and identity services — logos, brand guidelines, identity systems, and brand strategy that make your business unforgettable.',
};

const palette = ['#1A1A2E', '#C8A97E', '#E8D5B7', '#0F3460', '#533483'];
const process = [
  { step: '01', title: 'Brand Discovery', desc: 'Deep research into your market, competitors, and target audience.' },
  { step: '02', title: 'Strategy', desc: 'Define brand positioning, personality, tone of voice, and messaging.' },
  { step: '03', title: 'Visual Identity', desc: 'Create logo, typography, colors, and visual design system.' },
  { step: '04', title: 'Guidelines', desc: 'Comprehensive brand guidelines for consistent application.' },
  { step: '05', title: 'Launch', desc: 'Roll out your new brand with confidence across all touchpoints.' },
];
const faqs = [
  { q: 'How long does a branding project take?', a: 'A complete branding project typically takes 4-8 weeks depending on scope — from discovery to final brand guidelines delivery.' },
  { q: 'What is included in brand guidelines?', a: 'Logo usage rules, color palette, typography system, imagery style, brand voice, and do\'s and don\'ts for consistent brand application.' },
  { q: 'Can you redesign an existing brand?', a: 'Absolutely. We handle both brand creation and rebranding projects with the same strategic and creative rigor.' },
  { q: 'Do you provide logo files in all formats?', a: 'Yes — we deliver SVG, PNG, PDF, and EPS formats optimized for print and digital use.' },
];

export default function BrandingIdentityPage() {
  return (
    <div className="bg-[#0D0D0D] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1600&q=80" alt="Branding" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#0D0D0D]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#C8A97E]/60 text-xs mb-8 hover:text-[#C8A97E] transition-colors duration-200">
              ← Back to Services
            </Link>
            <span className="text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase block mb-4">Branding & Identity</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Build a Brand That <span className="text-gradient-gold">Stands the Test of Time</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              We craft distinctive, strategic brand identities that resonate deeply with your audience and communicate your unique value in a crowded market.
            </p>
            <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2 group">
              <Phone className="w-4 h-4" /> Call to Discuss Your Brand
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Offer" title="Branding" titleHighlight="Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Logo Design', desc: 'Iconic, memorable logos that capture your brand essence and work perfectly across every medium.', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80' },
              { title: 'Brand Guidelines', desc: 'Comprehensive documentation ensuring consistent, powerful brand application across all touchpoints.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
              { title: 'Identity Systems', desc: 'Cohesive visual systems — typography, colors, patterns — that create an unmistakable brand presence.', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80' },
              { title: 'Brand Strategy', desc: 'Strategic brand positioning, messaging frameworks, and audience targeting to drive business growth.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-[#C8A97E]/20 card-hover h-full">
                  <div className="img-zoom aspect-video relative">
                    <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Color palette showcase */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-[#C8A97E] text-xs tracking-[0.25em] uppercase font-semibold block mb-4">Color Systems</span>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Color Palettes That <span className="text-gradient-gold">Speak Volumes</span></h2>
              <p className="text-white/60 leading-relaxed mb-8">Every color in your brand palette is chosen with intention. We use color psychology and market research to build palettes that evoke exactly the right emotions in your audience.</p>
              <div className="flex gap-3">
                {palette.map((color) => (
                  <div key={color} className="group flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: color }} />
                    <span className="text-white/30 text-[10px] font-mono">{color}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-video">
                <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" alt="Brand color palette" fill className="object-cover" sizes="50vw" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case Studies" title="Brand" titleHighlight="Transformations" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { client: 'Luxe Retail Group', result: 'Brand awareness up 280%', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', desc: 'A complete rebrand transforming a regional retailer into a premium lifestyle destination.' },
              { client: 'Fashion Forward', result: '3× social engagement', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', desc: 'New brand identity that captured the essence of modern luxury fashion and drove massive growth.' },
            ].map((cs, i) => (
              <AnimatedSection key={cs.client} delay={i * 0.1}>
                <div className="group glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-[#C8A97E]/20 card-hover">
                  <div className="img-zoom aspect-video relative">
                    <Image src={cs.img} alt={cs.client} fill className="object-cover" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full">
                      <span className="text-[#C8A97E] text-xs font-semibold">{cs.result}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-display font-bold text-xl mb-2">{cs.client}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{cs.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="Branding" titleHighlight="Process" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full glass-dark border border-[#C8A97E]/20 flex items-center justify-center mx-auto mb-4 group-hover:border-[#C8A97E]/50 transition-all duration-300">
                    <span className="text-[#C8A97E] font-display font-bold">{p.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title="Branding" titleHighlight="Questions" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-dark rounded-2xl p-6 border border-white/5">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Build Your <span className="text-gradient-gold">Brand?</span></h2>
            <p className="text-white/60 mb-10">Let's start with a conversation. Reach out directly and we'll get back to you promptly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {SITE_CONFIG.contact1.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
