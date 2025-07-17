import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuData } from '../data/menu';
import GlitchText from './GlitchText';

gsap.registerPlugin(ScrollTrigger);

const InteractiveMenu = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('featured');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = {
    featured: {
      title: 'Nos Signatures',
      items: menuData.featuredItems,
      color: 'from-gold to-yellow-400'
    },
    drinks: {
      title: 'Boissons Premium',
      items: [
        { id: 5, name: 'Pepsi Original', price: '1,90 €', image: '/images/pepsi-33cl.jpg', description: 'Le goût authentique qui accompagne parfaitement nos plats' },
        { id: 6, name: '7UP Mojito', price: '1,90 €', image: '/images/7up-mojito-33cl.jpg', description: 'Saveur mojito rafraîchissante, sans alcool' },
        { id: 7, name: 'Mirinda Orange', price: '1,90 €', image: '/images/mirinda-33cl.jpg', description: 'Explosion de saveur orange' },
        { id: 8, name: 'Pepsi Max', price: '1,90 €', image: '/images/pepsi-max-33cl.jpg', description: 'Un max de goût, zéro sucre' }
      ],
      color: 'from-blue-500 to-blue-700'
    },
    special: {
      title: 'Expériences Uniques',
      items: [
        { id: 9, name: 'HOME\'S Signature', price: '12,90 €', image: '/images/homes-poulet.jpg', description: 'Notre création exclusive avec sauce secrète' },
        { id: 10, name: 'Double Saveur Premium', price: '13,50 €', image: '/images/double-saveur.jpg', description: 'Deux saveurs exceptionnelles en une expérience' },
        { id: 11, name: 'Menu Découverte', price: '15,90 €', image: '/images/restaurant-presentation.jpg', description: 'Sélection du chef pour une découverte complète' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  };

  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText
            text="MENU INTERACTIF"
            className="font-serif text-5xl md:text-7xl font-bold mb-8"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explorez notre univers culinaire à travers une expérience interactive unique
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-2xl backdrop-blur-sm">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gold text-black shadow-lg shadow-gold/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories[activeCategory].items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${categories[activeCategory].color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full font-bold text-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.category || 'Spécialité'}
                    </span>
                    <motion.div
                      animate={{ 
                        rotate: hoveredItem === item.id ? 360 : 0,
                        scale: hoveredItem === item.id ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center"
                    >
                      <span className="text-gold text-sm">→</span>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/20 to-transparent blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-3xl font-bold mb-2 text-gold">
                      {selectedItem.name}
                    </h2>
                    <p className="text-gray-300 mb-4 text-lg">
                      {selectedItem.description}
                    </p>
                    <div className="text-2xl font-bold text-gold mb-6">
                      {selectedItem.price}
                    </div>
                    <div className="flex space-x-4">
                      <button className="bg-gold hover:bg-gold/90 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                        Ajouter au panier
                      </button>
                      <button 
                        onClick={closeModal}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Fermer
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveMenu;