'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients"
          titleHighlight="Say"
          description="Don't just take our word for it — hear from the brands and people we've had the pleasure to work with."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <Quote className="w-16 h-16 text-[#C8A97E]/10 absolute -top-4 left-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-3xl p-8 md:p-12 border border-[#C8A97E]/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C8A97E] text-[#C8A97E]" />
                ))}
              </div>

              <p className="text-white/80 text-xl md:text-2xl font-display leading-relaxed mb-8 italic">
                "{TESTIMONIALS[current].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#C8A97E]/30">
                  <Image
                    src={TESTIMONIALS[current].image}
                    alt={TESTIMONIALS[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{TESTIMONIALS[current].name}</div>
                  <div className="text-[#C8A97E] text-sm">{TESTIMONIALS[current].role}, {TESTIMONIALS[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#C8A97E]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-[#C8A97E] hover:border-[#C8A97E]/30 transition-all duration-200 border border-white/10">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-[#C8A97E] hover:border-[#C8A97E]/30 transition-all duration-200 border border-white/10">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
