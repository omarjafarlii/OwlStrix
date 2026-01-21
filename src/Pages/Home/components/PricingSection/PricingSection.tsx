import React from "react";
import CardPricing from "./CardPricing";

const PricingSection = () => {
  return (
    <div className="mb-15">
      <div className="mb-7.5">
        <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px] mx-auto">
          <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
            Our Pricing
          </div>
        </div>
        <div className="py-10 max-w-[767px] w-full mx-auto">
          <h2 className="text-[26px] md:text-[42px] lg:text-[48px] text-center text-white leading-[1.3em] font-[krona_one] font-semibold">
            Smart Investment, Lasting Protection
          </h2>
        </div>
      </div>
      <div>
        <CardPricing />
      </div>
    </div>
  );
};

export default PricingSection;
