import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { restaurantInfo } from '../data/menu';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'entrée cinématographique dark urban
      const tl = gsap.timeline();
      
      // Vidéo qui se révèle progressivement
      if (videoRef.current) {
        tl.from(videoRef.current, {
          scale: 1.2,
          opacity: 0,
          duration: 3,
          ease: "power2.out"
        });
      }
      
      if (overlayRef.current) {
        tl.from(overlayRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        }, "-=2");
      }

      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 120,
          opacity: 0,
          duration: 2,
          ease: "power3.out"
        }, "-=1");
      }

      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        }, "-=0.8");
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        }, "-=0.6");
      }

      // Parallax vidéo immersif (uniquement sur desktop)
      if (window.innerWidth > 768 && videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // Glow effect pulsant
      gsap.to(".glow-effect", {
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    document.getElementById('simple-menu')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] min-h-[600px] max-h-[1200px] sm:w-full w-screen"
    >
      {/* Video Background - Dark Urban Cinematic */}
      <div className="absolute inset-0">
        <div 
          ref={videoRef}
          className="absolute inset-0 transform scale-110"
        >
          {/* Placeholder for video - using image for now */}
          <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-contain sm:bg-cover bg-center bg-no-repeat opacity-100"></div>
          {/* Video element (can be added later) */}
          {/* <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            playsInline
            src="/videos/burger-grill-slowmo.mp4"
          ></video> */}
        </div>
        
        {/* Overlay pour lisibilité sur mobile */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent md:from-[#0a0a0a]/80 md:via-transparent md:to-transparent md:bg-gradient-to-t md:h-1/3 md:bottom-0 md:top-auto"
        ></div>
      </div>

      {/* Contenu principal - Positionné pour ne pas cacher l'image sur mobile */}
      <div className="absolute inset-0 flex flex-col justify-end sm:justify-center z-10 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-0">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-3 sm:mb-6 text-[#e5e5e5] tracking-tight leading-tight"
          >
            <span className="block">Bienvenue</span>
            <span className="text-[#d4af37] italic">chez HOME'S</span>
          </motion.h1>
          
          <motion.p 
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            L'expérience street food urbaine redéfinie. Saveurs authentiques, qualité premium.
          </motion.p>

          <motion.div 
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center items-center"
          >
            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 sm:px-8 lg:px-12 py-2 sm:py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold text-sm sm:text-base lg:text-lg tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30 btn-responsive"
            >
              Découvrir le menu
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#d4af37] text-xl sm:text-2xl cursor-pointer"
          onClick={scrollToMenu}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Subtle geometric patterns overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse glow-effect"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse glow-effect" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse glow-effect" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;