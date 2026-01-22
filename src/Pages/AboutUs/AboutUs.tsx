import HeroSection from "./components/HeroSection";
import bgImage from "../../assets/the-business-woman-works-with-graphics-on-a-sensor.webp";
import WelcomeSection from "./components/WelcomeSection";

const AboutUs = () => {
  return (
    <div className="bg-[#000E11] h-full relative min-h-screen w-full overflow-hidden">
      <img
        src={bgImage}
        alt="BgImage"
        className="absolute inset-0 w-full h-dvh object-cover object-center z-0"
      />
      <div className="absolute w-full inset-0 z-10 bg-[linear-gradient(190deg,_rgba(0,14,17,0.6)_0%,_#000E11_30%)]"></div>
      <div className="wrapper mx-auto relative z-20">
        <HeroSection />
        <WelcomeSection />
      </div>
    </div>
  );
};

export default AboutUs;
