import AnimatedSection from '@/components/shared/AnimatedSection';

const clients = [
  'Luxe Retail', 'TechStart', 'Fashion Forward', 'Elite Events',
  'Premier Build', 'Urban Spaces', 'Brand Co.', 'Style House',
  'Nova Digital', 'Craft Studio',
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-[#080808] border-y border-white/5 overflow-hidden">
      <AnimatedSection>
        <div className="text-center mb-10">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Trusted by leading brands</span>
        </div>
      </AnimatedSection>
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-3 glass rounded-lg border border-white/5 hover:border-[#C8A97E]/30 transition-colors duration-300 min-w-[160px]"
            >
              <span className="text-white/30 hover:text-[#C8A97E] font-display font-semibold text-sm transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
