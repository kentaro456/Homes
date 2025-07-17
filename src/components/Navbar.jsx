import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Animation logo subtile dark urban
    gsap.to(logoRef.current, {
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Dark urban scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl border-b border-[#d4af37]/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5">
        {/* Logo supprimé */}

        {/* Menu desktop dark urban */}
        <div className="hidden lg:flex items-center gap-12">
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
              className="group relative text-[#e5e5e5] hover:text-[#d4af37] font-light text-sm tracking-widest uppercase transition-all duration-400 py-2"
            >
              {item.name}
              {/* Animated golden underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] group-hover:w-full transition-all duration-500 ease-out"></div>
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm -z-10"></div>
            </motion.a>
          ))}
        </div>

        {/* CTA buttons dark urban style */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-transparent border border-[#d4af37] text-[#d4af37] font-medium text-sm tracking-wide uppercase transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-[#d4af37]/30 min-h-[44px] min-w-[120px]"
          >
            Commander
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#e5e5e5] text-[#0a0a0a] font-medium text-sm tracking-wide uppercase transition-all duration-500 hover:bg-white min-h-[44px] min-w-[120px] shadow-lg"
          >
            Réserver
          </motion.button>
        </div>

        {/* Menu mobile dark urban */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative flex items-center justify-center p-3 rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300 min-h-[48px] min-w-[48px]"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#e5e5e5]">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Menu mobile plein écran dark urban */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? '100vh' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="lg:hidden fixed inset-0 top-0 bg-[#0a0a0a]/98 backdrop-blur-xl overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-12">
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
                className="block text-[#e5e5e5] hover:text-[#d4af37] font-light text-3xl py-4 tracking-widest uppercase transition-all duration-500 group"
              >
                {item.name}
                <div className="w-0 h-0.5 bg-[#d4af37] mx-auto mt-2 group-hover:w-12 transition-all duration-500"></div>
              </motion.a>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                className="text-gray-500 text-sm mt-2"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
          
          {/* Mobile CTA buttons */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-6 pt-12 w-full max-w-xs"
          >
            <button className="w-full py-4 bg-transparent border border-[#d4af37] text-[#d4af37] font-medium text-base tracking-widest uppercase transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a] min-h-[56px]">
              Commander
            </button>
            <button className="w-full py-4 bg-[#e5e5e5] text-[#0a0a0a] font-medium text-base tracking-widest uppercase transition-all duration-500 hover:bg-white min-h-[56px]">
              Réserver
            </button>
          </motion.div>

          {/* Contact info stylisé */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center pt-8 border-t border-[#d4af37]/20"
          >
            <p className="text-gray-500 text-sm tracking-wide">
              📍 Savigny-le-Temple, France<br/>
              📞 +33 1 XX XX XX XX<br/>
              🕒 11h30 - 22h30
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 