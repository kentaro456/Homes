import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current || !contentRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animation d'entrée du footer
      gsap.fromTo(contentRef.current.children, 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const menuLinks = [
    { label: "Menu", href: "#menu-section" },
    { label: "Boissons", href: "#drinks-section" },
    { label: "Desserts", href: "#desserts-section" },
    { label: "Menus spéciaux", href: "#special-menus-section" },
    { label: "À propos", href: "#about-section" },
    { label: "Livraison", href: "#delivery-section" },
    { label: "Contact", href: "#contact-section" },
    { label: "FAQ", href: "#faq-section" }
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: "📸" },
    { label: "Facebook", href: "#", icon: "📘" },
    { label: "TikTok", href: "#", icon: "🎵" },
    { label: "Google", href: "#", icon: "🔍" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#0a0a0a] text-[#e5e5e5] pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden"
    >
      {/* Background avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/3 via-transparent to-transparent"></div>
      
      {/* Ligne de séparation dorée */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-1 h-1 bg-[#d4af37] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-1 h-1 bg-[#d4af37] rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Section Logo et Info */}
          <div className="text-center md:text-left lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img src="/images/logo-homes.png" alt="Logo HOME'S" className="h-10 w-10 sm:h-12 sm:w-12 object-contain mr-3" />
                <span className="font-serif text-xl sm:text-2xl font-light text-[#d4af37]">HOME'S</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                Restaurant halal d'exception à Savigny-le-Temple. Cuisine urban street food avec des ingrédients frais et de qualité.
              </p>
            </motion.div>
            
            {/* Informations de contact */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <span className="text-[#d4af37] mr-2 text-sm">📍</span>
                <span>Savigny-le-Temple, France</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <span className="text-[#d4af37] mr-2 text-sm">📞</span>
                <span>01 XX XX XX XX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <span className="text-[#d4af37] mr-2 text-sm">🕒</span>
                <span>Lun-Dim : 11h-23h</span>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="text-center md:text-left lg:col-span-1">
            <h3 className="font-serif text-lg sm:text-xl text-[#d4af37] mb-4 sm:mb-6 font-light">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {menuLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-gray-400 hover:text-[#d4af37] text-xs sm:text-sm transition-colors duration-300 py-1 px-2 rounded hover:bg-[#d4af37]/5 btn-responsive"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="text-center md:text-right lg:col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-lg sm:text-xl text-[#d4af37] mb-4 sm:mb-6 font-light">Suivez-nous</h3>
            <div className="flex justify-center md:justify-end lg:justify-center xl:justify-end space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative w-8 h-8 sm:w-10 sm:h-10 bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 rounded-full flex items-center justify-center hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-all duration-300 hover:scale-110 btn-responsive"
                >
                  <span className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>
            
            {/* Commande en ligne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl p-3 sm:p-4 max-w-xs mx-auto"
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-light">Commandez en ligne</p>
              <div className="flex flex-col space-y-2">
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm hover:scale-105 transition-transform duration-300 btn-responsive"
                >
                  <img src="/images/ubereat.png" alt="Uber Eats" className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Uber Eats</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-6 sm:mb-8"></div>

        {/* Copyright et mentions légales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} HOME'S Restaurant. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-300 btn-responsive">Mentions légales</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-300 btn-responsive">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-300 btn-responsive">CGU</a>
            </div>
          </div>
          
          {/* Signature */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#d4af37]/10">
            <p className="text-xs text-gray-600 font-light">
              Conçu avec ❤️ pour une expérience culinaire d'exception
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 