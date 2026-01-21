import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import playStore from "../../../../assets/Mobile-app-play-store-badge.webp";
import AppStore from "../../../../assets/Mobile-app-store-badge.webp";
import MobileApp from "../../../../assets/cyberix-mobile-apps-small.webp";

const InstallAppSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[radial-gradient(at_bottom_left,#FFF9F900_0%,#001D23_100%)] border border-[#3BD4F21A] rounded-[16px] rounded-[20px] w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="pt-10 px-10 md:pt-15 md:px-15 max-w-[767px] w-full">
          <div>
            <h3 className="text-[26px] md:text-[42px] lg:text-[48px] text-white leading-[1.3em] font-[Krona_One] font-bold">
              Install The App. Stay Safe Instantly!
            </h3>
            <p className="text-[#FFFFFFB3] pt-[15px]">
              Our cybersecurity app offers real-time threat detection, secure
              browsing, and data privacy—all in a lightweight, easy-to-use
              interface.
            </p>
            <div className="pt-10">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="bg-transparent w-[70%] md:max-w-[165px] md:w-full cursor-pointer hover:bg-[#00788F] rounded-lg py-1 px-2 border border-[#FFFFFF73]">
                  <img src={AppStore} alt="PlayStore" />
                </div>
                <div className="bg-transparent w-[70%] md:max-w-[165px] md:w-full cursor-pointer hover:bg-[#00788F] rounded-lg py-1 px-2 border border-[#FFFFFF73]">
                  <img src={playStore} alt="PlayStore" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[-50px] flex items-center justify-center mx-auto">
          <img
            src={MobileApp}
            alt="MobileApp"
            className="w-auto lg:max-w-[450px] object-contain h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default InstallAppSection;
