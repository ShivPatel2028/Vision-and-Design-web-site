import Link from 'next/link';
import { ArrowRight, Palette, Monitor, Calendar, Sparkles, Building2, Home } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Monitor,
  Calendar,
  Sparkles,
  Building2,
  Home,
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-[#F2F0ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Creative"
          titleHighlight="Services"
          description="From brand strategy to breathtaking interiors, we bring creative vision to life across every medium."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="group relative glass rounded-2xl p-8 hover:border-[#C8A97E]/30 card-hover overflow-hidden cursor-pointer border border-black/5 h-full">
                  {/* Background gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${service.color}10 0%, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#1A1A1A] text-xl font-display font-bold mb-3 group-hover:text-[#C8A97E] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/50 text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-black/40">
                          <span className="w-1 h-1 rounded-full bg-[#C8A97E]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-[#C8A97E] text-sm font-medium group/link"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/services" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
