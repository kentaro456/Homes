import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';

const AmbianceHomes = () => {
  const ambianceItems = [
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      title: "Notre Restaurant",
      description: "Un espace chaleureux et moderne où chaque détail a été pensé pour créer une expérience gastronomique unique. Notre décoration allie élégance et convivialité.",
      alt: "Intérieur du restaurant HOME'S"
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      title: "Notre Équipe",
      description: "Une équipe passionnée qui met tout son savoir-faire au service de votre satisfaction. Chaque membre partage notre vision d'excellence culinaire.",
      alt: "Équipe en cuisine"
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      title: "L'Expérience Client",
      description: "Chaque plat est préparé avec amour et servi dans une ambiance conviviale. Nous créons des moments inoubliables autour de la gastronomie.",
      alt: "Service client attentionné"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige-100 to-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              L'Ambiance HOME'S
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Découvrez l'atmosphère unique qui fait de HOME'S bien plus qu'un restaurant. 
              Un lieu où la gastronomie rencontre la convivialité.
            </p>
          </TextReveal>
        </div>

        <div className="space-y-16">
          {ambianceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4">
                    <TextReveal delay={0.1}>
                      <span className="bg-beige-500/90 backdrop-blur-sm text-brown-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        HOME'S
                      </span>
                    </TextReveal>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <TextReveal delay={0.2}>
                    <h3 className="text-3xl font-bold text-brown-800">
                      {item.title}
                    </h3>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-lg text-brown-600 leading-relaxed">
                      {item.description}
                    </p>
                  </TextReveal>
                </div>
                
                {/* Decorative line */}
                <TextReveal delay={0.4}>
                  <div className="flex items-center">
                    <span className="w-12 h-px bg-beige-400 mr-4"></span>
                    <span className="text-beige-600 text-sm font-medium">Découvrez notre univers</span>
                  </div>
                </TextReveal>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbianceHomes; 