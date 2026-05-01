import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

const steps = [
  { step: '01', title: 'Discovery', description: 'We start by deeply understanding your business, goals, target audience, and competitive landscape.' },
  { step: '02', title: 'Strategy', description: 'We craft a tailored creative strategy that aligns with your business objectives and brand vision.' },
  { step: '03', title: 'Design', description: 'Our creative team brings your vision to life with stunning, purposeful design and execution.' },
  { step: '04', title: 'Refine', description: 'We collaborate with you through revisions to ensure every detail is perfect and meets your vision.' },
  { step: '05', title: 'Deliver', description: 'We deliver polished, production-ready work and provide ongoing support for your success.' },
];

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Creative"
          titleHighlight="Process"
          description="A streamlined, collaborative approach that ensures exceptional results every time."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12}>
                <div className="relative text-center group">
                  {/* Step number circle */}
                  <div className="w-24 h-24 rounded-full glass-dark border border-[#C8A97E]/20 flex flex-col items-center justify-center mx-auto mb-6 group-hover:border-[#C8A97E]/60 transition-all duration-300 group-hover:glow-gold">
                    <span className="text-[#C8A97E] text-xs tracking-widest uppercase">Step</span>
                    <span className="text-white font-display font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl mb-3 group-hover:text-[#C8A97E] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
