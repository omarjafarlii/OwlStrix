import securityLogo from "../../../../assets/security-icon-cyberix.webp";
import securityBg from "../../../../assets/servicesCardBg.webp";
import endpointLogo from "../../../../assets/laptop-icon-cyberix.webp";
import endpointBg from "../../../../assets/servicesCardBg-2.webp";
import cloudLogo from "../../../../assets/cloud-icon-cyberix.webp";
import cloudBg from "../../../../assets/servicesCardBg.webp";
import dataLogo from "../../../../assets/data-privacywebp.webp";
import dataBg from "../../../../assets/servicesCardBg-3.webp";
import serverLogo from "../../../../assets/data-privacywebp.webp";
import serverBg from "../../../../assets/servicesCardBg-4.webp";
import CardServices from "../../../../Components/CardServices";

export const servicesCard = [
  {
    id: 1,
    bgImage: securityBg,
    icon: securityLogo,
    title: "Network Security",
    description:
      "Protect your internal systems from unauthorized access, malware, and data breaches.",
  },
  {
    id: 2,
    bgImage: endpointBg,
    icon: endpointLogo,
    title: "Endpoint Protection",
    description:
      "Secure laptops, mobile devices, and workstations with real-time threat detection and antivirus solutions.",
  },
  {
    id: 3,
    bgImage: cloudBg,
    icon: cloudLogo,
    title: "Cloud Security",
    description:
      "Ensure your cloud infrastructure, apps, and data are safe with encryption, access control, and continuous monitoring.",
  },
  {
    id: 5,
    bgImage: dataBg,
    icon: dataLogo,
    title: "Data Recovery",
    description:
      "Identify weaknesses before attackers do with regular scans and ethical hacking to test your system’s defenses.",
  },
  {
    id: 6,
    bgImage: serverBg,
    icon: serverLogo,
    title: "Server Security",
    description:
      "Empower your team with the knowledge to recognize and avoid phishing, scams, and unsafe practices.",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-20">
      <div>
        <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px] mx-auto">
          <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
            Our Services
          </div>
        </div>
        <div className="py-10 max-w-[767px] w-full mx-auto">
          <h2 className="text-[26px] md:text-[42px] lg:text-[48px] text-center text-white leading-[1.3em] font-[krona_one] font-semibold">
            Cyber Protection for a Safer Digital Life
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-[30px]">
          {servicesCard.map((item, index) => (
            <div
              key={item.id}
              className={`
                ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"} 
                flex h-full
              `}
            >
              <CardServices item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
