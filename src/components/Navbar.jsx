import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    // Animation logo subtile noir et blanc
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Effet de scroll noir et blanc
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonctions pour gérer les actions
  const handleOrder = () => {
    setShowOrderModal(true);
    setIsMobileMenuOpen(false);
  };

  const closeModals = () => {
    setShowOrderModal(false);
  };

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            ref={logoRef}
            src="/images/logo-homes.png" 
            alt="HOME'S" 
            className="h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain filter grayscale"
          />
          <span className="ml-2 sm:ml-3 font-serif text-base sm:text-xl lg:text-2xl font-light text-white">
            HOME'S
          </span>
        </div>

        {/* Menu desktop noir et blanc */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {[
            { name: 'Menu', href: '#simple-menu' },
            { name: 'Spécialités', href: '#special-menus' },
            { name: 'Avis', href: '#reviews-section' },
            { name: 'Contact', href: '#contact-section' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group relative text-[#e5e5e5] hover:text-white font-light text-sm xl:text-base tracking-widest uppercase transition-all duration-400 py-2"
            >
              {item.name}
              {/* Underline blanc animé */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-500 ease-out"></div>
              {/* Glow subtil */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm -z-10"></div>
            </motion.a>
          ))}
        </div>

        {/* CTA button style noir et blanc */}
        <div className="hidden md:flex items-center">
          <motion.button
            onClick={handleOrder}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-transparent border border-white text-white font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-500 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/30 btn-responsive"
          >
            <span className="hidden sm:inline">Commander</span>
            <span className="sm:hidden">🛒</span>
          </motion.button>
        </div>

        {/* Menu mobile noir et blanc */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 btn-responsive"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[#e5e5e5]">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Menu mobile plein écran noir et blanc */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? '100vh' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="md:hidden fixed inset-0 top-0 bg-[#0a0a0a]/98 backdrop-blur-xl overflow-hidden"
      >
        {/* Bouton fermer avec croix */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          aria-label="Fermer le menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[#e5e5e5]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full px-4 space-y-6 sm:space-y-8">
          {/* Logo dans le menu mobile */}
          <div className="flex items-center mb-2">
            <img src="/images/logo-homes.png" alt="HOME'S" className="h-10 w-10 sm:h-12 sm:w-12 object-contain filter grayscale" />
            <span className="ml-3 font-serif text-xl sm:text-2xl font-light text-white">HOME'S</span>
          </div>

          {/* Navigation links centrés */}
          {[
            { name: 'Menu', href: '#simple-menu', desc: 'Nos créations signature' },
            { name: 'Spécialités', href: '#special-menus', desc: 'Menus d\'exception' },
            { name: 'Avis', href: '#reviews-section', desc: 'Témoignages clients' },
            { name: 'Contact', href: '#contact-section', desc: 'Nous rejoindre' }
          ].map((item, index) => (
            <motion.div key={item.name} className="text-center">
              <motion.a
                href={item.href}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#e5e5e5] hover:text-white font-light text-xl sm:text-2xl lg:text-3xl py-2 sm:py-3 tracking-widest uppercase transition-all duration-500 group btn-responsive"
              >
                {item.name}
                <div className="w-0 h-0.5 bg-white mx-auto mt-2 group-hover:w-12 transition-all duration-500"></div>
              </motion.a>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
          
          {/* Mobile CTA button */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-6 sm:pt-8 w-full max-w-xs"
          >
            <button 
              onClick={handleOrder}
              className="w-full py-2.5 sm:py-3 bg-transparent border border-white text-white font-medium text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-black btn-responsive"
            >
              Commander
            </button>
          </motion.div>

          {/* Contact info stylisé */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center pt-4 sm:pt-6 border-t border-white/20"
          >
            <p className="text-gray-500 text-xs tracking-wide leading-relaxed">
              📍 Savigny-le-Temple, France<br/>
              📞 +33 1 XX XX XX XX<br/>
              🕒 11h30 - 22h30
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal de commande */}
      {showOrderModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModals}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-black">Commander en ligne</h2>
              <button
                onClick={closeModals}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">Choisissez votre option de commande :</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://www.ubereats.com', '_blank')}
                  className="w-full p-4 border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">🚗</span>
                  <span className="font-semibold">Uber Eats</span>
                </button>
                
                <button 
                  onClick={() => window.open('https://www.deliveroo.fr', '_blank')}
                  className="w-full p-4 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">🚴</span>
                  <span className="font-semibold">Deliveroo</span>
                </button>
                
                <button 
                  onClick={() => window.open('tel:+33164107790', '_blank')}
                  className="w-full p-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">📞</span>
                  <span className="font-semibold">Commander par téléphone</span>
                </button>
              </div>
            </div>
            
            <button
              onClick={closeModals}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}


    </motion.nav>
  );
};

export default Navbar; 