import HeroSection from "./components/HeroSection";
import bgImage from '../../assets/cyber-security-man-looking-at-computer-screen.webp'
import ServicesCardSection from "./components/ServicesCardSection";
import TestimonialsSection from "../Home/components/TestimonialsSection/TestimonialsSection";
import OfferSection from "../../Components/OfferSection";
import BlogSection from "../Home/components/BlogSection/BlogSection";

const Services = () => {
  return (
    <div>
      <div className="bg-[#000E11] h-full relative min-h-screen w-full overflow-hidden">
        <img
          src={bgImage}
          alt="BgImage"
          className="absolute inset-0 w-full h-[75vh] lg:h-[85vh] object-cover object-center z-0"
        />
        <div className="absolute w-full inset-0 z-10 bg-[linear-gradient(190deg,_rgba(0,14,17,0.6)_0%,_#000E11_30%)]"></div>
        <div className="wrapper mx-auto relative z-20">
          <HeroSection />
          <ServicesCardSection />
          <TestimonialsSection />
          <OfferSection />
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Services;
