import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

const highlights = [
  'Creative Excellence in every project',
  'Experienced team of professionals',
  'Tailored solutions for every client',
  'Innovative approach to design',
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Vision And Design team at work"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 shadow-2xl border border-[#C8A97E]/20 max-w-[220px]">
                <div className="text-4xl font-display font-bold text-gradient-gold mb-1">5+</div>
                <div className="text-black/60 text-sm">Years of crafting<br />extraordinary experiences</div>
              </div>
              {/* Gold line accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C8A97E] rounded-tl-2xl" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-8 h-px bg-[#C8A97E]" />
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] leading-tight">
                We Are A <span className="text-gradient-gold">Forward-Thinking</span> Creative Agency
              </h2>
              <p className="text-black/60 leading-relaxed">
                Vision And Design is a passionate creative agency dedicated to crafting innovative solutions that elevate brands and experiences. Founded with the belief that great design has the power to transform businesses, we combine strategy, creativity, and execution to deliver outstanding results.
              </p>
              <p className="text-black/60 leading-relaxed">
                From branding and digital design to event management and interior spaces, our multidisciplinary team brings a holistic approach to every project we undertake.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 pt-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A97E] shrink-0" />
                    <span className="text-black/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm mt-4 group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
