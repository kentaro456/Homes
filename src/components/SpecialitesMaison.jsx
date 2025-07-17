import { motion } from "framer-motion";
import TextReveal from './ui/TextReveal';

const SpecialitesMaison = () => {
  const specialites = [
    {
      image: "/images/image.png",
      title: "Le Cheesenan",
      description: "Un classique revisité avec amour, saveurs puissantes et textures généreuses.",
    },
    {
      image: "/images/fritehomes.jpg",
      title: "Les Frites Maison",
      description: "Dorées à souhait, croustillantes dehors, fondantes dedans. La simplicité maîtrisée.",
    },
    {
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
      title: "Tiramisu Traditionnel",
      description: "Douceur italienne, entre onctuosité du mascarpone et profondeur du café.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Nos Spécialités Maison
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Des plats emblématiques préparés avec soin, passion et authenticité.
            </p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {specialites.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <TextReveal delay={0.1}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p className="text-sm text-beige-100/90">{item.description}</p>
                </TextReveal>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitesMaison;
