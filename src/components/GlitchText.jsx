import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = "", delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Créer l'effet glitch périodique
    const glitchInterval = setInterval(() => {
      textElement.style.textShadow = `
        2px 0 #d4af37,
        -2px 0 #ffffff,
        0 0 10px #d4af37
      `;
      
      setTimeout(() => {
        textElement.style.textShadow = `
          -1px 0 #d4af37,
          1px 0 #ffffff,
          0 0 5px #d4af37
        `;
      }, 50);
      
      setTimeout(() => {
        textElement.style.textShadow = '0 0 20px #d4af37';
      }, 100);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative ${className}`}
      style={{ textShadow: '0 0 20px #d4af37' }}
    >
      {text}
      
      {/* Effet de scan line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear'
        }}
        style={{ width: '100%', height: '2px', top: '50%' }}
      />
    </motion.div>
  );
};

export default GlitchText;