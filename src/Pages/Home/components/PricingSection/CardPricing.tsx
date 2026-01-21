import React from "react";
import { ImCheckmark } from "react-icons/im";

interface PricingPlan {
  id: number;
  planName: string;
  isPopular: boolean;
  description: string;
  price: number;
  features: string[];
}

export const pricingData: PricingPlan[] = [
  {
    id: 1,
    planName: "Starter Plan",
    isPopular: false,
    description: "Ideal for small businesses or startups.",
    price: 299,
    features: [
      "Basic firewall & antivirus setup",
      "Monthly vulnerability scans",
      "24/7 system monitoring",
      "Email phishing protection",
      "Quarterly reports",
      "Endpoint protection",
    ],
  },
  {
    id: 2,
    planName: "Professional Plan",
    isPopular: true,
    description: "For growing businesses that need deeper protection.",
    price: 799,
    features: [
      "Everything in Starter, plus:",
      "Endpoint protection",
      "Cloud & app security",
      "Bi-weekly vulnerability assessments",
      "Security awareness training",
      "Incident response support",
    ],
  },
  {
    id: 3,
    planName: "Enterprise Plan",
    isPopular: false,
    description: "Full-scale protection for large organizations.",
    price: 1999,
    features: [
      "Everything in Professional, plus:",
      "Custom SIEM integration",
      "24/7 incident response team",
      "Penetration testing & red teaming",
      "Compliance & audit readiness",
      "Dedicated cybersecurity consultant",
    ],
  },
];

const CardPricing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {pricingData.map((item) => (
        <div key={item.id} className={`relative bg-[radial-gradient(at_bottom_left,#FFF9F900_0%,#001D23_100%)] duration-300 border ${item.id === 2 ? "border-[#3BD4F2]!" : "border-[#3BD4F21A]"} hover:border-[#3BD4F2] rounded-2xl`}>
            {item.isPopular && (
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-[#001D23] border border-[#3BD4F2] px-6 py-1 rounded-full shadow-[0_0_15px_rgba(59,212,242,0.3)]">
              <span className="text-[#3BD4F2] text-base md:text-[18px] leading-[1.5em] font-semibold font-[Public_Sans]">
                Popular
              </span>
            </div>
          )}
          <div className="pt-[30px] md:px-[40px] md:px-10 md:pb-10 pb-5 md:pb-[35px] px-[30px] md:px-[40px] flex flex-col gap-[30px]">
            <div className="mb-1 mt-2.5 text-left">
              <div className="pr-8">
                <h4 className="text-base mb-5 md:text-[22px] lg:text-[24px] text-white leading-[1.4em] font-semibold font-[Krona_One]">
                  {item.planName}
                </h4>
                <p className="text-base md:text-[18px] leading-[1.5em] text-[#FFFFFFB3] font-[Public_Sans]">
                  {item.description}
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-end gap-1">
                  <div className="text-[35px] md:text-[48px] text-white leading-[1.3em] font-semibold font-[Krona_One]">
                    ${item.price}
                  </div>
                  <div className="text-base font-normal mb-2.5 font-[Public_sans] md:text-[18px] leading-[1.5em] text-[#FFFFFFB3]">
                    /month
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] my-[30px] bg-[#FFFFFF1A]"></div>
              <div>
                <p className="text-base md:text-[18px] text-[#ffffffb3] leading-[1.5em] font-semibold font-[Public_Sans]">
                  Features
                </p>
                <ul className="font-[Public_Sans] text-white text-base md:text-[18px] leading-[1.5em] flex flex-col gap-5 mt-[30px]">
                  {item.features.map((elm) => (
                    <li key={item.id} className="flex items-center gap-4">
                      <ImCheckmark size={15} className="text-[#3BD4F2]" />
                      {elm}
                    </li>
                  ))}
                </ul>
                <button className="text-[#000E11] mt-10 font-[Public_Sans] bg-[radial-gradient(at_top_center,_#3BD4F2_0%,_#00788F_100%)] tracking-[0.5px] py-[15px] w-full! font-semibold border border-[#3BD4F2] rounded-[50px] cursor-pointer hover:text-white hover:border-[#00788F] duration-[400] md:text-[20px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPricing;
