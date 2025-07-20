import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sandwiches = [
  { 
    id: 1,
    name: "Le Home's Poulet", 
    image: "/images/Le Home's Poulet.webp", 
    desc: "Pain fromagé maison, blanc de poulet, salade, tomates, oignons, cheddar et sauces au choix", 
    price: "9,20€", 
    category: "Burgers",
    popular: true,
    rating: 4.8,
    cookTime: "12 min"
  },
  { 
    id: 2,
    name: "Le Chicken Roll", 
    image: "/images/Le Chicken Roll.webp", 
    desc: "Tortilla, filet de poulet pané et salade", 
    price: "7,20€", 
    category: "Poulet",
    popular: false,
    rating: 4.6,
    cookTime: "8 min"
  },
  { 
    id: 3,
    name: "Le Torticheese", 
    image: "/images/Le Torticheese.webp", 
    desc: "Tortilla, poulet pané, steak de bœuf, salade, cheddar, boursin et sauces au choix", 
    price: "9,20€", 
    category: "Menus",
    popular: true,
    rating: 4.9,
    cookTime: "15 min"
  },
  { 
    id: 4,
    name: "Le Poulet Cheese", 
    image: "/images/Le Poulet Cheese.webp", 
    desc: "Pain burger, filet de poulet pané, salade, cheddar et mayonnaise", 
    price: "7,20€", 
    category: "Poulet",
    popular: false,
    rating: 4.5,
    cookTime: "10 min"
  },
  { 
    id: 5,
    name: "Le Spécial Steak", 
    image: "/images/Le Spécial Steak.jpeg", 
    desc: "Pain maison, steak de bœuf, salade, tomates, oignons, œuf, cheddar et sauces au choix", 
    price: "9,20€", 
    category: "Burgers",
    popular: true,
    rating: 4.7,
    cookTime: "18 min"
  },
  { 
    id: 6,
    name: "Le Triple Bœuf Burger", 
    image: "/images/Le Triple Bœuf Burger.jpeg", 
    desc: "Pain burger, 3 steaks de bœuf, salade, cheddar et sauce burger", 
    price: "7,20€", 
    category: "Burgers",
    popular: false,
    rating: 4.4,
    cookTime: "16 min"
  }
];

const SimpleMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const categories = ['All', 'Burgers', 'Poulet', 'Menus'];
  
  const filteredSandwiches = sandwiches;

  return (
    <section 
      id="simple-menu" 
      className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header dark urban */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 text-[#e5e5e5] tracking-tight leading-none"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explorez notre <span className="text-[#d4af37] italic">Menu</span>
          </motion.h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 sm:mb-8 lg:mb-10"></div>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-4">
            Street food d'exception dans l'univers urbain. Chaque bouchée raconte une histoire de saveurs authentiques.
          </p>
        </motion.div>

        {/* Grille dark urban avec glassmorphism */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSandwiches.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden rounded-xl sm:rounded-2xl"
                style={{
                  boxShadow: hoveredItem === item.id ? '0 25px 50px -12px rgba(212, 175, 55, 0.25)' : 'none'
                }}
              >
                {/* Badge populaire */}
                {item.popular && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] px-2 sm:px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                    Populaire
                  </div>
                )}

                {/* Container image dark urban */}
                <div className="relative h-48 sm:h-56 lg:h-64 xl:h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-90 contrast-110"
                    whileHover={{ scale: 1.1, brightness: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  
                  {/* Dark urban overlay avec info */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-center text-[#e5e5e5]">
                      <div className="text-sm sm:text-base lg:text-lg mb-2 font-bold">⭐ {item.rating}/5</div>
                      <div className="text-xs sm:text-sm tracking-wide">🕒 {item.cookTime}</div>
                    </div>
                  </motion.div>

                  {/* Golden glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Contenu dark urban */}
                <div className="p-4 sm:p-5 lg:p-6 xl:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-[#e5e5e5] mb-2 sm:mb-3 group-hover:text-[#d4af37] transition-colors duration-500 tracking-wide leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right ml-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#d4af37]">{item.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Actions dark urban */}
                  <div className="flex gap-2 sm:gap-3">
                    <motion.button 
                      className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30 btn-responsive"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Commander
                    </motion.button>
                    <motion.button 
                      className="py-3 sm:py-4 px-3 sm:px-4 border border-[#d4af37]/30 text-[#d4af37] hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-500 btn-responsive"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ♡
                    </motion.button>
                  </div>
                </div>

                {/* Golden border effect on hover */}
                <motion.div 
                  className="absolute inset-0 border-2 border-[#d4af37] opacity-0 pointer-events-none rounded-xl sm:rounded-2xl"
                  animate={{ 
                    opacity: hoveredItem === item.id ? 0.6 : 0,
                    scale: hoveredItem === item.id ? 1 : 0.95
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Subtle glow particles */}
                <div className="absolute top-3 sm:top-4 right-6 sm:right-8 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" style={{animationDelay: '0.5s'}}></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action dark urban */}
        <motion.div 
          className="text-center mt-16 sm:mt-20 lg:mt-24 xl:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Découvrez l'intégralité de notre univers culinaire. Plus de 50 créations vous attendent dans l'ombre urbaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.button
                className="w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 bg-[#d4af37] text-[#0a0a0a] font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-500 hover:bg-[#f4d76d] hover:shadow-lg hover:shadow-[#d4af37]/30 btn-responsive"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir la carte complète
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 border-2 border-[#d4af37] text-[#d4af37] font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a] btn-responsive"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Commander en ligne
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleMenu;