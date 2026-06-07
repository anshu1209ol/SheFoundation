'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Globe, Star, TrendingUp, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Women Empowered', sublabel: 'Across 15 states' },
  { icon: BookOpen, value: 500, suffix: '+', label: 'Workshops Conducted', sublabel: 'Nationwide programs' },
  { icon: Globe, value: 100, suffix: '+', label: 'Communities Reached', sublabel: 'In urban & rural areas' },
  { icon: Star, value: 95, suffix: '%', label: 'Positive Impact', sublabel: 'Self-reported improvement' },
  { icon: TrendingUp, value: 200, suffix: '+', label: 'Partner Organizations', sublabel: 'Collaborative network' },
  { icon: Award, value: 50, suffix: '+', label: 'Awards Received', sublabel: 'Recognition of excellence' },
];

function CountUp({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="section-padding counter-section relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              left: `${5 * i}%`,
              top: `${10 + (i % 6) * 15}%`,
              background: i % 2 === 0 ? '#FF4F9A' : '#A855F7',
              animation: `particle-float ${5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl"
          style={{ background: '#FF4F9A' }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl"
          style={{ background: '#A855F7' }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit mb-4" style={{ color: '#FF4F9A', background: 'rgba(255,79,154,0.15)', borderColor: 'rgba(255,79,154,0.3)' }}>
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Numbers That{' '}
            <span className="gradient-text">Tell Our Story</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every number represents a life touched, a dream realized, and a future brightened through our programs and community initiatives.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="group relative rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden cursor-default"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
            >
              {/* Hover glow bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle at center, rgba(255,79,154,0.1) 0%, transparent 70%)' }} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(255,79,154,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(255,79,154,0.3)' }}>
                <stat.icon className="w-6 h-6 text-pink-400" />
              </div>

              {/* Count */}
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              <div className="font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.sublabel}</div>

              {/* Bottom progress */}
              <div className="mt-4 h-1 rounded-full bg-white/10">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + i * 7}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.15 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation progress tracker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 rounded-2xl p-8 border border-white/10"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-sm text-pink-400 font-semibold mb-1">2026 Annual Goal</div>
              <div className="text-2xl font-black text-white">Empower 5,000 More Women</div>
              <div className="text-slate-400 mt-1">₹45,00,000 raised out of ₹75,00,000 goal</div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300 font-medium">Progress</span>
                <span className="text-pink-400 font-bold">60%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #FF4F9A, #A855F7)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>₹0</span>
                <span>₹75,00,000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
