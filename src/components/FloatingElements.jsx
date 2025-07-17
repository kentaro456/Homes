import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingElements = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des éléments flottants
      elementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: "+=20",
            duration: 2 + index * 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
          });

          gsap.to(element, {
            x: "+=10",
            duration: 3 + index * 0.3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
          });

          gsap.to(element, {
            rotation: 360,
            duration: 10 + index * 2,
            ease: "none",
            repeat: -1
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
      {/* Éléments flottants dorés */}
      <div 
        ref={addToRefs}
        className="absolute top-20 left-20 w-4 h-4 bg-gold rounded-full opacity-30"
      />
      <div 
        ref={addToRefs}
        className="absolute top-40 right-32 w-6 h-6 bg-gold rounded-full opacity-20"
      />
      <div 
        ref={addToRefs}
        className="absolute top-60 left-1/4 w-3 h-3 bg-gold rounded-full opacity-40"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-40 right-20 w-5 h-5 bg-gold rounded-full opacity-25"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-20 left-40 w-4 h-4 bg-gold rounded-full opacity-35"
      />
      
      {/* Formes géométriques */}
      <div 
        ref={addToRefs}
        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-gold opacity-20 transform rotate-45"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-1/3 left-1/3 w-6 h-6 border-2 border-gold opacity-30 rounded-full"
      />
      <div 
        ref={addToRefs}
        className="absolute top-1/2 left-20 w-10 h-1 bg-gold opacity-20"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-1/2 right-40 w-1 h-10 bg-gold opacity-25"
      />
      
      {/* Particules plus grandes */}
      <div 
        ref={addToRefs}
        className="absolute top-80 right-60 w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-full opacity-10"
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-80 left-60 w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full opacity-5"
      />
      
      {/* Étoiles */}
      <div ref={addToRefs} className="absolute top-32 right-1/3 text-gold opacity-30 text-xl">
        ✦
      </div>
      <div ref={addToRefs} className="absolute bottom-32 left-1/3 text-gold opacity-40 text-2xl">
        ✦
      </div>
      <div ref={addToRefs} className="absolute top-1/2 right-1/2 text-gold opacity-20 text-lg">
        ✦
      </div>
    </div>
  );
};

export default FloatingElements;