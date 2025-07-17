import React from 'react';

const drinks = [
  { name: 'Pepsi', image: '/images/pepsi-33cl.jpg', format: '33cl', price: '1,90€', popularity: 92, reviews: 25 },
  { name: 'Pepsi Max', image: '/images/pepsi-max-33cl.jpg', format: '33cl', price: '1,90€', popularity: 86, reviews: 15 },
  { name: 'Pepsi', image: '/images/pepsi-1.5l.jpg', format: '1,5L', price: '3,30€', popularity: 94, reviews: 38 },
  { name: '7 Up', image: '/images/7up-1.5l.jpg', format: '1,5L', price: '3,30€', popularity: 92, reviews: 13 },
  { name: '7 Up exotique', image: '/images/7up-exotique-33cl.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 25 },
  { name: '7 Up mojito', image: '/images/7up-mojito-33cl.jpg', format: '33cl', price: '1,90€', popularity: 90, reviews: 11 },
  { name: '7 Up cherry', image: '/images/7upcherry.webp', format: '33cl', price: '1,90€', popularity: 100, reviews: 19 },
  { name: 'Mirinda', image: '/images/mirinda-33cl.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 14 },
  { name: 'Ice Tea pêche', image: '/images/lipton-icetea-peche.png', format: '33cl', price: '1,90€', popularity: 100, reviews: 19 },
  { name: 'Ice Tea pêche', image: '/images/lipton-icetea-peche.png', format: '1,5L', price: '3,30€', popularity: 95, reviews: 23 },
  { name: 'Ice Tea pastèque menthe', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 100, reviews: 20 },
  { name: 'Ice Tea framboise', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 95, reviews: 21 },
  { name: 'Pesie', image: '/images/pesie.jpeg', format: '33cl', price: '2,00€', popularity: null, reviews: null },
  { name: 'Eau minérale', image: '/images/drink-generic.png', format: '33cl', price: '1,90€', popularity: 83, reviews: 6 },
  { name: '7 Up', image: '/images/7up-1.5l.jpg', format: '33cl', price: '1,90€', popularity: 100, reviews: 14 },
];

const Drinks = () => (
  <section id="drinks-section" className="py-20 bg-white text-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Nos Boissons</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
        <p className="text-gray-500 text-lg">Un large choix de boissons fraîches pour accompagner votre repas.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {drinks.map((drink) => (
          <div key={drink.name + drink.format} className="bg-white rounded-xl shadow border border-gold/20 p-4 flex flex-col items-center hover:shadow-lg transition group">
            <img src={drink.image} alt={drink.name} className="w-20 h-20 object-contain mb-2 group-hover:scale-105 transition" />
            <h3 className="font-serif text-lg text-gold font-bold mb-1">{drink.name}</h3>
            <span className="text-gray-600 text-sm mb-1">{drink.format}</span>
            <span className="text-gray-800 font-semibold mb-2">{drink.price}</span>
            {drink.popularity && (
              <span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs flex items-center mb-2"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{drink.popularity}%{drink.reviews && ` (${drink.reviews})`}</span>
            )}
            <button className="px-4 py-1 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold shadow hover:from-yellow-300 hover:to-gold transition border border-gold/40 text-sm">Commander</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Drinks; 