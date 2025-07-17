import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { restaurantInfo } from '../data/menu';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(contentRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* Background overlay with dark urban gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] opacity-90"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-[#e5e5e5]"
          >
            Nous <span className="text-[#d4af37] drop-shadow-[0_0_20px_#d4af37]/50">Trouver</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <div className="bg-[#0a0a0a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-lg p-8 hover:shadow-[0_0_30px_#d4af37]/20 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-serif text-2xl font-light tracking-tight mb-6 text-[#d4af37] drop-shadow-[0_0_15px_#d4af37]/50">Informations pratiques</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-[#d4af37] mt-1 drop-shadow-[0_0_10px_#d4af37]/50">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-light text-lg mb-1 text-[#e5e5e5]">Adresse</h4>
                    <p className="text-[#e5e5e5]/80">{restaurantInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-[#d4af37] mt-1 drop-shadow-[0_0_10px_#d4af37]/50">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-light text-lg mb-1 text-[#e5e5e5]">Téléphone</h4>
                    <p className="text-[#e5e5e5]/80">{restaurantInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-[#d4af37] mt-1 drop-shadow-[0_0_10px_#d4af37]/50">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-light text-lg mb-1 text-[#e5e5e5]">Horaires</h4>
                    <p className="text-[#e5e5e5]/80">Lun - Ven: {restaurantInfo.hours.weekdays}</p>
                    <p className="text-[#e5e5e5]/80">Sam - Dim: {restaurantInfo.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-lg p-8 hover:shadow-[0_0_30px_#d4af37]/20 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-serif text-2xl font-light tracking-tight mb-6 text-[#d4af37] drop-shadow-[0_0_15px_#d4af37]/50">Moyens de paiement</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {restaurantInfo.paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]"></div>
                    <span className="text-[#e5e5e5]/80">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0a0a0a]/40 backdrop-blur-lg border border-[#d4af37]/20 rounded-lg p-8 hover:shadow-[0_0_30px_#d4af37]/20 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-serif text-2xl font-light tracking-tight mb-6 text-[#d4af37] drop-shadow-[0_0_15px_#d4af37]/50">Livraison</h3>
              
              <div className="space-y-4">
                <p className="text-[#e5e5e5]/80 mb-4">
                  Commandez en ligne via nos partenaires de livraison :
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {restaurantInfo.delivery.map((platform, index) => (
                    <button 
                      key={index}
                      className="w-full p-4 bg-[#0a0a0a]/60 backdrop-blur-lg border border-[#d4af37]/30 hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#f4d76d] hover:text-black rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_#d4af37]/50"
                    >
                      <span className="font-light tracking-tight">{platform}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#d4af37] to-[#f4d76d] rounded-lg p-8 text-black shadow-[0_0_40px_#d4af37]/30">
              <h3 className="font-serif text-2xl font-light tracking-tight mb-4">Prêt à commander ?</h3>
              <p className="mb-6 font-light">
                Découvrez notre carte complète et passez commande dès maintenant !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-[#e5e5e5] font-light tracking-tight py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#0a0a0a]/50">
                  Commander maintenant
                </button>
                <button className="flex-1 bg-transparent border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#e5e5e5] font-light tracking-tight py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#0a0a0a]/50">
                  Voir la carte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;