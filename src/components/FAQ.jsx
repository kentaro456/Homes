import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { 
    question: "Savigny-le-Temple | Puis-je passer commande chez HOME'S et me faire livrer avec Uber Eats ?", 
    answer: "Oui, HOME'S propose la livraison à domicile via Uber Eats dans la zone de Savigny-le-Temple et alentours. Commandez en quelques clics et recevez vos plats en 15-30 minutes." 
  },
  { 
    question: "L'établissement HOME'S propose-t-il la livraison près de chez moi ?", 
    answer: "Vérifiez votre adresse sur Uber Eats pour savoir si la livraison est disponible dans votre secteur. Notre zone de livraison couvre un large périmètre autour de Savigny-le-Temple." 
  },
  { 
    question: "Savigny-le-Temple | Comment commander en ligne des articles de chez HOME'S ?", 
    answer: "Rendez-vous sur Uber Eats, recherchez HOME'S, choisissez vos plats et validez votre commande en ligne. Vous pouvez également nous appeler directement pour passer commande." 
  },
  { 
    question: "Où puis-je trouver les prix du menu proposé par HOME'S en ligne ?", 
    answer: "Tous les prix sont affichés sur notre site et sur Uber Eats lors de la commande. Nos tarifs sont transparents et sans frais cachés." 
  },
  { 
    question: "Comment bénéficier des frais de livraison offerts pour ma commande passée chez HOME'S ?", 
    answer: "Des offres promotionnelles sont régulièrement proposées sur Uber Eats. Consultez l'application pour en profiter ou suivez nos réseaux sociaux pour être informé des promotions." 
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section"
      className="py-20 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background overlay avec dégradé et particules lumineuses */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#d4af37] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Titre avec design premium */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#e5e5e5] mb-6 tracking-tight leading-tight">
            Questions 
            <span className="text-[#d4af37] block md:inline md:ml-4">fréquentes</span>
          </h2>
          <div className="mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Trouvez rapidement les réponses à vos questions sur HOME'S
          </p>
        </motion.div>

        {/* FAQ Accordéons avec glassmorphism */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Carte glassmorphism */}
              <div className="relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-[#e5e5e5] text-lg pr-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {faq.question}
                  </span>
                  {/* Icône avec animation */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-4 h-0.5 bg-[#d4af37] rounded-full"></div>
                      <div className="absolute inset-0 w-0.5 h-4 bg-[#d4af37] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </motion.div>
                </button>

                {/* Réponse avec animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent mb-4"></div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section premium */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-[#e5e5e5] mb-4">
              Besoin d'aide supplémentaire ?
            </h3>
            <p className="text-gray-400 mb-6 font-light">
              Notre équipe est là pour vous accompagner
            </p>
            <motion.button
              className="group relative px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold rounded-lg transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#d4af37]/20 border-2 border-[#d4af37]/40"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Nous contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4d76d] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 