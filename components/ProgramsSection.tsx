'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Briefcase, Lightbulb, Crown, Monitor, Globe,
  ArrowRight, Sparkles
} from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Education Support',
    description: 'Scholarships, tutoring, and educational resources for women of all ages — from primary schooling to higher education.',
    color: 'from-pink-500 to-rose-500',
    lightColor: 'rgba(255,79,154,0.08)',
    borderColor: 'rgba(255,79,154,0.15)',
    tag: 'Core Program',
    participants: '3,200+',
  },
  {
    icon: Briefcase,
    title: 'Skill Development',
    description: 'Practical skill-building workshops in digital literacy, finance, communication, and professional development.',
    color: 'from-purple-500 to-violet-500',
    lightColor: 'rgba(168,85,247,0.08)',
    borderColor: 'rgba(168,85,247,0.15)',
    tag: 'Flagship',
    participants: '2,800+',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship',
    description: 'Business incubation, mentorship, micro-financing support, and market access for aspiring women entrepreneurs.',
    color: 'from-amber-500 to-orange-400',
    lightColor: 'rgba(245,158,11,0.08)',
    borderColor: 'rgba(245,158,11,0.15)',
    tag: 'Growth',
    participants: '1,500+',
  },
  {
    icon: Crown,
    title: 'Leadership Training',
    description: 'Structured programs to help women step into leadership roles in business, politics, and civil society.',
    color: 'from-pink-400 to-purple-500',
    lightColor: 'rgba(219,39,119,0.08)',
    borderColor: 'rgba(219,39,119,0.15)',
    tag: 'Premium',
    participants: '800+',
  },
  {
    icon: Monitor,
    title: 'Digital Literacy',
    description: 'Bridging the digital divide with coding, social media, e-commerce, and tech entrepreneurship training.',
    color: 'from-teal-500 to-cyan-400',
    lightColor: 'rgba(20,184,166,0.08)',
    borderColor: 'rgba(20,184,166,0.15)',
    tag: 'New',
    participants: '1,200+',
  },
  {
    icon: Globe,
    title: 'Community Outreach',
    description: 'Grassroots initiatives working directly with local communities to drive lasting, sustainable social change.',
    color: 'from-blue-500 to-indigo-500',
    lightColor: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.15)',
    tag: 'Impact',
    participants: '5,000+',
  },
];

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => setTransform('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? 'none' : 'transform 0.5s ease',
        background: program.lightColor,
        borderColor: program.borderColor,
      }}
      className="group relative rounded-2xl p-7 border cursor-pointer overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${program.lightColor.replace('0.08', '0.2')}, transparent 70%)` }}
      />

      {/* Tag badge */}
      <div
        className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
        style={{ background: `linear-gradient(135deg, ${program.color.replace('from-', '').split(' ')[0]}, ${program.color.replace('to-', '').split(' ').pop()})` }}
      >
        {program.tag}
      </div>

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 shadow-lg icon-float`}
      >
        <program.icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold mb-3">{program.title}</h3>
      <p className="text-sm opacity-65 leading-relaxed mb-5">{program.description}</p>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <span className="text-xs opacity-50 font-medium">{program.participants} participants</span>
        <motion.button
          whileHover={{ x: 4 }}
          className="text-sm font-semibold flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
          style={{ color: 'inherit' }}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit mb-4">
            <Sparkles className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Our{' '}
            <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
            Carefully designed programs that address every facet of women&rsquo;s development —
            from education to entrepreneurship, and everything in between.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
