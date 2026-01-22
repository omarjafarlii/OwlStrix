import CarouselWelcome from "./CarouselWelcome";
import InstallAppSection from "../../Home/components/InstallAppSection/InstallAppSection";
import CardForTeam from "../../../Components/CardForTeam";
import MichaelDoeLogo from "../../../assets/the-four-business-cyberix.webp";
import EllisaLogo from "../../../assets/the-four-business-people.webp";
import JohnyLogo from "../../../assets/the-four-business.webp";

export interface SocialLinks {
  facebook: string;
  linkedin: string;
  instagram: string;
}

export interface CardProps {
  id: number;
  name:string;
  image: string;
  headline: string;
  social_links: SocialLinks;
}

const teamData: CardProps[] = [
  {
    id: 1,
    name: "Michael Doe",
    image: MichaelDoeLogo,
    headline: "CEO Cyberix",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 2,
    name: "Ellisa William",
    image: EllisaLogo,
    headline: "Cyber Analyst",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 3,
    name: "Johny Harris",
    image: JohnyLogo,
    headline: "IT Specialist",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
];

const WelcomeSection = () => {


  return (
    <div className="my-20">
      <section>
        <div className="text-white w-full mt-[60px] flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col hidden lg:flex flex-col lg:w-1/2 justify-between lg:h-[60vh]">
            <h2 className="text-base hidden md:block md:text-[22px] lg:text-[24px] font-semibold leading-[1.4em] font-[krona_one] my-5">
              Welcome to Cyberix
            </h2>
            <div className="w-full">
              <CarouselWelcome />
            </div>
          </div>
          <div className="flex mb-5 flex-col lg:flex-row lg:justify-end">
            <div className="flex flex-col gap-5 max-w-[679px]">
              <div className="text-[26px] md:text-[42px] lg:text-[48px] leading-[1.3em] font-semibold font-[krona_one] text-white">
                Who We Are & Why Security Matters
              </div>
              <div className="max-w-[552px] w-full mb-5">
                <div className="mb-2 text-base leading-[1.5em] font-[Public_Sans] font-semibold text-white">
                  We’re a team of dedicated cybersecurity professionals on a
                  mission to make the digital world safer.
                </div>
                <p className="text-base md:text-[18px] leading-[1.5em] font-[Public_sans] text-[#FFFFFFB3]">
                  With years of experience, advanced tools, and a passion for
                  protection, we help individuals and organizations defend
                  against ever-evolving threats. To us, cybersecurity isn’t just
                  technology—it’s trust, responsibility, and a commitment to
                  securing what matters most: your data, your business, and your
                  peace of mind.
                </p>
              </div>
              <div>
                <button className="text-[#000E11] font-[Public_Sans] bg-[radial-gradient(at_top_center,_#3BD4F2_0%,_#00788F_100%)] tracking-[0.5px] py-[15px] px-[30px] font-semibold border border-[#3BD4F2] rounded-[50px] cursor-pointer hover:text-white hover:border-[#00788F] duration-[400] md:text-[20px]">
                  Our Services
                </button>
              </div>
              <h2 className="text-base block md:hidden md:text-[22px] lg:text-[24px] font-semibold leading-[1.4em] font-[krona_one] my-5">
                Welcome to Cyberix
              </h2>
            </div>
            <div className="block md:hidden">
              <CarouselWelcome />
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <InstallAppSection />
      </section>
      <section>
        <div className="my-10">
          <div>
            <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px] mx-auto">
              <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
                Our Team
              </div>
            </div>
            <div className="py-10 max-w-[767px] w-full mx-auto">
              <h2 className="text-[26px] md:text-[42px] lg:text-[48px] text-center text-white leading-[1.3em] font-[krona_one] font-semibold">
                Meet the Experts Behind Our Success
              </h2>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto w-full`}>
          {teamData.map(item => (
            <div>
              <CardForTeam key={item.id} item={item} />
            </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
