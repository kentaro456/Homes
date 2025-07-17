import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxGallery = () => {
  const sectionRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const textRef = useRef(null);

  // Images du restaurant pour les différentes couches
  const restaurantImages = {
    layer1: [
      '/images/homes-poulet.jpg',
      '/images/double-saveur.jpg',
      '/images/restaurant-presentation.jpg',
    ],
    layer2: [
      '/images/pepsi-33cl.jpg',
      '/images/7up-mojito-33cl.jpg',
      '/images/mirinda-33cl.jpg',
    ],
    layer3: [
      '/images/pepsi-max-33cl.jpg',
      '/images/7up-exotique-33cl.jpg',
      '/images/pepsi-1.5l.jpg',
    ]
  };

  useEffect(() => {
    const section = sectionRef.current;
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const layer3 = layer3Ref.current;
    const text = textRef.current;

    if (!section || !layer1 || !layer2 || !layer3 || !text) return;

    // Animation parallax différentielle pour chaque couche
    gsap.to(layer1, {
      x: '-60%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    gsap.to(layer2, {
      x: '40%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }
    });

    gsap.to(layer3, {
      x: '-90%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      }
    });

    // Animation du texte avec effet de machine à écrire
    const letters = text.querySelectorAll('.letter');
    gsap.fromTo(letters, 
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
        filter: 'blur(10px)',
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Effet glow doré sur le texte au scroll
    gsap.to(text, {
      textShadow: '0 0 20px #d4af37, 0 0 40px #d4af37',
      duration: 0.3,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.2 && self.progress < 0.8) {
            gsap.to(text, {
              textShadow: '0 0 30px #d4af37, 0 0 60px #d4af37, 0 0 90px #d4af37',
              duration: 0.1
            });
          }
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className="letter inline-block" 
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Layer 3 - Background */}
      <div 
        ref={layer3Ref}
        className="absolute inset-0 flex items-center space-x-8 will-change-transform"
        style={{ width: '200%' }}
      >
        {[...restaurantImages.layer3, ...restaurantImages.layer3].map((image, index) => (
          <div
            key={`layer3-${index}`}
            className="flex-shrink-0 w-80 h-80 opacity-20 blur-sm"
          >
            <img
              src={image}
              alt={`Produit ${index}`}
              className="w-full h-full object-cover rounded-lg grayscale sepia brightness-50"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Layer 2 - Middle */}
      <div 
        ref={layer2Ref}
        className="absolute inset-0 flex items-center space-x-12 will-change-transform"
        style={{ width: '200%', top: '10%' }}
      >
        {[...restaurantImages.layer2, ...restaurantImages.layer2].map((image, index) => (
          <div
            key={`layer2-${index}`}
            className="flex-shrink-0 w-64 h-96 opacity-40 group"
          >
            <img
              src={image}
              alt={`Boisson ${index}`}
              className="w-full h-full object-cover rounded-xl shadow-2xl grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Layer 1 - Foreground */}
      <div 
        ref={layer1Ref}
        className="absolute inset-0 flex items-center space-x-16 will-change-transform"
        style={{ width: '200%', top: '-5%' }}
      >
        {[...restaurantImages.layer1, ...restaurantImages.layer1].map((image, index) => (
          <div
            key={`layer1-${index}`}
            className="flex-shrink-0 w-72 h-[500px] opacity-60 group"
          >
            <img
              src={image}
              alt={`Plat ${index}`}
              className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>

      {/* Main Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center max-w-6xl mx-auto px-4"
        >
          <div 
            ref={textRef}
            className="space-y-6"
          >
            {/* Saveurs Authentiques */}
            <div className="text-6xl md:text-8xl lg:text-9xl font-black font-serif tracking-tighter leading-none">
              <div className="text-white drop-shadow-2xl">
                {splitText('SAVEURS')}
              </div>
              <div className="text-gold drop-shadow-2xl" style={{ textShadow: '0 0 20px #d4af37' }}>
                {splitText('AUTHENTIQUES')}
              </div>
            </div>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-2 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto max-w-md"
            ></motion.div>

            {/* Halal Excellence */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-black font-serif tracking-wider leading-tight">
              <div className="text-white drop-shadow-2xl mb-2">
                {splitText('HALAL')}
              </div>
              <div className="text-gold drop-shadow-2xl" style={{ textShadow: '0 0 20px #d4af37' }}>
                {splitText('EXCELLENCE')}
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez l'art culinaire halal dans sa forme la plus raffinée. Chaque plat raconte une histoire de passion et d'authenticité.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles dorées */}
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.6, 0.2, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Étoiles scintillantes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute text-gold text-2xl opacity-40"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}

        {/* Scan lines effect doré */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, #d4af37 3px, #d4af37 6px)',
          }}
          animate={{ y: [0, 150] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default ParallaxGallery;