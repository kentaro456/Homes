import React from 'react';

const Hero = () => (
  <section className="relative min-h-[100dvh] w-full flex items-center justify-center bg-gray-50 overflow-hidden">
    {/* Image de fond lumineuse */}
    <img 
      src="/images/restaurant-presentation.jpg" 
      alt="Restaurant lumineux" 
      className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90" 
      style={{filter: 'brightness(1.08)'}}
    />
    {/* Overlay blanc/doré subtil */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-gold/10 z-10" />
    {/* Contenu centré */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24 md:py-40">
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold drop-shadow-lg mb-6">HOME'S RESTAURANT</h1>
      <p className="text-gray-700 text-lg md:text-2xl max-w-2xl mb-8 bg-white/60 rounded-xl px-6 py-4 shadow-lg backdrop-blur-md">Découvrez nos burgers, poulets et menus gourmands dans une ambiance lumineuse et conviviale. Livraison rapide, produits frais, plaisir garanti !</p>
      <a href="#menu-section" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold text-lg shadow-lg hover:from-yellow-300 hover:to-gold transition border border-gold/40 backdrop-blur-md">Voir le menu</a>
    </div>
  </section>
);

export default Hero;