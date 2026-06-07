'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Grid3x3 } from 'lucide-react';

// Gallery image placeholders with themed colors and labels
const galleryItems = [
  { id: 1, label: 'Digital Literacy Workshop', category: 'Workshop', emoji: '💻', color: 'from-pink-400 to-rose-500', height: 'h-64' },
  { id: 2, label: 'Women Leadership Summit', category: 'Event', emoji: '🏆', color: 'from-purple-400 to-violet-500', height: 'h-48' },
  { id: 3, label: 'Skill Training Session', category: 'Training', emoji: '🛠️', color: 'from-amber-400 to-orange-500', height: 'h-72' },
  { id: 4, label: 'Community Gathering', category: 'Community', emoji: '🤝', color: 'from-teal-400 to-cyan-500', height: 'h-56' },
  { id: 5, label: 'Entrepreneurship Bootcamp', category: 'Training', emoji: '🚀', color: 'from-blue-400 to-indigo-500', height: 'h-40' },
  { id: 6, label: 'Education Support Drive', category: 'Education', emoji: '📚', color: 'from-green-400 to-emerald-500', height: 'h-64' },
  { id: 7, label: 'Rural Outreach Program', category: 'Outreach', emoji: '🌾', color: 'from-pink-500 to-purple-500', height: 'h-52' },
  { id: 8, label: 'Mentorship Circle', category: 'Mentorship', emoji: '💡', color: 'from-rose-400 to-pink-500', height: 'h-44' },
  { id: 9, label: 'Health & Wellness Camp', category: 'Health', emoji: '❤️', color: 'from-violet-400 to-purple-500', height: 'h-60' },
  { id: 10, label: 'Graduation Ceremony', category: 'Event', emoji: '🎓', color: 'from-cyan-400 to-blue-500', height: 'h-48' },
  { id: 11, label: 'Coding Bootcamp 2025', category: 'Workshop', emoji: '⌨️', color: 'from-fuchsia-400 to-pink-500', height: 'h-56' },
  { id: 12, label: 'Leadership Awards Night', category: 'Event', emoji: '⭐', color: 'from-indigo-400 to-violet-500', height: 'h-40' },
];

const categories = ['All', 'Workshop', 'Event', 'Training', 'Community', 'Education', 'Outreach', 'Mentorship'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto w-fit mb-4">
            <Grid3x3 className="w-4 h-4" />
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Moments of{' '}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            A visual journey through our programs, events, and the inspiring women who are part of our community.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? 'btn-primary border-transparent text-white'
                  : 'border-pink-200 dark:border-purple-800/40 hover:border-pink-400 opacity-70 hover:opacity-100'
              }`}
              style={activeCategory === cat ? {} : { padding: '10px 20px' }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="masonry-item"
              >
                <div
                  className={`group relative ${item.height} rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-2xl transition-shadow`}
                  onClick={() => setLightboxItem(item)}
                >
                  {/* Gradient background simulating image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px),
                                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />

                  {/* Emoji decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-30 group-hover:opacity-20 transition-opacity select-none">
                    {item.emoji}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                    >
                      <ZoomIn className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </div>

                  {/* Label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 right-0 text-white w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Expanded image */}
              <div className={`w-full h-80 rounded-3xl bg-gradient-to-br ${lightboxItem.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-8xl opacity-30">{lightboxItem.emoji}</div>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs text-white/50 font-medium uppercase tracking-wider">{lightboxItem.category}</span>
                <h3 className="text-white text-xl font-bold mt-1">{lightboxItem.label}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
