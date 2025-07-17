import React from 'react';
import { motion } from 'framer-motion';

const drinks = [
  { name: 'Pepsi', image: '/images/pepsi-33cl.jpg', format: '33cl', price: '1,90€', popularity: 92, reviews: 25 },
  { name: 'Pepsi Max', image: '/images/pepsi-max-33cl.jpg', format: '33cl', price: '1,90€', popularity: 86, reviews: 15 },
  { name: 'Pepsi', image: '/images/pepsi-1.5l.jpg', format: '1,5L', price: '3,30€', popularity: 94, reviews: 38 },
  { name: '7 Up', image: '/images/7up-1.5l.jpg', format: '1,5L', price: '3,30€', popularity: 92, reviews: 13 },
  { name: '7 Up exotique', image: '/images/7up-exotique-33cl.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 25 },
  { name: '7 Up mojito', image: '/images/7up-mojito-33cl.jpg', format: '33cl', price: '1,90€', popularity: 90, reviews: 11 },
  { name: '7 Up cherry', image: '/images/7upcherry.webp', format: '33cl', price: '1,90€', popularity: 100, reviews: 19 },
  { name: 'Mirinda', image: '/images/mirinda-33cl.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 14 },
  { name: 'Ice Tea pêche', image: '/images/lipton-icetea-peche.png', format: '33cl', price: '1,90€', popularity: 100, reviews: 19 },
  { name: 'Ice Tea pêche', image: '/images/lipton-icetea-peche.png', format: '1,5L', price: '3,30€', popularity: 95, reviews: 23 },
  { name: 'Ice Tea pastèque menthe', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 100, reviews: 20 },
  { name: 'Ice Tea framboise', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 95, reviews: 21 },
  { name: 'Pesie', image: '/images/pesie.jpeg', format: '33cl', price: '2,00€', popularity: null, reviews: null },
  { name: 'Eau minérale', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 83, reviews: 6 },
  { name: '7 Up', image: '/images/7up-1.5l.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 14 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.05 }
  })
};

const Drinks = () => {
  return (
    <section 
      id="drinks-section" 
      className="relative py-32 bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden"
    >
      {/* Background dark urban avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/4 via-transparent to-transparent"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-[#d4af37]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#d4af37]/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-[#d4af37]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 right-1/2 w-1.5 h-1.5 bg-[#d4af37]/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#e5e5e5] mb-6 tracking-tight leading-none">
            Nos <span className="text-[#d4af37]">Boissons</span>
          </h2>
          <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8" />
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Un large choix de boissons fraîches pour accompagner parfaitement votre repas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {drinks.map((drink, index) => (
            <motion.div 
              key={drink.name + drink.format} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="group relative bg-[#1a1a1a]/30 backdrop-blur-lg border border-[#d4af37]/15 rounded-2xl p-4 flex flex-col items-center hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10 hover:scale-105"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#d4af37]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="w-16 h-16 object-contain" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                
                <h3 className="font-serif text-sm text-[#d4af37] font-medium mb-1 text-center leading-tight">{drink.name}</h3>
                <span className="text-gray-400 text-xs mb-2 font-light">{drink.format}</span>
                <span className="text-sm font-medium text-[#e5e5e5] mb-3">{drink.price}</span>
                
                {drink.popularity && (
                  <span className="bg-[#d4af37]/10 text-[#d4af37] font-medium px-3 py-1 rounded-full text-xs flex items-center mb-3 border border-[#d4af37]/20">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {drink.popularity}%{drink.reviews && ` (${drink.reviews})`}
                  </span>
                )}
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:scale-105 border border-[#d4af37]/30 text-xs tracking-wide">
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

export default Drinks;