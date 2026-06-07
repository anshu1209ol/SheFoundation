'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Entrepreneur & Graduate, Batch 2023',
    location: 'Mumbai, Maharashtra',
    avatar: 'PS',
    avatarColor: 'from-pink-400 to-rose-500',
    rating: 5,
    quote: 'She Can Foundation changed my life completely. I went from having no income to running a successful tailoring business with 5 employees. The business training and mentorship were invaluable. I never believed I could achieve this, but they showed me I can.',
    impact: 'Started her own business',
  },
  {
    id: 2,
    name: 'Kavitha Reddy',
    role: 'Software Developer, Program Graduate 2022',
    location: 'Hyderabad, Telangana',
    avatar: 'KR',
    avatarColor: 'from-purple-400 to-violet-500',
    rating: 5,
    quote: 'The Digital Literacy program opened doors I never knew existed. In 6 months, I learned coding and landed my first tech job. The foundation didn\'t just teach me skills — they gave me confidence and a support system that I still rely on today.',
    impact: 'Secured first tech job',
  },
  {
    id: 3,
    name: 'Anjali Mehta',
    role: 'Community Leader & Volunteer',
    location: 'Jaipur, Rajasthan',
    avatar: 'AM',
    avatarColor: 'from-amber-400 to-orange-500',
    rating: 5,
    quote: 'After completing the Leadership Training program, I became the first woman elected to our village panchayat. The program gave me the skills, confidence, and network to create real change in my community. I now inspire other women to step forward.',
    impact: 'Elected community leader',
  },
  {
    id: 4,
    name: 'Sunita Patel',
    role: 'Teacher & Education Advocate',
    location: 'Ahmedabad, Gujarat',
    avatar: 'SP',
    avatarColor: 'from-teal-400 to-cyan-500',
    rating: 5,
    quote: 'The Education Support program helped me complete my B.Ed after a 10-year gap. Today I teach at a government school and am actively involved in ensuring girls in my district don\'t drop out. The cycle of empowerment continues!',
    impact: 'Now educates 200+ students',
  },
  {
    id: 5,
    name: 'Rekha Krishnan',
    role: 'Organic Farmer & Self-Help Group Leader',
    location: 'Chennai, Tamil Nadu',
    avatar: 'RK',
    avatarColor: 'from-green-400 to-emerald-500',
    rating: 5,
    quote: 'Through the Entrepreneurship program, I learned about organic farming and financial management. Our women\'s self-help group now earns ₹2 lakhs monthly selling organic produce. We\'ve transformed our village economy and our children have better futures.',
    impact: 'Led ₹24L/year SHG',
  },
];

export default function StoriesSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAuto, setIsAuto] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAuto, next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60, scale: 0.95 }),
  };

  return (
    <section id="stories" className="section-padding counter-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,79,154,0.08) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)' }} />
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
            <MessageCircle className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Real Women,{' '}
            <span className="gradient-text">Real Change</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Every story is a testament to the power of belief, support, and opportunity.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAuto(false)}
          onMouseLeave={() => setIsAuto(true)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="rounded-3xl p-6 md:p-12 border border-white/10 min-h-[460px] sm:min-h-[340px] md:min-h-[290px] flex flex-col justify-between"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-pink-500 mb-6 opacity-60" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{t.location}</div>
                  </div>
                </div>

                {/* Impact badge */}
                <div className="px-4 py-2 rounded-full text-sm font-semibold text-pink-400 border border-pink-500/30"
                  style={{ background: 'rgba(255,79,154,0.1)' }}>
                  ✨ {t.impact}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-purple-500'
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom thumbnail row */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          {testimonials.map((story, i) => (
            <motion.button
              key={story.id}
              whileHover={{ scale: 1.1 }}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.avatarColor} flex items-center justify-center text-white text-xs font-bold transition-all ${
                i === current ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {story.avatar}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
