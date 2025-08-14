import Section from "./components/home/Section";
import SacredPooja from "./components/home/SacredPooja";
import Faq from "./components/home/Faq";
import Carousel from "./components/home/Carousel";
import Cards from "./components/home/Cards";
import StatSection from "./components/StatSection";

export default function HomePage() {
  return (
    
    <div className=" ">
      <Carousel/>
      <Section/>
      <Cards/>
      {/* <ZodiacSelector/> */}
      <SacredPooja/>
      <Faq/>
      <StatSection/>
  
    
    </div>
  );
}
