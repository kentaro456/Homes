import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimpleMenu from './components/SimpleMenu';
import SpecialMenus from './components/SpecialMenus';
import Chicken from './components/Chicken';
import Frites from './components/Frites';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import About from './components/About';
import Delivery from './components/Delivery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { MenuTransitionParallax } from "./components/ui/MenuTransitionParallax";
import IngredientsPremium from './components/IngredientsPremium';
import AmbianceHomes from './components/AmbianceHomes';
import SpecialitesMaison from './components/SpecialitesMaison';
import { TextParallaxContent } from './components/ui/text-parallax-content-scroll';

function App() {
  // Menus best-sellers premium avec prix et badge
  const menusVedettes = [
    {
      imgUrl: "/images/Menu Double Saveur.webp",
      subheading: "Menu Spécial",
      heading: "Double Saveur",
      description: "Deux burgers, deux fois plus de plaisir.",
      price: "12,90€",
      badge: "Best-seller",
      ctaLabel: "Voir ce menu",
      ctaHref: "#simple-menu"
    },
    {
      imgUrl: "/images/Menu Family Burger.webp",
      subheading: "Menu Famille",
      heading: "Family Burger",
      description: "À partager en famille ou entre amis.",
      price: "24,90€",
      badge: "À partager",
      ctaLabel: "Voir ce menu",
      ctaHref: "#special-menus"
    },
    {
      imgUrl: "/images/Menu Le Chicken Roll.webp",
      subheading: "Menu Poulet",
      heading: "Chicken Roll",
      description: "Le goût du poulet revisité.",
      price: "10,90€",
      badge: "Nouveau",
      ctaLabel: "Voir ce menu",
      ctaHref: "#chicken"
    },
    {
      imgUrl: "/images/Nuggets x10.webp",
      subheading: "Frites & Sides",
      heading: "Nuggets x10",
      description: "Un accompagnement croustillant.",
      price: "5,90€",
      badge: "Snack",
      ctaLabel: "Voir ce menu",
      ctaHref: "#frites"
    },
    {
      imgUrl: "/images/pepsi.jpeg",
      subheading: "Boissons",
      heading: "Pepsi",
      description: "Pour accompagner votre repas.",
      price: "2,50€",
      badge: "Classique",
      ctaLabel: "Voir ce menu",
      ctaHref: "#drinks"
    },
    {
      imgUrl: "/images/Tiramisu.webp",
      subheading: "Desserts",
      heading: "Tiramisu",
      description: "La touche sucrée de la maison.",
      price: "4,50€",
      badge: "Maison",
      ctaLabel: "Voir ce menu",
      ctaHref: "#desserts"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <TextParallaxContent
        imgUrl="/images/image.jpg"
        subheading="L'Incontournable"
        heading="HOME'S"
      >
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 text-center">
          <p className="text-xl text-brown-700 mb-6">
            Un burger gourmet, pain brioché doré, steak juteux, fromage fondant et sauce maison. L’essence du premium, à découvrir absolument.
          </p>
          <button className="rounded bg-beige-500 px-8 py-3 text-brown-900 font-bold shadow hover:bg-beige-400 transition">
            Découvrir le menu
          </button>
        </div>
      </TextParallaxContent>
      <MenuTransitionParallax menus={menusVedettes} title="Nos incontournables" />
      <section id="simple-menu"><SimpleMenu /></section>
      <IngredientsPremium />
      <section id="special-menus"><SpecialMenus /></section>
      <AmbianceHomes />
      <TextParallaxContent
        imgUrl="/images/home-s-pizza.jpg"
        subheading="L'Expérience HOME'S"
        heading="Un lieu vivant, lumineux, unique"
      >
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-8 text-center">
          <p className="text-lg text-brown-600">
            Profitez d’une atmosphère chaleureuse, d’un service attentionné et d’une décoration élégante pour sublimer chaque moment.
          </p>
        </div>
      </TextParallaxContent>
      <section id="chicken"><Chicken /></section>

      <section id="frites"><Frites /></section>
      <SpecialitesMaison />
      <section id="drinks"><Drinks /></section>
      <section id="desserts"><Desserts /></section>
    
     
      
      <About />
      <Delivery />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;