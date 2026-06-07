'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[+]?[\d\s\-()]{7,15}$/, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'hello@shecanfoundation.org', href: 'mailto:hello@shecanfoundation.org' },
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra, India', href: '#' },
];

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000));
    console.log('Form submitted:', data);
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="contact" className="section-padding gradient-bg">
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
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Let&rsquo;s Start a{' '}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, partner, or simply learn more, we&rsquo;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl p-6 border"
              style={{ background: 'rgba(255,79,154,0.04)', borderColor: 'rgba(255,79,154,0.15)' }}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs opacity-50 font-medium mb-0.5">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl p-6 border"
              style={{ background: 'rgba(168,85,247,0.04)', borderColor: 'rgba(168,85,247,0.15)' }}>
              <h3 className="text-lg font-bold mb-4">Follow Our Journey</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    className="flex items-center gap-2 p-3 rounded-xl border text-sm font-medium hover:border-pink-400 hover:text-pink-500 transition-all"
                    style={{ borderColor: 'rgba(255,79,154,0.15)' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response promise */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                We respond within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="card relative overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      animate={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 gradient-text">Thank You! 🎉</h3>
                    <p className="opacity-65 max-w-sm mx-auto">
                      Thank you for supporting She Can Foundation. Your form has been submitted successfully.
                      We&rsquo;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 opacity-70">
                          Full Name *
                        </label>
                        <input
                          {...register('fullName')}
                          id="fullName"
                          type="text"
                          placeholder="Priya Sharma"
                          className={`form-input ${errors.fullName ? 'error' : ''}`}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠</span> {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 opacity-70">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          id="email"
                          type="email"
                          placeholder="priya@example.com"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠</span> {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 opacity-70">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className={`form-input ${errors.phone ? 'error' : ''}`}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠</span> {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 opacity-70">
                          Subject *
                        </label>
                        <input
                          {...register('subject')}
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          className={`form-input ${errors.subject ? 'error' : ''}`}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠</span> {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 opacity-70">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        placeholder="Tell us about your interest in She Can Foundation..."
                        className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                      className="btn-primary w-full justify-center py-3.5 px-6 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
