import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DrinkCarousel = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const drinks = [
    {
      id: 1,
      name: "Pepsi Original",
      description: "Le goût authentique",
      price: "1,90 €",
      image: "/images/pepsi-33cl.jpg",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      name: "Pepsi Max",
      description: "Un max de goût",
      price: "1,90 €",
      image: "/images/pepsi-max-33cl.jpg",
      color: "from-gray-800 to-black"
    },
    {
      id: 3,
      name: "7UP Original",
      description: "Citron & citron vert",
      price: "1,90 €",
      image: "/images/7up-exotique-33cl.jpg",
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      name: "7UP Mojito",
      description: "Saveur mojito",
      price: "1,90 €",
      image: "/images/7up-mojito-33cl.jpg",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      id: 5,
      name: "Mirinda Orange",
      description: "Goût orange",
      price: "1,90 €",
      image: "/images/mirinda-33cl.jpg",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 6,
      name: "Pepsi 1.5L",
      description: "Format familial",
      price: "3,30 €",
      image: "/images/pepsi-1.5l.jpg",
      color: "from-blue-600 to-blue-800"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % drinks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [drinks.length]);

  const nextDrink = () => {
    setCurrentIndex((prev) => (prev + 1) % drinks.length);
  };

  const prevDrink = () => {
    setCurrentIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pepsi-33cl.jpg')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gold drop-shadow-[0_4px_24px_rgba(212,175,55,0.5)]">
            Nos <span className="text-white">Boissons</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gold rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une sélection premium de boissons rafraîchissantes pour accompagner parfaitement vos repas
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl"
          >
            {drinks.map((drink, index) => (
              <div
                key={drink.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${drink.color} relative overflow-hidden glass-effect border border-gold/20`}>
                  {/* Background Pattern amélioré */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/30 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gold/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>

                  <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16">
                    {/* Text Content */}
                    <div className="flex-1 max-w-md">
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        {drink.name}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 mb-6">
                        {drink.description}
                      </p>
                      <div className="flex items-center space-x-4 mb-8">
                        <span className="text-3xl md:text-4xl font-bold text-gold">
                          {drink.price}
                        </span>
                        <span className="text-white/80">33cl</span>
                      </div>
                      <button className="bg-gold/90 hover:bg-gold text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gold/60 backdrop-blur-sm">
                        Ajouter au panier
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform scale-150"></div>
                        <img 
                          src={drink.image} 
                          alt={drink.name}
                          className="relative z-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-500 filter hover:brightness-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevDrink}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextDrink}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {drinks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold scale-125' : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkCarousel;