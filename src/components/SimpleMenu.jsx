import React from 'react';

const sandwiches = [
  { name: "Le Home's Poulet", image: "/images/Le Home's Poulet.webp", desc: "Pain fromagé maison, blanc de poulet, salade, tomates, oignons, cheddar et sauces au choix.", price: "9,20€", popularity: 93, reviews: 635 },
  { name: "Le Chicken Roll", image: "/images/Le Chicken Roll.webp", desc: "Tortilla, filet de poulet pané et salade.", price: "7,20€", popularity: 87, reviews: 256 },
  { name: "Le Torticheese", image: "/images/Le Torticheese.webp", desc: "Tortilla, poulet pané, steak de bœuf, salade, cheddar, boursin et sauces au choix.", price: "9,20€", popularity: 89, reviews: 167 },
  { name: "Le Poulet Cheese", image: "/images/Le Poulet Cheese.webp", desc: "Pain burger, filet de poulet pané, salade, cheddar et mayonnaise.", price: "7,20€", popularity: 89, reviews: 166 },
  { name: "Le Spécial Steak", image: "/images/Le Spécial Steak.jpeg", desc: "Pain maison, steak de bœuf, salade, tomates, oignons, œuf, cheddar et sauces au choix.", price: "9,20€", popularity: 96, reviews: 56 },
  { name: "Le Triple Bœuf Burger", image: "/images/Le Triple Bœuf Burger.jpeg", desc: "Pain burger, 3 steaks de bœuf, salade, cheddar et sauce burger.", price: "7,20€", popularity: 82, reviews: 150 },
  { name: "Le Spécial Poulet", image: "/images/Le Spécial Poulet.webp", desc: "Pain maison, blanc de poulet, salade, tomates, oignons, œuf, cheddar et sauces au choix.", price: "9,20€", popularity: 82, reviews: 35 },
  { name: "Le Seekh Roll", image: "/images/Le Seekh Roll.webp", desc: "Tortilla, agneau épicé et salade.", price: "7,20€", popularity: 91, reviews: 111 },
  { name: "Le Home's Steak", image: "/images/Le Home's Steak.webp", desc: "Pain fromagé maison, steak de bœuf, salade, tomates, oignons, cheddar et sauces au choix.", price: "9,20€", popularity: 96, reviews: 87 },
];

const SimpleMenu = () => (
  <section id="menu-section" className="py-24 bg-gray-50 text-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Nos Sandwichs</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
        <p className="text-gray-500 text-lg">Des recettes gourmandes, des produits frais, un plaisir à chaque bouchée.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {sandwiches.map((item) => (
          <div key={item.name} className="bg-white rounded-2xl shadow-xl border border-gold/20 p-6 flex flex-col items-center hover:shadow-2xl transition group">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gold/30 group-hover:scale-105 group-hover:shadow-lg transition" />
            <h3 className="font-serif text-2xl text-gold font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-center mb-2">{item.desc}</p>
            <span className="text-lg font-semibold text-gray-800 mb-2">{item.price}</span>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{item.popularity}% ({item.reviews})</span>
            </div>
            <button className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold shadow hover:from-yellow-300 hover:to-gold transition border border-gold/40">Commander</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SimpleMenu;