import React from 'react';
import { motion } from 'framer-motion';

const desserts = [
  { name: 'Tiramisu', image: '/images/Tiramisu.webp', desc: 'Parfum au choix.', price: '3,30€', popularity: 89, reviews: 323 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.6 }
  }
};

const Desserts = () => {
  return (
    <section 
      id="desserts-section" 
      className="relative py-32 bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden"
    >
      {/* Background dark urban avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/6 via-transparent to-transparent"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#d4af37]/25 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-[#d4af37]/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#d4af37]/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 right-2/3 w-1.5 h-1.5 bg-[#d4af37]/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#e5e5e5] mb-6 tracking-tight leading-none">
            Nos <span className="text-[#d4af37]">Desserts</span>
          </h2>
          <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8" />
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Terminez votre repas sur une note sucrée avec nos desserts maison préparés avec amour.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {desserts.map((dessert) => (
            <motion.div 
              key={dessert.name} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-3xl p-10 flex flex-col items-center hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:scale-105 max-w-lg w-full"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/8 via-transparent to-[#d4af37]/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={dessert.image} 
                    alt={dessert.name} 
                    className="w-52 h-52 object-cover rounded-full border-2 border-[#d4af37]/30 shadow-2xl" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-6 rounded-full bg-[#d4af37]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="font-serif text-3xl text-[#d4af37] font-light mb-4 tracking-wide">{dessert.name}</h3>
                <p className="text-gray-400 text-center mb-6 font-light leading-relaxed text-lg">{dessert.desc}</p>
                
                <div className="flex flex-col items-center w-full mb-6 space-y-4">
                  <span className="text-2xl font-medium text-[#e5e5e5]">{dessert.price}</span>
                  <span className="bg-[#d4af37]/10 text-[#d4af37] font-medium px-6 py-3 rounded-full text-sm flex items-center border border-[#d4af37]/20">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {dessert.popularity}% ({dessert.reviews} avis)
                  </span>
                </div>
                
                <button className="w-full px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:scale-105 border border-[#d4af37]/30 tracking-wide text-lg">
                  Commander
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Éléments décoratifs dark urban */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Desserts;