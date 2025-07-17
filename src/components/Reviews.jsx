import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Kles H.', date: '30/06/25', comment: 'Rapide et efficace. Repas chaud' },
  { name: 'flo D.', date: '13/04/25', comment: 'Le top' },
  { name: 'Deborah D.', date: '22/01/25', comment: 'Super' },
  { name: 'flo D.', date: '20/04/25', comment: 'Je recommande' },
  { name: 'mathieu D.', date: '02/02/25', comment: 'Trop bon !!!' },
  { name: 'SofianeDUP L.', date: '06/01/25', comment: 'Top' },
];

const globalNote = 4.6;
const totalReviews = 8000;

const star = (filled, i) => (
  <svg
    key={i}
    className={`w-6 h-6 ${filled ? 'text-[#d4af37]' : 'text-[#3a2e13]'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Reviews = () => (
  <section id="reviews-section" className="py-24 lg:py-32 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-0">
      {/* Titre premium gold sobre */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4 bg-gradient-to-r from-[#bfa94a] via-[#d4af37] to-[#bfa94a] bg-clip-text text-transparent">
          Avis clients
        </h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full mb-5 opacity-70"></div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-[#d4af37] flex items-center gap-2">
            {globalNote} <span className="flex gap-1">{[...Array(5)].map((_, i) => star(i < Math.round(globalNote), i))}</span>
          </span>
          <span className="text-gray-400 text-sm font-light">{totalReviews}+ avis</span>
        </div>
      </motion.div>
      {/* Grille d'avis glassmorphism gold sombre */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#d4af37]/20 rounded-xl shadow shadow-[#d4af37]/10 p-6 flex flex-col gap-2 hover:border-[#d4af37] hover:shadow-[#d4af37]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-[#d4af37] tracking-wide text-base">{review.name}</span>
              <span className="text-xs text-gray-400 font-light">{review.date}</span>
            </div>
            <p className="text-gray-300 text-base font-light leading-relaxed">{review.comment}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Reviews;