import CarouselAbout from "./CarouselAbout";
import proactiveLogo from "../../../../assets/proactive.webp";
import dataPrivacyLogo from "../../../../assets/data-privacywebp.webp";
import businessLogo from "../../../../assets/business.webp";
import Card from "../../../../Components/Card";

const AboutSection = () => {
  const aboutCards = [
    {
      id: 1,
      logo: proactiveLogo,
      title: "Proactive Threat Prevention",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 2,
      logo: dataPrivacyLogo,
      title: "Data and Privacy Protection",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 3,
      logo: businessLogo,
      title: "Business Resilience and Reputation",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod.",
    },
  ];
  return (
    <div className="w-full mt-[250px]">
      <div className="flex items-center flex-col gap-5 mb-10 text-center">
        <span className="text-base md:text-[18px] leading-[1.5em] font-[Public_Sans] text-[#FFFFFFB3]">
          Trusted by
          <span className="text-white text-[18px] md:text-[20px] leading-[18px]">
            {" "}
            5,000+
          </span>
          <span> satidfied merchants</span>
        </span>
        <div className="max-w-full w-full">
          <CarouselAbout />
        </div>
      </div>
      <div className="text-white w-full mt-[60px] flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-base md:text-[22px] lg:text-[24px] font-semibold leading-[1.4em] font-[krona_one] my-5">
          About Us
        </h2>
        <div className="flex mb-5 flex-col lg:flex-row lg:justify-end">
          <div className="flex flex-col gap-5 max-w-[679px]">
            <div className="text-[26px] md:text-[42px] lg:text-[48px] leading-[1.3em] font-semibold font-[krona_one] text-white">
              Powering the Future of Cyber Defense
            </div>
            <div className="max-w-[552px] w-full mb-5">
              <p className="text-base md:text-[18px] leading-[1.5em] font-[Public_sans] text-[#FFFFFFB3]">
                At the forefront of innovation, we build intelligent, adaptive,
                and scalable cybersecurity solutions that protect businesses
                from the ever-evolving digital landscape.
              </p>
            </div>
            <div>
              <button className="text-[#000E11] font-[Public_Sans] bg-[radial-gradient(at_top_center,_#3BD4F2_0%,_#00788F_100%)] tracking-[0.5px] py-[15px] px-[30px] font-semibold border border-[#3BD4F2] rounded-[50px] cursor-pointer hover:text-white hover:border-[#00788F] duration-[400] md:text-[20px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-15 py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {aboutCards.map((item) => (
          <div key={item.id} className="md:last:col-span-2 lg:last:col-span-1">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
