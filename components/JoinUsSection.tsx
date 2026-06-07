'use client';

import { motion } from 'framer-motion';
import { Heart, HandHeart, Handshake, ArrowRight, Users, DollarSign, Building2 } from 'lucide-react';

const cards = [
  {
    icon: Users,
    heartIcon: Heart,
    title: 'Volunteer',
    subtitle: 'Give Your Time & Skills',
    description:
      'Join our community of passionate volunteers. Share your expertise, mentor women, and be part of transformative change across our programs.',
    color: 'from-pink-500 to-rose-500',
    lightBg: 'rgba(255,79,154,0.06)',
    borderColor: 'rgba(255,79,154,0.2)',
    benefits: ['Flexible hours', 'Remote options', 'Skill-based matching', 'Certificate awarded'],
    cta: 'Become a Volunteer',
  },
  {
    icon: DollarSign,
    heartIcon: HandHeart,
    title: 'Donate',
    subtitle: 'Support Our Programs',
    description:
      'Your contribution directly funds scholarships, workshops, and community outreach. Every rupee goes towards empowering a woman.',
    color: 'from-purple-500 to-violet-500',
    lightBg: 'rgba(168,85,247,0.06)',
    borderColor: 'rgba(168,85,247,0.2)',
    benefits: ['Tax exemption (80G)', 'Impact reports', 'Donor recognition', 'Monthly options'],
    cta: 'Donate Now',
    featured: true,
  },
  {
    icon: Building2,
    heartIcon: Handshake,
    title: 'Partner With Us',
    subtitle: 'Collaborate for Impact',
    description:
      'Join our network of corporate and institutional partners. Together we can scale impact, share resources, and create lasting change.',
    color: 'from-amber-500 to-orange-400',
    lightBg: 'rgba(245,158,11,0.06)',
    borderColor: 'rgba(245,158,11,0.2)',
    benefits: ['CSR compliance', 'Brand visibility', 'Impact measurement', 'Co-branded programs'],
    cta: 'Partner With Us',
  },
];

export default function JoinUsSection() {
  return (
    <section id="join" className="section-padding gradient-bg">
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
            <Heart className="w-4 h-4 fill-pink-500" />
            Get Involved
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Be Part of the{' '}
            <span className="gradient-text">Movement</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
            There are many ways to support She Can Foundation. Find the one that works for you
            and join thousands of changemakers already making a difference.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative rounded-2xl p-8 border cursor-pointer overflow-hidden ${card.featured ? 'shadow-2xl' : ''}`}
              style={{
                background: card.lightBg,
                borderColor: card.borderColor,
                ...(card.featured ? { boxShadow: '0 20px 60px rgba(168,85,247,0.2)' } : {}),
              }}
            >
              {/* Featured badge */}
              {card.featured && (
                <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 to-violet-500">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg icon-float`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
              <p className="text-sm font-medium opacity-50 mb-4">{card.subtitle}</p>
              <p className="opacity-65 leading-relaxed mb-6 text-sm">{card.description}</p>

              {/* Benefits list */}
              <ul className="space-y-2 mb-8">
                {card.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="opacity-70">{b}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-gradient-to-r ${card.color} shadow-lg transition-all hover:shadow-xl hover:brightness-110`}
              >
                {card.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Volunteer registration form teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-6 sm:p-10 border text-center"
          style={{ background: 'linear-gradient(135deg, rgba(255,79,154,0.05) 0%, rgba(168,85,247,0.05) 100%)', borderColor: 'rgba(255,79,154,0.2)' }}
        >
          <div className="text-4xl mb-4">💝</div>
          <h3 className="text-2xl font-bold mb-3">Together We&rsquo;re Stronger</h3>
          <p className="opacity-60 max-w-lg mx-auto mb-6">
            Join 2,000+ volunteers, 500+ donors, and 200+ partner organizations already working to empower women across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base px-8 py-3.5"
            >
              Quick Volunteer Sign-up
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary text-base px-8 py-3.5"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
