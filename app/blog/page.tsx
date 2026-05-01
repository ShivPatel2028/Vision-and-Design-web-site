import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { BLOG_POSTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Read the latest insights, trends, and creative thoughts from Vision And Design.',
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[#FDFBF7] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16161a] to-[#16161a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Thoughts & Ideas <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] mb-6">
              Creative <span className="text-gradient-gold">Insights</span>
            </h1>
            <p className="text-black/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Perspectives on design, branding, events, and the future of creativity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="group relative rounded-3xl overflow-hidden glass border border-black/5 card-hover flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative img-zoom">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-r from-[#16161a] to-[#1e1e24]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#C8A97E]/20 text-[#C8A97E] text-[10px] uppercase tracking-widest font-bold">Featured</span>
                  <span className="text-black/40 text-xs">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-4 group-hover:text-[#C8A97E] transition-colors">{featuredPost.title}</h2>
                <p className="text-black/60 mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-xs text-black/40 mb-8">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</div>
                </div>
                <div className="inline-flex items-center gap-2 text-[#C8A97E] font-semibold group/link cursor-pointer">
                  Read Article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid Posts */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest" title="Recent" titleHighlight="Articles" align="left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <div className="group h-full flex flex-col cursor-pointer">
                  <div className="relative aspect-video rounded-2xl overflow-hidden img-zoom mb-6">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C8A97E] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-black/40 pt-6 border-t border-black/5 mt-auto">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                      <span className="text-[#C8A97E] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
