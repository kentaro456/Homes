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
      tl.from(videoRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 3,
        ease: "power2.out"
      })
      .from(overlayRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=2")
      .from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
      }, "-=1")
      .from(subtitleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8")
      .from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.6");

      // Parallax vidéo immersif
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
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Video Background - Dark Urban Cinematic */}
      <div className="absolute inset-0">
        <div 
          ref={videoRef}
          className="absolute inset-0 transform scale-110"
        >
          {/* Placeholder for video - using image for now */}
          <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat opacity-100"></div>
          {/* Video element (can be added later) */}
          {/* <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            src="/videos/burger-grill-slowmo.mp4"
          ></video> */}
        </div>
        
        {/* Overlay subtil pour lisibilité du texte (uniquement en bas) */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
      </div>

      {/* Contenu principal supprimé : Hero = image de fond + overlay uniquement */}

      {/* Subtle geometric patterns overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;