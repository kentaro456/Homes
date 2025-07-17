import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DrinkCarousel = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const titleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const drinks = [
    {
      id: 1,
      name: "Pepsi Original",
      description: "Le goût authentique de la street food",
      price: "1,90 €",
      image: "/images/pepsi-33cl.jpg",
      gradient: "from-[#d4af37]/20 to-[#0a0a0a]"
    },
    {
      id: 2,
      name: "Pepsi Max",
      description: "Un max de goût, zéro compromis",
      price: "1,90 €",
      image: "/images/pepsi-max-33cl.jpg",
      gradient: "from-[#1a1a1a] to-[#0a0a0a]"
    },
    {
      id: 3,
      name: "7UP Original",
      description: "Citron & citron vert, fraîcheur urbaine",
      price: "1,90 €",
      image: "/images/7up-exotique-33cl.jpg",
      gradient: "from-[#d4af37]/15 to-[#0a0a0a]"
    },
    {
      id: 4,
      name: "7UP Mojito",
      description: "Saveur mojito, esprit street",
      price: "1,90 €",
      image: "/images/7up-mojito-33cl.jpg",
      gradient: "from-[#d4af37]/10 to-[#0a0a0a]"
    },
    {
      id: 5,
      name: "Mirinda Orange",
      description: "Goût orange, énergie urbaine",
      price: "1,90 €",
      image: "/images/mirinda-33cl.jpg",
      gradient: "from-[#d4af37]/25 to-[#0a0a0a]"
    },
    {
      id: 6,
      name: "Pepsi 1.5L",
      description: "Format familial, partage authentique",
      price: "3,30 €",
      image: "/images/pepsi-1.5l.jpg",
      gradient: "from-[#d4af37]/20 to-[#0a0a0a]"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation dark urban immersive
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      })
      .from(carouselRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % drinks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [drinks.length]);

  const nextDrink = () => {
    setCurrentIndex((prev) => (prev + 1) % drinks.length);
  };

  const prevDrink = () => {
    setCurrentIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden relative"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-[#e5e5e5] tracking-tight leading-none"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Nos <span className="text-[#d4af37] italic">Boissons</span>
          </motion.h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10"></div>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Une sélection premium de boissons rafraîchissantes pour accompagner parfaitement l'expérience HOME'S
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container Dark Urban */}
          <div 
            ref={carouselRef}
            className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-[#d4af37]/20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className={`h-full bg-gradient-to-br ${drinks[currentIndex].gradient} relative overflow-hidden backdrop-blur-lg`}>
                  {/* Background Pattern dark urban */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#d4af37]/20 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#d4af37]/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#d4af37]/15 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>

                  <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16">
                    {/* Text Content */}
                    <div className="flex-1 max-w-md">
                      <motion.h3 
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-[#e5e5e5] tracking-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {drinks[currentIndex].name}
                      </motion.h3>
                      <motion.p 
                        className="text-lg md:text-xl text-gray-400 mb-6 font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {drinks[currentIndex].description}
                      </motion.p>
                      <motion.div 
                        className="flex items-center space-x-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <span className="text-3xl md:text-4xl font-bold text-[#d4af37]">
                          {drinks[currentIndex].price}
                        </span>
                        <span className="text-gray-500 text-lg">33cl</span>
                      </motion.div>
                      <motion.button 
                        className="bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold py-4 px-8 text-sm tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30 rounded-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ajouter au panier
                      </motion.button>
                    </div>

                    {/* Product Image */}
                    <div className="flex-1 flex justify-center items-center">
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-3xl transform scale-150"></div>
                        <motion.img 
                          src={drinks[currentIndex].image} 
                          alt={drinks[currentIndex].name}
                          className="relative z-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons Dark Urban */}
          <motion.button 
            onClick={prevDrink}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a]/80 hover:bg-[#d4af37]/20 text-[#e5e5e5] hover:text-[#d4af37] p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#d4af37]/20 hover:border-[#d4af37]/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button 
            onClick={nextDrink}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a]/80 hover:bg-[#d4af37]/20 text-[#e5e5e5] hover:text-[#d4af37] p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#d4af37]/20 hover:border-[#d4af37]/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots Indicator Dark Urban */}
          <div className="flex justify-center mt-8 space-x-3">
            {drinks.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#d4af37] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkCarousel;