import React from 'react';

const specialMenus = [
  { name: "Menu Le Home's Poulet", image: "/images/Menu Le Home's Poulets.webp", desc: "Pain fromagé maison, blanc de poulet, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 94, reviews: 4315 },
  { name: "Menu Le Home's Steak", image: "/images/Menu Le Home's Steak.webp", desc: "Pain fromagé maison, steak de bœuf, salade, tomates, oignons, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 1080 },
  { name: "Menu Le Torticheese", image: "/images/Menu Le Torticheese.webp", desc: "Tortilla, poulet pané, steak de bœuf, salade, cheddar, boursin et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 260 },
  { name: "Menu Le Chicken Roll", image: "/images/Menu Le Chicken Roll.webp", desc: "Tortilla, filet de poulet pané et salade. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 87, reviews: 208 },
  { name: "Menu Le Spécial Steak", image: "/images/Menu Le Spécial Steak.jpeg", desc: "Pain maison, steak de bœuf, salade, tomates, oignons, œuf, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 145 },
  { name: "Menu Le Spécial Poulet", image: "/images/Menu Le Spécial Poulet.webp", desc: "Pain maison, blanc de poulet, salade, tomates, oignons, œuf, cheddar et sauces au choix. Servi avec des frites et une boisson 33 cl au choix.", price: "10,90€", popularity: 93, reviews: 137 },
  { name: "Menu Le Poulet Cheese", image: "/images/Menu Le Poulet Cheese.webp", desc: "Pain burger, filet de poulet pané, salade, cheddar et mayonnaise. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 84, reviews: 89 },
  { name: "Menu Le Bœuf Burger", image: "/images/Menu Le Bœuf Burger.webp", desc: "Pain burger, 2 steaks de bœuf, salade, cheddar et sauce burger. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 74, reviews: 86 },
  { name: "Menu Le Seekh Roll", image: "/images/Menu Le Seekh Roll.webp", desc: "Tortilla, agneau épicé et salade. Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 84, reviews: 44 },
  { name: "Menu Double Saveur", image: "/images/Menu Double Saveur.webp", desc: "1 burger au choix (poulet ou bœuf) et 5 wings (ailes de poulet épicées). Servi avec des frites et une boisson 33 cl au choix.", price: "10,50€", popularity: 90, reviews: 220 },
  { name: "Menu Wings", image: "/images/Menu Wings.webp", desc: "10 wings (ailes de poulet épicées). Servi avec des frites et une boisson 33 cl au choix.", price: "9,50€", popularity: 93, reviews: 356 },
  { name: "Menu Family Wings", image: "/images/Menu Family Wings.webp", desc: "30 wings (ailes de poulet épicées), 2 grandes frites et une boisson 1,5 l au choix.", price: "25,00€", popularity: 93, reviews: 388 },
  { name: "Menu Family Burger", image: "/images/Menu Family Burger.webp", desc: "3 burgers au choix (poulet ou bœuf), 3 frites, 9 wings (ailes de poulet épicées) et une boisson 1,5l au choix.", price: "25,00€", popularity: 87, reviews: 62 },
];

const SpecialMenus = () => (
  <section id="special-menus-section" className="py-20 bg-white text-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Menus Spéciaux</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
        <p className="text-gray-500 text-lg">Des formules généreuses à partager en famille ou entre amis.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {specialMenus.map((menu) => (
          <div key={menu.name} className="bg-white rounded-2xl shadow-xl border border-gold/20 p-6 flex flex-col items-center hover:shadow-2xl transition group">
            <img src={menu.image} alt={menu.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gold/30 group-hover:scale-105 group-hover:shadow-lg transition" />
            <h3 className="font-serif text-2xl text-gold font-bold mb-2">{menu.name}</h3>
            <p className="text-gray-600 text-center mb-2">{menu.desc}</p>
            <span className="text-lg font-semibold text-gray-800 mb-2">{menu.price}</span>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{menu.popularity}% ({menu.reviews})</span>
            </div>
            <button className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-gold to-yellow-300 text-gray-800 font-semibold shadow hover:from-yellow-300 hover:to-gold transition border border-gold/40">Commander</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialMenus; 