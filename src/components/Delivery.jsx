import React from 'react';

const Delivery = () => (
  <section id="delivery-section" className="py-20 bg-gray-50 text-gray-800">
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
      <img src="/images/icon-delivery.svg" alt="Livraison rapide" className="w-20 h-20 mb-4" />
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Livraison rapide</h2>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
      <p className="text-gray-600 text-lg mb-6">Commandez en ligne et faites-vous livrer rapidement à domicile ou au bureau. Nos partenaires assurent une livraison efficace et soignée de vos plats préférés.</p>
      <div className="flex items-center gap-4 justify-center">
        <img src="/images/ubereat.png" alt="UberEats" className="h-10 w-auto" />
        <span className="text-gray-500 text-sm">Disponible sur UberEats</span>
      </div>
    </div>
  </section>
);

export default Delivery; 