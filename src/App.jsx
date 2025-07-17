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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SimpleMenu />
      <SpecialMenus />
      <Chicken />
      <Frites />
      <Drinks />
      <Desserts />
      <About />
      <Delivery />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;