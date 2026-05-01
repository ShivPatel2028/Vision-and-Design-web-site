'use client';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { STATS } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useAnimatedCounter(value);
  return (
    <div ref={ref} className="text-center">
      <AnimatedSection delay={delay}>
        <div className="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-2">
          {count}{suffix}
        </div>
        <div className="text-black/50 text-sm tracking-wider uppercase">{label}</div>
      </AnimatedSection>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#0F3460] to-[#1A1A2E]" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #C8A97E 0, #C8A97E 1px, transparent 0, transparent 50%)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
