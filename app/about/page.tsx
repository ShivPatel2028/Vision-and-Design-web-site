import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { TEAM_MEMBERS, SITE_CONFIG } from '@/lib/constants';


export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vision And Design — a forward-thinking creative agency passionate about crafting innovative solutions that elevate brands and experiences.',
  openGraph: {
    title: 'About Vision And Design',
    description: 'Our story, mission, and the team behind the creativity.',
  },
};

const timeline = [
  { year: '2019', title: 'The Beginning', description: 'Vision And Design was founded with a dream to create a truly multidisciplinary creative agency.' },
  { year: '2020', title: 'First 10 Clients', description: 'Rapidly grew to serve 10+ clients across branding and digital design in our first year.' },
  { year: '2021', title: 'Expanding Services', description: 'Launched Event Management and Fashion Choreography divisions to serve a broader creative vision.' },
  { year: '2022', title: 'Construction & Interiors', description: 'Added Construction and Interior Design to become a fully integrated creative agency.' },
  { year: '2023', title: '100 Projects Milestone', description: 'Crossed the 100-project milestone, delivering excellence across all six service verticals.' },
  { year: '2024', title: 'National Recognition', description: 'Recognized among top creative agencies in Gujarat with a growing pan-India client base.' },
  { year: '2025', title: 'Today & Beyond', description: 'Continuing to push creative boundaries with 150+ projects and an expanding international presence.' },
];

const values = [
  { icon: Eye, title: 'Our Vision', description: 'To be the most innovative and transformative creative agency in India, crafting experiences that redefine industries.' },
  { icon: Target, title: 'Our Mission', description: 'To deliver extraordinary creative solutions that elevate our clients\' brands and create lasting impressions.' },
  { icon: Heart, title: 'Our Culture', description: 'A culture of passion, collaboration, and continuous growth where every idea is valued and every project is a masterpiece.' },
  { icon: Zap, title: 'Our Approach', description: 'We blend strategic thinking with bold creativity, ensuring every solution is both beautiful and effective.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#1e1e24] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1e1e24] to-[#1e1e24]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A97E]/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" />
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              We Are <span className="text-gradient-gold">Vision</span> And Design
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              A forward-thinking creative agency passionate about crafting innovative solutions that elevate brands and create extraordinary experiences across every medium.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Vision And Design team collaboration"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 border border-[#C8A97E]/20">
                  <div className="text-3xl font-display font-bold text-gradient-gold">150+</div>
                  <div className="text-white/50 text-sm">Successful Projects</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <span className="text-[#C8A97E] text-xs tracking-[0.25em] uppercase font-semibold">Our Story</span>
                <h2 className="text-4xl font-display font-bold text-white leading-tight">
                  Born from a Passion for <span className="text-gradient-gold">Creative Excellence</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Vision And Design was born from a simple yet powerful belief: that great design has the power to transform businesses, inspire people, and create lasting impact. Founded by Dhwani Pandya and Vraj Pandya, we set out to build a creative agency that truly understands the intersection of aesthetics, strategy, and execution.
                </p>
                <p className="text-white/60 leading-relaxed">
                  What started as a branding and digital design studio has grown into a fully integrated creative agency serving clients across six specialized verticals — from crafting compelling brand identities to choreographing breathtaking fashion shows and designing stunning interior spaces.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Today, with over 150 successful projects and 50+ satisfied clients, Vision And Design stands as a testament to what's possible when creativity meets innovation.
                </p>
                <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm group">
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Culture, Approach */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Vision, Mission"
            titleHighlight="& Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-8 border border-white/5 hover:border-[#C8A97E]/20 card-hover group h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#C8A97E]/10 border border-[#C8A97E]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="w-6 h-6 text-[#C8A97E]" />
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl mb-4 group-hover:text-[#C8A97E] transition-colors duration-300">{v.title}</h3>
                  <p className="text-white/50 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Company"
            titleHighlight="Timeline"
            description="From a passionate startup to a recognized creative agency — our journey of growth and excellence."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A97E] via-[#C8A97E]/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Year bubble */}
                    <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e1e24] border-2 border-[#C8A97E] flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                      <span className="text-[#C8A97E] font-bold text-xs md:text-sm">{item.year}</span>
                    </div>
                    {/* Card */}
                    <div className={`glass-dark rounded-2xl p-6 border border-white/5 hover:border-[#C8A97E]/20 transition-colors duration-300 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                      <div className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase mb-2">{item.year}</div>
                      <h3 className="text-white font-display font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Founders"
            title="Meet The"
            titleHighlight="Team"
            description="The passionate visionaries driving Vision And Design forward."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.15}>
                <div className="group glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-[#C8A97E]/20 card-hover">
                  <div className="img-zoom aspect-[3/4] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-[#C8A97E] transition-colors duration-200 text-xs font-bold">
                          IG
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-[#C8A97E] transition-colors duration-200 text-xs font-bold">
                          IN
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-display font-bold text-xl mb-1">{member.name}</h3>
                    <div className="text-[#C8A97E] text-sm mb-3">{member.role}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/10 via-[#1A1A2E] to-[#1e1e24]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Create <span className="text-gradient-gold">Together?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">Let's collaborate and build something extraordinary. Your vision is our canvas.</p>
            <Link href="/contact" className="btn-gold px-10 py-4 rounded-full text-base inline-flex items-center gap-2 group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
