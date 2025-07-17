import React from 'react';
import { motion } from 'framer-motion';

const specialMenus = [
  { name: "Menu Le Home's Poulet", image: "/images/Menu Le Home's Poulets.webp", desc: "Pain fromagé maison, blanc de poulet, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 94, reviews: 4315, tag: "Populaire" },
  { name: "Menu Le Home's Steak", image: "/images/Menu Le Home's Steak.webp", desc: "Pain fromagé maison, steak de bœuf, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 1080, tag: "Signature" },
  { name: "Menu Le Torticheese", image: "/images/Menu Le Torticheese.webp", desc: "Tortilla, poulet pané, steak de bœuf, salade, cheddar, boursin et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 260, tag: "Fusion" },
  { name: "Menu Le Chicken Roll", image: "/images/Menu Le Chicken Roll.webp", desc: "Tortilla, filet de poulet pané et salade. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 87, reviews: 208, tag: "Street" },
  { name: "Menu Le Spécial Steak", image: "/images/Menu Le Spécial Steak.jpeg", desc: "Pain maison, steak de bœuf, salade, tomates, oignons, œuf, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 145, tag: "Premium" },
  { name: "Menu Le Spécial Poulet", image: "/images/Menu Le Spécial Poulet.webp", desc: "Pain maison, blanc de poulet, salade, tomates, oignons, œuf, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 137, tag: "Premium" },
  { name: "Menu Le Poulet Cheese", image: "/images/Menu Le Poulet Cheese.webp", desc: "Pain burger, filet de poulet pané, salade, cheddar et mayonnaise. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 84, reviews: 89, tag: "Classique" },
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
      className="py-24 lg:py-32 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-[#e5e5e5] tracking-tight leading-none"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Menus <span className="text-[#d4af37] italic">Spéciaux</span>
          </motion.h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10"></div>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Des formules généreuses à partager en famille ou entre amis. L'authenticité halal dans chaque bouchée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialMenus.map((menu, index) => (
            <motion.div 
              key={menu.name} 
              className="group relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-[#d4af37]/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                {menu.tag}
              </div>

              {/* Image */}
              <div className="relative mb-6">
                <motion.img 
                  src={menu.image} 
                  alt={menu.name} 
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-light text-[#e5e5e5] mb-3 group-hover:text-[#d4af37] transition-colors duration-500 text-center">
                {menu.name}
              </h3>
              <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed line-clamp-3">
                {menu.desc}
              </p>
              <span className="text-2xl font-bold text-[#d4af37] mb-4">{menu.price}</span>
              
              {/* Stats */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#d4af37]/20 text-[#d4af37] font-medium px-3 py-1 rounded-full text-xs flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {menu.popularity}% ({menu.reviews})
                </div>
              </div>

              {/* Button */}
              <motion.button 
                className="mt-auto px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold text-sm tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30 w-full"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Commander
              </motion.button>

              {/* Hover particles */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-8 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" style={{animationDelay: '0.5s'}}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenus; 