import React from 'react';

const Footer = () => (
  <footer className="bg-white border-t border-gold/10 py-8 text-center mt-12">
    <div className="flex flex-col items-center gap-2">
      <img src="/images/logo-homes.png" alt="Logo" className="h-8 w-8 object-contain" />
      <span className="text-gray-500 text-sm">© {new Date().getFullYear()} HOME'S Restaurant. Tous droits réservés.</span>
      <div className="flex gap-4 mt-2">
        <a href="#menu-section" className="text-gray-500 hover:text-gold text-sm transition">Menu</a>
        <a href="#drinks-section" className="text-gray-500 hover:text-gold text-sm transition">Boissons</a>
        <a href="#desserts-section" className="text-gray-500 hover:text-gold text-sm transition">Desserts</a>
        <a href="#special-menus-section" className="text-gray-500 hover:text-gold text-sm transition">Menus spéciaux</a>
        <a href="#about-section" className="text-gray-500 hover:text-gold text-sm transition">À propos</a>
        <a href="#delivery-section" className="text-gray-500 hover:text-gold text-sm transition">Livraison</a>
      </div>
    </div>
  </footer>
);

export default Footer; 