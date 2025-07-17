import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';

const IngredientsPremium = () => {
  const ingredients = [
    {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
      title: "Viandes Sélectionnées",
      description: "Nos viandes proviennent d'éleveurs locaux qui privilégient l'élevage en plein air et une alimentation naturelle. Chaque morceau est soigneusement choisi pour garantir tendreté et saveur.",
      alt: "Viande fraîche de qualité"
    },
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      title: "Légumes Frais",
      description: "Nous sélectionnons quotidiennement les meilleurs légumes auprès de maraîchers locaux. Fraîcheur et saisonnalité sont nos priorités pour des saveurs authentiques.",
      alt: "Légumes frais colorés"
    },
    {
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=600&fit=crop",
      title: "Fromages d'Exception",
      description: "Nos fromages sont sélectionnés auprès d'affineurs passionnés. Chaque variété apporte sa texture et son caractère unique à nos créations.",
      alt: "Fromages affinés"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Nos Ingrédients Premium
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              La qualité de nos plats commence par la sélection rigoureuse de nos ingrédients. 
              Chaque produit raconte une histoire de passion et d'excellence.
            </p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white h-full">
                {/* Image as background with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={ingredient.image}
                    alt={ingredient.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  {/* Badge */}
                  <div className="mb-4">
                    <TextReveal delay={0.1}>
                      <span className="bg-beige-500 text-brown-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Premium
                      </span>
                    </TextReveal>
                  </div>
                  
                  {/* Title and description */}
                  <TextReveal delay={0.2}>
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                      {ingredient.title}
                    </h3>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-white/90 leading-relaxed mb-4 drop-shadow-md">
                      {ingredient.description}
                    </p>
                  </TextReveal>
                  
                  {/* Decorative element */}
                  <TextReveal delay={0.4}>
                    <div className="flex items-center text-white/80">
                      <span className="w-8 h-px bg-beige-400 mr-3"></span>
                      <span className="text-sm font-medium">Sélection rigoureuse</span>
                    </div>
                  </TextReveal>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsPremium; 