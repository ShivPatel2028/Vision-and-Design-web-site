'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const WORDS = ['Branding', 'Design', 'Events', 'Fashion', 'Interiors'];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  /* ── Particle canvas ─────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,126,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,169,126,${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Word rotator ────────────────────────── */
  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  /* ── Mouse parallax ──────────────────────── */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070707]">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* Background orbs */}
      <motion.div style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }} className="absolute inset-0 pointer-events-none z-0">
        <div className="orb w-[700px] h-[700px] bg-[#C8A97E]/8 top-[-10%] left-[-10%] animate-glow" />
        <div className="orb w-[500px] h-[500px] bg-[#6366F1]/6 bottom-[-5%] right-[-5%] animate-glow" style={{ animationDelay: '2s' }} />
        <div className="orb w-[300px] h-[300px] bg-[#C8A97E]/5 top-[40%] right-[20%] animate-glow" style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 z-0" />

      {/* Scrolling parallax content wrapper */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <div className="glass-gold px-5 py-2.5 rounded-full flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" />
            <span className="text-[#C8A97E] text-xs font-semibold tracking-[0.3em] uppercase">Premium Creative Agency</span>
            <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-display font-black leading-[0.88] tracking-tight"
          >
            <span className="block text-white">Where</span>
            <span className="block text-gradient-hero text-glow-gold">Creativity</span>
            <span className="block text-white">Meets</span>

            {/* Animated word */}
            <span className="block relative h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 text-gradient-gold"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
        </motion.div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12 tracking-wide"
        >
          Vision And Design — crafting extraordinary brand experiences through design, strategy, and boundless innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/contact" className="btn-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 group">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link href="/portfolio" className="btn-outline-gold px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5">
            <Play className="w-4 h-4" />
            <span>View Our Work</span>
          </Link>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '6', label: 'Verticals' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-3xl sm:text-4xl font-display font-black text-gradient-gold mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>


      <motion.div
        animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute bottom-1/3 left-[6%] z-10 hidden xl:block pointer-events-none"
      >
        <div className="glass-dark rounded-2xl p-5 w-40 animate-floating" style={{ animationDelay: '3s' }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#A07840] mb-3" />
          <div className="text-white text-sm font-semibold">Vision & Design</div>
          <div className="text-white/40 text-xs">Est. 2019</div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#C8A97E]/50" />
        </motion.div>
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent z-10" />
    </section>
  );
}
