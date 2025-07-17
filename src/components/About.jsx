import React from 'react';

const About = () => (
  <section id="about-section" className="py-20 bg-white text-gray-800">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <img src="/images/restaurant-presentation.jpg" alt="Présentation du restaurant" className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover mb-8 md:mb-0" />
      <div className="flex-1">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-4 drop-shadow">À propos de HOME'S</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-6" />
        <p className="text-gray-700 text-lg mb-4">Depuis notre ouverture, nous mettons un point d'honneur à proposer des plats savoureux, préparés avec des ingrédients frais et de qualité. Notre équipe passionnée vous accueille dans une ambiance chaleureuse et conviviale, idéale pour partager un bon moment en famille ou entre amis.</p>
        <p className="text-gray-600 text-base">Chez HOME'S, chaque recette est élaborée avec soin pour satisfaire toutes les envies : burgers gourmands, poulet croustillant, menus généreux, desserts maison et boissons variées. Nous sommes fiers de vous offrir une expérience culinaire unique, sur place ou en livraison.</p>
      </div>
    </div>
  </section>
);

export default About;