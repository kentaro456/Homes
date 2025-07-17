import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingElements = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des éléments flottants avec effets de glow
      elementsRef.current.forEach((element, index) => {
        if (element) {
          // Animation verticale avec variation
          gsap.to(element, {
            y: "+=30",
            duration: 3 + index * 0.7,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.4
          });

          // Animation horizontale subtile
          gsap.to(element, {
            x: "+=15",
            duration: 4 + index * 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
          });

          // Rotation lente pour les éléments géométriques
          gsap.to(element, {
            rotation: 360,
            duration: 15 + index * 3,
            ease: "none",
            repeat: -1
          });

          // Animation d'opacité pour effet de scintillement
          gsap.to(element, {
            opacity: "+=0.3",
            duration: 2 + index * 0.3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Particules flottantes avec glow effect */}
      <div 
        ref={addToRefs}
        className="absolute top-20 left-20 w-4 h-4 bg-[#d4af37] rounded-full opacity-40 blur-[0.5px] shadow-[0_0_20px_#d4af37]"
      />
      <div 
        ref={addToRefs}
        className="absolute top-40 right-32 w-6 h-6 bg-[#d4af37] rounded-full opacity-30 blur-[0.5px] shadow-[0_0_25px_#d4af37]"
      />
      <div 
        ref={addToRefs}
        className="absolute top-60 left-1/4 w-3 h-3 bg-[#d4af37] rounded-full opacity-50 blur-[0.5px] shadow-[0_0_15px_#d4af37]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-40 right-20 w-5 h-5 bg-[#d4af37] rounded-full opacity-35 blur-[0.5px] shadow-[0_0_22px_#d4af37]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-20 left-40 w-4 h-4 bg-[#d4af37] rounded-full opacity-45 blur-[0.5px] shadow-[0_0_18px_#d4af37]"
      />
      
      {/* Formes géométriques avec border glow */}
      <div 
        ref={addToRefs}
        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[#d4af37] opacity-25 transform rotate-45 shadow-[0_0_20px_#d4af37]/50"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-1/3 left-1/3 w-6 h-6 border-2 border-[#d4af37] opacity-35 rounded-full shadow-[0_0_18px_#d4af37]/50"
      />
      <div 
        ref={addToRefs}
        className="absolute top-1/2 left-20 w-10 h-1 bg-[#d4af37] opacity-25 shadow-[0_0_15px_#d4af37] blur-[0.5px]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-1/2 right-40 w-1 h-10 bg-[#d4af37] opacity-30 shadow-[0_0_15px_#d4af37] blur-[0.5px]"
      />
      
      {/* Particules plus grandes avec gradient et glow */}
      <div 
        ref={addToRefs}
        className="absolute top-80 right-60 w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f4d76d] rounded-full opacity-15 shadow-[0_0_40px_#d4af37] blur-[1px]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-80 left-60 w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4d76d] rounded-full opacity-10 shadow-[0_0_50px_#d4af37] blur-[1px]"
      />
      
      {/* Étoiles avec glow effect */}
      <div ref={addToRefs} className="absolute top-32 right-1/3 text-[#d4af37] opacity-40 text-xl drop-shadow-[0_0_10px_#d4af37]">
        ✦
      </div>
      <div ref={addToRefs} className="absolute bottom-32 left-1/3 text-[#d4af37] opacity-50 text-2xl drop-shadow-[0_0_15px_#d4af37]">
        ✦
      </div>
      <div ref={addToRefs} className="absolute top-1/2 right-1/2 text-[#d4af37] opacity-30 text-lg drop-shadow-[0_0_8px_#d4af37]">
        ✦
      </div>
      
      {/* Éléments supplémentaires pour effet urban */}
      <div 
        ref={addToRefs}
        className="absolute top-10 right-10 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 shadow-[0_0_10px_#d4af37] blur-[0.5px]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-10 left-10 w-2 h-2 bg-[#d4af37] rounded-full opacity-55 shadow-[0_0_12px_#d4af37] blur-[0.5px]"
      />
      
      {/* Lignes décoratives avec glow */}
      <div 
        ref={addToRefs}
        className="absolute top-1/4 right-1/5 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-20 shadow-[0_0_8px_#d4af37]"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-1/4 left-1/5 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-25 shadow-[0_0_8px_#d4af37]"
      />
      
      {/* Hexagones géométriques */}
      <div 
        ref={addToRefs}
        className="absolute top-1/4 left-1/5 w-4 h-4 border border-[#d4af37]/30 transform rotate-45 opacity-20 shadow-[0_0_15px_#d4af37]/30"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      />
    </div>
  );
};

export default FloatingElements;