'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, Heart, Globe } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ParticleGlobe = dynamic(() => import('./ParticleGlobe'), { ssr: false });

const floatingStats = [
  { icon: Users, value: '10K+', label: 'Women Empowered', color: 'from-pink-500 to-rose-400' },
  { icon: Globe, value: '100+', label: 'Communities', color: 'from-purple-500 to-violet-400' },
  { icon: Heart, value: '95%', label: 'Positive Impact', color: 'from-pink-400 to-purple-500' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #FF4F9A, #A855F7)' }}
        />
        <div
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full opacity-15 animate-blob"
          style={{ background: 'radial-gradient(circle, #A855F7, #FF4F9A)', animationDelay: '3s' }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10 animate-blob"
          style={{ background: 'radial-gradient(circle, #FFD6E7, #A855F7)', animationDelay: '6s' }}
        />

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-40"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
              background: i % 2 === 0 ? '#FF4F9A' : '#A855F7',
              animation: `particle-float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom w-full relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-badge mb-6 w-fit"
            >
              <Sparkles className="w-4 h-4" />
              Transforming Lives Since 2019
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Empowering{' '}
              <span className="gradient-text block">Women.</span>
              <span className="text-4xl md:text-5xl lg:text-6xl">
                Transforming{' '}
                <span className="gradient-text-reverse">Futures.</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl opacity-70 leading-relaxed mb-10 max-w-xl"
            >
              Creating opportunities through education, mentorship, entrepreneurship and
              community support — because every woman deserves to thrive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                Join Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary group flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play className="w-3 h-3 text-pink-500 fill-pink-500 ml-0.5" />
                </div>
                Our Story
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl gradient-text">{stat.value}</div>
                    <div className="text-xs opacity-60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Globe + Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[320px] sm:h-[450px] lg:h-[600px]"
          >
            {/* Hero Image */}
            <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 30px 80px rgba(255,79,154,0.25)' }}>
              <Image
                src="/hero-image.png"
                alt="Women empowerment - She Can Foundation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent" />
            </div>

            {/* 3D Particle Globe overlay */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-60">
              <ParticleGlobe />
            </div>

            {/* Floating card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:block absolute -left-6 top-1/3 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">500+ Workshops</div>
                  <div className="text-xs opacity-60">Completed Nationwide</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:block absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Become a Volunteer</div>
                  <div className="text-xs opacity-60">Make a difference today</div>
                </div>
              </div>
            </motion.div>

            {/* Glow ring */}
            <div
              className="absolute inset-4 rounded-3xl pointer-events-none animate-pulse-glow"
              style={{ border: '2px solid transparent', background: 'transparent' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs opacity-50 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-pink-400 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
