import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Vision And Design. Reach out via phone, email, or WhatsApp to start your creative journey with us.',
};

const contacts = [
  { icon: Phone, title: 'Call Us', details: [SITE_CONFIG.contact1.phone, SITE_CONFIG.contact2.phone], action: `tel:${SITE_CONFIG.contact1.phone}`, cta: 'Call Now' },
  { icon: MessageCircle, title: 'WhatsApp', details: ['Quick responses', 'Direct messaging'], action: `https://wa.me/${SITE_CONFIG.whatsapp}`, cta: 'Chat on WhatsApp' },
  { icon: Mail, title: 'Email', details: [SITE_CONFIG.email, '24/7 Support'], action: `mailto:${SITE_CONFIG.email}`, cta: 'Send Email' },
  { icon: MapPin, title: 'Visit Us', details: ['Ahmedabad', 'Gujarat, India'], action: '#', cta: 'Get Directions' },
];

export default function ContactPage() {
  return (
    <div className="bg-[#070707] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#070707] to-[#070707]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C8A97E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8A97E]/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Reach Out <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
              Let's Create <br /><span className="text-gradient-gold">Together</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              We believe in direct, personal communication. Connect with our founders instantly through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Contact Methods */}
      <section className="section-padding pt-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative -mt-16">
            {contacts.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="group glass-dark rounded-3xl p-8 border border-white/10 hover:border-[#C8A97E]/40 card-hover text-center h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C8A97E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl glass mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#C8A97E]/20 shadow-[0_0_20px_rgba(200,169,126,0.1)] group-hover:shadow-[0_0_30px_rgba(200,169,126,0.3)]">
                      <c.icon className="w-7 h-7 text-[#C8A97E]" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#C8A97E] transition-colors">{c.title}</h3>
                    <div className="space-y-2 mb-8">
                      {c.details.map((d, idx) => (
                        <p key={idx} className="text-white/60 text-sm">{d}</p>
                      ))}
                    </div>
                  </div>
                  <a href={c.action} target={c.icon === MessageCircle ? "_blank" : "_self"} rel="noopener noreferrer" className="relative z-10 w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 hover:bg-[#C8A97E] hover:text-black hover:border-[#C8A97E] transition-all duration-300">
                    {c.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Map */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeader eyebrow="Location" title="Our" titleHighlight="Headquarters" align="left" />
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Based in the vibrant city of Ahmedabad, we serve clients globally. While we don't have a contact form, our digital doors are always open via phone, email, and social media.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Connect Digitally</h4>
                <div className="flex gap-4">
                  {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center hover:border-[#C8A97E] hover:text-[#C8A97E] hover:scale-110 transition-all duration-300 shadow-lg">
                      <span className="capitalize font-semibold text-xs tracking-wider">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="h-full">
              <div className="glass-dark rounded-3xl p-2 border border-white/10 h-[500px] w-full relative overflow-hidden group">
                {/* Simulated Premium Map Embed via Image or Custom Styled Iframe. Using a placeholder image for visual quality as requested. */}
                 <div className="absolute inset-0 img-zoom w-full h-full rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map Location" fill className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] to-transparent" />
                    <div className="absolute inset-0 bg-[#C8A97E]/10" />
                    {/* Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#C8A97E] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,169,126,0.6)] animate-pulse">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div className="glass px-4 py-2 mt-4 rounded-full border border-[#C8A97E]/30 backdrop-blur-md">
                        <span className="text-white font-bold tracking-wider text-sm">Vision And Design</span>
                      </div>
                    </div>
                 </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
