import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuData } from '../data/menu';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current.children, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="menu-section"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            ref={titleRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Nos <span className="text-gold">Spécialités</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Découvrez nos plats signature, préparés avec passion et des ingrédients de qualité premium
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {menuData.featuredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gold/20 to-gray-800 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gold text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {item.category}
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="text-gold font-bold text-xl sm:text-2xl mb-1">{item.price}</div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {item.description}
                </p>

                <button className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Ajouter au panier
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Voir le menu complet</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;