import React from 'react';
import { motion } from 'framer-motion';

const specialMenus = [
  { name: "Menu Le Home's Poulet", image: "/images/Menu Le Home's Poulets.webp", desc: "Pain fromagé maison, blanc de poulet, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 94, reviews: 4315, tag: "Populaire" },
  { name: "Menu Le Home's Steak", image: "/images/Menu Le Home's Steak.webp", desc: "Pain fromagé maison, steak de bœuf, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 1080, tag: "Signature" },
  { name: "Menu Le Torticheese", image: "/images/Menu Le Torticheese.webp", desc: "Tortilla, poulet pané, steak de bœuf, salade, cheddar, boursin et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 260, tag: "Fusion" },
  { name: "Menu Le Chicken Roll", image: "/images/Menu Le Chicken Roll.webp", desc: "Tortilla, filet de poulet pané et salade. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 87, reviews: 208, tag: "Street" },
  { name: "Menu Le Spécial Poulet", image: "/images/Menu Le Spécial Poulet.webp", desc: "Pain maison, blanc de poulet, salade, tomates, oignons, œuf, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 137, tag: "Premium" },
  { name: "Menu Le Bœuf Burger", image: "/images/Menu Le Bœuf Burger.webp", desc: "Pain burger, 2 steaks de bœuf, salade, cheddar et sauce burger. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 74, reviews: 86, tag: "Classique" },
  { name: "Menu Le Seekh Roll", image: "/images/Menu Le Seekh Roll.webp", desc: "Tortilla, agneau épicé et salade. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 84, reviews: 44, tag: "Épicé" },
  { name: "Menu Double Saveur", image: "/images/Menu Double Saveur.webp", desc: "1 burger au choix (poulet ou bœuf) et 5 wings (ailes de poulet épicées). Servi avec des frites et une boisson 33 cl au choix.", price: "10,50€", popularity: 90, reviews: 220, tag: "Mixte" },
  { name: "Menu Wings", image: "/images/Menu Wings.webp", desc: "10 wings (ailes de poulet épicées). Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 93, reviews: 356, tag: "Wings" },
  { name: "Menu Family Wings", image: "/images/Menu Family Wings.webp", desc: "30 wings (ailes de poulet épicées), 2 grandes frites et une boisson 1,5 l au choix.", price: "25,00€", popularity: 93, reviews: 388, tag: "Famille" },
  { name: "Menu Family Burger", image: "/images/Menu Family Burger.webp", desc: "3 burgers au choix (poulet ou bœuf), 3 frites, 9 wings (ailes de poulet épicées) et une boisson 1,5l au choix.", price: "25,00€", popularity: 87, reviews: 62, tag: "Famille" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1 }
  })
};

const SpecialMenus = () => {
  return (
    <section 
      id="special-menus-section" 
      className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-[#e5e5e5] tracking-tight leading-none"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Menus <span className="text-[#d4af37] italic">Spéciaux</span>
          </motion.h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 sm:mb-8"></div>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Nos menus complets vous offrent une expérience culinaire complète avec frites et boisson incluses.
          </motion.p>
        </div>

        {/* Grille responsive des menus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {specialMenus.map((menu, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#d4af37]/20"
            >
              {/* Tag populaire */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] px-2 sm:px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                {menu.tag}
              </div>

              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <motion.img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover brightness-90 contrast-110"
                  whileHover={{ scale: 1.1, brightness: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                
                {/* Stats au survol */}
                <motion.div 
                  className="absolute inset-0 bg-[#0a0a0a]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-[#e5e5e5]">
                    <div className="text-sm sm:text-base lg:text-lg mb-2 font-bold">
                      ⭐ {menu.popularity}% de satisfaction
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      📊 {menu.reviews} avis clients
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contenu */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="font-serif text-lg sm:text-xl font-light text-[#e5e5e5] group-hover:text-[#d4af37] transition-colors duration-500 tracking-wide leading-tight flex-1 mr-2">
                    {menu.name}
                  </h3>
                  <div className="text-xl sm:text-2xl font-bold text-[#d4af37]">
                    {menu.price}
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-7">
                  {menu.desc}
                </p>

                {/* Bouton d'action */}
                <motion.button 
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30 btn-responsive"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commander ce menu
                </motion.button>
              </div>

              {/* Effet de bordure dorée au survol */}
              <motion.div 
                className="absolute inset-0 border-2 border-[#d4af37] opacity-0 pointer-events-none rounded-xl sm:rounded-2xl"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Tous nos menus incluent des frites fraîches et une boisson de votre choix pour une expérience complète.
          </p>
          <motion.button
            className="px-8 sm:px-12 lg:px-16 py-4 sm:py-5 border-2 border-[#d4af37] text-[#d4af37] font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a] btn-responsive"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les menus
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMenus; 