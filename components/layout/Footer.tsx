import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#C8A97E]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A97E] to-[#b8895a] flex items-center justify-center font-bold text-black text-lg">
                V
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Vision And</div>
                <div className="text-[#C8A97E] text-xs tracking-[0.2em] uppercase">Design</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Where Creativity Meets Innovation. A forward-thinking creative agency crafting extraordinary brand experiences.
            </p>
            <div className="flex items-center gap-3">
              {[
                { name: 'IG', href: SITE_CONFIG.social.instagram },
                { name: 'IN', href: SITE_CONFIG.social.linkedin },
                { name: 'TW', href: SITE_CONFIG.social.twitter },
                { name: 'FB', href: SITE_CONFIG.social.facebook },
              ].map(({ name, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-[#C8A97E] hover:border-[#C8A97E]/30 transition-all duration-200 text-xs font-bold"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/50 hover:text-[#C8A97E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Industries', href: '/industries' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#C8A97E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C8A97E] mt-0.5 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/50 hover:text-[#C8A97E] text-sm transition-colors duration-200 break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C8A97E] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{SITE_CONFIG.contact1.name}</div>
                    <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="text-white/50 hover:text-[#C8A97E] text-sm transition-colors duration-200">
                      {SITE_CONFIG.contact1.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{SITE_CONFIG.contact2.name}</div>
                    <a href={`tel:${SITE_CONFIG.contact2.phone}`} className="text-white/50 hover:text-[#C8A97E] text-sm transition-colors duration-200">
                      {SITE_CONFIG.contact2.phone}
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Direct Contact CTAs */}
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.contact1.phone}`}
                className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-white/10 hover:border-[#C8A97E]/40 transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">Call Us Now</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:border-[#25D366]/50 transition-all duration-200 group"
              >
                <span className="text-[#25D366] text-sm">💬</span>
                <span className="text-white/60 group-hover:text-[#25D366] text-sm transition-colors duration-200">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C8A97E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Crafted with ♥ by Vision And Design
          </p>
        </div>
      </div>
    </footer>
  );
}
