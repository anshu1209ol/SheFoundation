'use client';

import { motion, Variants } from 'framer-motion';
import { GraduationCap, Trophy, Wrench, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Providing quality education and resources to help women build a strong foundation for success.',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-50 dark:bg-pink-950/20',
  },
  {
    icon: Trophy,
    title: 'Leadership',
    description: 'Cultivating confident leaders who inspire change and drive progress in their communities.',
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
  },
  {
    icon: Wrench,
    title: 'Skills Dev',
    description: 'Skill development programs to make women self-reliant, independent, and future-ready.',
    color: 'from-pink-400 to-purple-500',
    bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/20',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive community that encourages growth and empowers transformative change.',
    color: 'from-violet-500 to-indigo-400',
    bgColor: 'bg-violet-50 dark:bg-violet-950/20',
  },
];

const values = [
  'Inclusive & intersectional approach',
  'Evidence-based programs',
  'Community-led initiatives',
  'Long-term sustainable impact',
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding gradient-bg">
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
            <Users className="w-4 h-4" />
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            About{' '}
            <span className="gradient-text">She Can Foundation</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
            We believe every woman has the power to change her life and community. Our mission is to break barriers
            and create a world where every woman can learn, grow, and lead with confidence.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Large decorative quote */}
              <div
                className="text-[120px] leading-none font-black opacity-5 absolute -top-8 -left-4 select-none gradient-text"
                aria-hidden
              >
                &ldquo;
              </div>

              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 relative z-10">
                &ldquo;When women rise, families prosper, communities thrive, and nations grow stronger.&rdquo;
              </blockquote>

              <p className="opacity-70 leading-relaxed mb-8 text-base">
                Founded in 2019, She Can Foundation has been at the forefront of women&rsquo;s empowerment
                across India. We work at the grassroots level, partnering with communities, schools,
                and local organizations to create real, measurable change in women&rsquo;s lives.
              </p>

              <p className="opacity-70 leading-relaxed mb-8 text-base">
                Our holistic approach addresses education, economic independence, mental health,
                and leadership development — ensuring every woman we work with has the tools
                she needs to unlock her full potential.
              </p>

              {/* Values checklist */}
              <ul className="space-y-3 mb-10">
                {values.map((val) => (
                  <li key={val} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{val}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-8 py-3.5 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`card group cursor-pointer ${pillar.bgColor}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-lg icon-float`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm opacity-65 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative divider */}
        <hr className="gradient-divider" />
      </div>
    </section>
  );
}
