import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full pt-[40%] md:pt-[15%]">
        <section>
          <div className="flex mb-5">
            <div className="flex flex-col gap-5 max-w-[803px]">
              <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px]">
                <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
                  Pricing
                </div>
              </div>
              <div className="text-[32px] md:text-[50px] lg:text-[64px] leading-[1.3em] font-semibold font-[krona_one] text-white">
                Simple Plans. Strong Protection.
              </div>
              <div className="max-w-[510px] w-full mb-5">
                <p className="text-[18px] md:text-[20px] leading-[1.5em] font-[Public_sans] text-[#FFFFFFB3]">
                  Choose from clear, straightforward plans designed to deliver powerful cybersecurity without complexity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
