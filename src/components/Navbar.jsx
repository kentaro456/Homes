import React from 'react';

const Navbar = () => (
  <nav className="w-full bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <img src="/images/logo-homes.png" alt="Logo" className="h-10 w-10 object-contain" />
        <span className="font-serif text-2xl text-gold font-bold tracking-widest">HOME'S</span>
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#menu-section" className="text-gray-700 hover:text-gold font-medium transition">Menu</a>
        <a href="#about-section" className="text-gray-700 hover:text-gold font-medium transition">À propos</a>
        <a href="#reviews-section" className="text-gray-700 hover:text-gold font-medium transition">Avis</a>
        <a href="#contact-section" className="text-gray-700 hover:text-gold font-medium transition">Contact</a>
      </div>
      <a href="#reservation" className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold shadow-lg hover:from-yellow-300 hover:to-gold transition hidden md:inline-block border border-gold/40">Réserver</a>
      <button className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gold/10 transition">
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gold"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </nav>
);

export default Navbar; 