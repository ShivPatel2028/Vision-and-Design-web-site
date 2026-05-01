import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      {eyebrow && (
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#C8A97E]" />
            {eyebrow}
            <span className="w-8 h-px bg-[#C8A97E]" />
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight ${light ? 'text-white' : 'text-white'}`}>
          {title}
          {titleHighlight && (
            <span className="text-gradient-gold"> {titleHighlight}</span>
          )}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p className={`mt-6 text-lg max-w-2xl leading-relaxed ${light ? 'text-white/60' : 'text-white/60'} ${align === 'center' ? 'text-center' : ''}`}>
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
