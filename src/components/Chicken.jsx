import React from 'react';
import { motion } from 'framer-motion';

const chickenItems = [
  { name: 'Wings x10', image: '/images/Wings x10.webp', desc: 'Ailes de poulet épicées.', price: '8,20€', popularity: 92, reviews: 938 },
  { name: 'Nuggets x10', image: '/images/Nuggets x10.webp', desc: 'Morceaux de blanc de poulet panés.', price: '7,80€', popularity: 91, reviews: 249 },
  { name: 'Wings x20', image: '/images/wings.webp', desc: 'Ailes de poulet épicées.', price: '14,90€', popularity: 93, reviews: 245 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4 + i * 0.2 }
  })
};

const Chicken = () => {
  return (
    <section 
      id="chicken-section" 
      className="relative py-32 bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden"
    >
      {/* Background dark urban avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/5 via-transparent to-transparent"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#d4af37]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#d4af37]/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#e5e5e5] mb-6 tracking-tight leading-none">
            <span className="text-[#d4af37]">Chicken</span>
          </h2>
          <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8" />
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Nos incontournables ailes et nuggets de poulet croustillants, préparés avec passion.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {chickenItems.map((item, index) => (
            <motion.div 
              key={item.name} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="group relative bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-2xl p-8 flex flex-col items-center hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:scale-105"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#d4af37]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-40 h-40 object-cover rounded-full border-2 border-[#d4af37]/30 shadow-lg" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="font-serif text-2xl text-[#d4af37] font-light mb-3 tracking-wide">{item.name}</h3>
                <p className="text-gray-400 text-center mb-4 font-light leading-relaxed">{item.desc}</p>
                
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-xl font-medium text-[#e5e5e5]">{item.price}</span>
                  <span className="bg-[#d4af37]/10 text-[#d4af37] font-medium px-4 py-2 rounded-full text-sm flex items-center border border-[#d4af37]/20">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {item.popularity}% ({item.reviews})
                  </span>
                </div>
                
                <button className="w-full px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:scale-105 border border-[#d4af37]/30 tracking-wide">
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

export default Chicken; 