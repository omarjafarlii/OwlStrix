import bgImage from "../../assets/digital-crime-by-an-anonymous-hacker.webp";
import HeroSection from "./components/HeroSection";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#000E11] h-full relative min-h-screen w-full overflow-hidden">
        <img
          src={bgImage}
          alt="BgImage"
          className="absolute inset-0 w-full h-[75vh] lg:h-[85vh] object-cover object-center z-0"
        />
        <div className="absolute w-full inset-0 z-10 bg-[linear-gradient(190deg,_rgba(0,14,17,0.6)_0%,_#000E11_80%)]"></div>
        <div className="wrapper mx-auto relative z-20">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Faq;
