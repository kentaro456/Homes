import React from 'react';

const desserts = [
  { name: 'Tiramisu', image: '/images/Tiramisu.webp', desc: 'Parfum au choix.', price: '3,30€', popularity: 89, reviews: 323 },
];

const Desserts = () => (
  <section id="desserts-section" className="py-20 bg-gray-50 text-gray-800">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Nos Desserts</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
        <p className="text-gray-500 text-lg">Terminez votre repas sur une note sucrée avec nos desserts maison.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {desserts.map((dessert) => (
          <div key={dessert.name} className="bg-white rounded-xl shadow border border-gold/20 p-6 flex flex-col items-center hover:shadow-lg transition group">
            <img src={dessert.image} alt={dessert.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gold/30 group-hover:scale-105 transition" />
            <h3 className="font-serif text-xl text-gold font-bold mb-2">{dessert.name}</h3>
            <p className="text-gray-600 text-center mb-2">{dessert.desc}</p>
            <span className="text-lg font-semibold text-gray-800 mb-2">{dessert.price}</span>
            <span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs flex items-center mb-2"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{dessert.popularity}% ({dessert.reviews})</span>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold shadow hover:from-yellow-300 hover:to-gold transition border border-gold/40">Commander</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Desserts; 