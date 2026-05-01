import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Palette, Monitor, Calendar, Sparkles, Building2, Home } from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import FAQPreview from '@/components/home/FAQPreview';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Vision And Design\'s complete range of creative services: branding, digital design, event management, fashion choreography, construction, and interior design.',
};

const iconMap: Record<string, React.ElementType> = { Palette, Monitor, Calendar, Sparkles, Building2, Home };

const process = [
  { step: '01', title: 'Discover', description: 'Deep-dive into your brand, goals, and audience.' },
  { step: '02', title: 'Strategize', description: 'Build a tailored creative roadmap for your project.' },
  { step: '03', title: 'Create', description: 'Execute with precision, passion, and excellence.' },
  { step: '04', title: 'Deliver', description: 'Launch your project and support its ongoing success.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#1e1e24] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1e1e24] to-[#1e1e24]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8A97E]/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> What We Offer <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Creative <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Six specialized creative verticals — one unified vision. We craft extraordinary solutions across every dimension of your brand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <AnimatedSection key={service.id} delay={i * 0.07}>
                  <div className="group glass-dark rounded-2xl border border-white/5 hover:border-[#C8A97E]/20 overflow-hidden transition-all duration-500">
                    <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Image */}
                      <div className={`img-zoom aspect-video lg:aspect-auto relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e24]/60 to-transparent lg:hidden" />
                      </div>
                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}>
                          <Icon className="w-6 h-6" style={{ color: service.color }} />
                        </div>
                        <h2 className="text-white font-display font-bold text-3xl mb-4 group-hover:text-[#C8A97E] transition-colors duration-300">{service.title}</h2>
                        <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                        <ul className="grid grid-cols-2 gap-2 mb-8">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: service.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href={`/services/${service.slug}`} className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm self-start group/link">
                          Explore {service.title}
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="Our" titleHighlight="Process" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6 border border-white/5 hover:border-[#C8A97E]/20 card-hover text-center group">
                  <div className="text-5xl font-display font-bold text-gradient-gold mb-4">{p.step}</div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">{p.title}</h3>
                  <p className="text-white/50 text-sm">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      <FAQPreview />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/10 via-[#1A1A2E] to-[#1e1e24]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to <span className="text-gradient-gold">Get Started?</span></h2>
            <p className="text-white/60 text-lg mb-8">Tell us about your project and we'll craft a tailored creative solution for you.</p>
            <Link href="/contact" className="btn-gold px-10 py-4 rounded-full text-base inline-flex items-center gap-2 group">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
