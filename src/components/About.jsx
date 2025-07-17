import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animation du titre
      gsap.fromTo(titleRef.current, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animation de l'image avec effet parallax
      gsap.fromTo(imageRef.current, 
        { y: 100, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animation du contenu
      gsap.fromTo(contentRef.current.children, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animation des cartes de valeurs
      gsap.fromTo(valuesRef.current.children, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Effet parallax sur l'image
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: "🥘",
      title: "Cuisine Halal",
      description: "100% halal, certifié et contrôlé selon les normes les plus strictes"
    },
    {
      icon: "🌟",
      title: "Qualité Premium",
      description: "Ingrédients frais sélectionnés avec soin pour une expérience gustative exceptionnelle"
    },
    {
      icon: "🚀",
      title: "Livraison Express",
      description: "Service de livraison rapide et efficace pour savourer nos plats chez vous"
    },
    {
      icon: "👨‍🍳",
      title: "Savoir-faire",
      description: "Équipe passionnée et expérimentée pour vous offrir le meilleur de la street food"
    }
  ];

  return (
    <section 
      id="about-section" 
      ref={sectionRef}
      className="py-20 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/5 via-transparent to-transparent"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#d4af37] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section titre principal */}
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#e5e5e5] mb-6 tracking-tight leading-tight">
              À propos de 
              <span className="text-[#d4af37] block md:inline md:ml-4">HOME'S</span>
            </h2>
            <div className="mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              L'excellence culinaire halal rencontre l'innovation urbaine dans une expérience gastronomique unique
            </p>
          </div>
        </div>

        {/* Section principale avec image et contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Image avec effet glassmorphism */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/images/restaurant-presentation.jpg" 
                alt="Présentation du restaurant HOME'S" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay avec glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge décoratif */}
              <div className="absolute top-6 right-6 bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/30 rounded-full px-4 py-2">
                <span className="text-[#d4af37] text-sm font-medium">Depuis 2018</span>
              </div>
            </div>
          </motion.div>

          {/* Contenu textuel */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#e5e5e5] mb-6">
                Notre <span className="text-[#d4af37]">Histoire</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                Depuis notre ouverture à Savigny-le-Temple, nous avons révolutionné la street food halal en alliant tradition culinaire et innovation urbaine. Notre équipe passionnée vous accueille dans une ambiance moderne et chaleureuse.
              </p>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Chez HOME'S, chaque recette est élaborée avec soin pour satisfaire toutes les envies : burgers gourmands, poulet croustillant, menus généreux et desserts maison. Nous sommes fiers de vous offrir une expérience culinaire unique, sur place ou en livraison.
              </p>
            </div>

            {/* Stats avec design urban */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4.8★", label: "Note moyenne" },
                { value: "1000+", label: "Clients satisfaits" },
                { value: "100%", label: "Halal certifié" },
                { value: "15min", label: "Livraison moyenne" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl p-4 text-center hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-[#d4af37] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Section valeurs avec cartes glassmorphism */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#e5e5e5] mb-4">
              Nos <span className="text-[#d4af37]">Valeurs</span>
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Ce qui nous anime au quotidien pour vous offrir la meilleure expérience
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 hover:bg-[#1a1a1a]/60 transition-all duration-500 hover:scale-105"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#e5e5e5] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-[#e5e5e5] mb-4">
              Prêt à vivre l'expérience HOME'S ?
            </h3>
            <p className="text-gray-400 mb-8 font-light">
              Découvrez notre cuisine halal d'exception et laissez-vous séduire par nos saveurs authentiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-medium rounded-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Commander maintenant</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4d76d] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-8 py-3 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-medium rounded-lg transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:scale-105">
                <span className="relative z-10">Nous découvrir</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;