import React from 'react';
import { motion } from 'framer-motion';

const Delivery = () => {
  const advantages = [
    {
      icon: "🚀",
      title: "Livraison Express",
      description: "15 minutes chrono dans toute la ville",
      detail: "Nos livreurs sont formés pour une livraison rapide et soignée"
    },
    {
      icon: "✓",
      title: "100% Halal",
      description: "Certifié et contrôlé quotidiennement",
      detail: "Tous nos produits respectent les normes halal strictes"
    },
    {
      icon: "🔥",
      title: "Fraîcheur Garantie",
      description: "Préparé à la commande, servi chaud",
      detail: "Emballages isothermes pour une fraîcheur optimale"
    },
    {
      icon: "💳",
      title: "Paiement Sécurisé",
      description: "Carte, espèces ou paiement mobile",
      detail: "Transactions sécurisées avec cryptage SSL"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 }
    })
  };

  return (
    <section 
      id="delivery-section" 
      className="py-24 lg:py-32 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header dark urban */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-[#e5e5e5] tracking-tight leading-none">
            Livraison & <span className="text-[#d4af37] italic">Avantages</span>
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10"></div>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Une expérience culinaire premium avec un service irréprochable. Street food chic livrée à domicile.
          </p>
        </motion.div>

        {/* Grille avantages dark urban */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="group relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-[#d4af37]/20"
            >
              {/* Icon avec glow effect */}
              <div className="text-5xl mb-6 relative inline-block">
                <span className="relative z-10">{advantage.icon}</span>
                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-serif text-xl lg:text-2xl font-light text-[#e5e5e5] mb-4 group-hover:text-[#d4af37] transition-colors duration-500">
                {advantage.title}
              </h3>
              
              <p className="text-[#d4af37] text-base font-medium mb-4 tracking-wide">
                {advantage.description}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {advantage.detail}
              </p>

              {/* Hover effect particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" style={{animationDelay: '0.5s'}}></div>
            </motion.div>
          ))}
        </div>

        {/* Section partenaires dark urban */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
          >
            <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#e5e5e5] mb-8">
              Partenaires de <span className="text-[#d4af37]">Livraison</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* UberEats */}
              <div className="flex flex-col items-center group">
                <div className="bg-[#2a2a2a] p-6 rounded-2xl mb-4 group-hover:bg-[#d4af37]/10 transition-colors duration-500 border border-[#d4af37]/20">
                  <img src="/images/ubereat.png" alt="UberEats" className="h-12 w-auto brightness-90 group-hover:brightness-100 transition-all duration-300" />
                </div>
                <span className="text-gray-400 text-sm tracking-wide">Disponible sur UberEats</span>
              </div>

              {/* Téléphone */}
              <div className="flex flex-col items-center group">
                <div className="bg-[#2a2a2a] p-6 rounded-2xl mb-4 group-hover:bg-[#d4af37]/10 transition-colors duration-500 border border-[#d4af37]/20">
                  <div className="text-3xl">📞</div>
                </div>
                <span className="text-gray-400 text-sm tracking-wide">Commande par téléphone</span>
                <span className="text-[#d4af37] text-lg font-medium mt-2">+33 1 XX XX XX XX</span>
              </div>

              {/* Sur place */}
              <div className="flex flex-col items-center group">
                <div className="bg-[#2a2a2a] p-6 rounded-2xl mb-4 group-hover:bg-[#d4af37]/10 transition-colors duration-500 border border-[#d4af37]/20">
                  <div className="text-3xl">🏪</div>
                </div>
                <span className="text-gray-400 text-sm tracking-wide">À emporter sur place</span>
                <span className="text-[#d4af37] text-sm font-medium mt-2">Savigny-le-Temple</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-12 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold text-base tracking-wide uppercase transition-all duration-500 hover:bg-[#f4d76d] hover:shadow-lg hover:shadow-[#d4af37]/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Commander maintenant
              </motion.button>
              <motion.button
                className="px-12 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold text-base tracking-wide uppercase transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir horaires
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Delivery; 