import Section from "./components/home/Section";
import SacredPooja from "./components/home/SacredPooja";
import Faq from "./components/home/Faq";
import Footer from "./components/home/Footer";
import Carousel from "./components/home/Carousel";
import Cards from "./components/home/Cards";

export default function HomePage() {
  return (
    
    <div>
      <Carousel/>
      <Section/>
      <Cards/>
      <SacredPooja/>
      <Faq/>
  
    
    </div>
  );
}
