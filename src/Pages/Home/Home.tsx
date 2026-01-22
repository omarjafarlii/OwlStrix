import HeroSection from "./components/HeroSection/HeroSection";
import BgVideo from "./components/HeroSection/BgVideo";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import InstallAppSection from "./components/InstallAppSection/InstallAppSection";
import BlogSection from "./components/BlogSection/BlogSection";

const Home = () => {
  return (
    <div className="bg-[#000E11] h-full relative min-h-screen w-full overflow-hidden">
      <BgVideo />
      <div className="wrapper mx-auto relative z-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <InstallAppSection />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
