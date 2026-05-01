import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Industries We"
          titleHighlight="Serve"
          description="We bring deep expertise and creative solutions across a range of industries and verticals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <AnimatedSection key={ind.id} delay={i * 0.1}>
              <Link href="/industries" className="group relative block rounded-2xl overflow-hidden img-zoom aspect-video cursor-pointer">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[#C8A97E]/0 group-hover:bg-[#C8A97E]/10 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {ind.services.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-[#C8A97E]/20 text-[#C8A97E] border border-[#C8A97E]/30">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{ind.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#C8A97E] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
