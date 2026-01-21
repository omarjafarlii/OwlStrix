import React from "react";
import CountUp from "./Counter";

const StaticsNumber = () => {
  return (
    <div>
      <section className="py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-b md:border-r lg:border-b-0 border-[#3BD4F21A] w-full py-[25px] text-center">
            <div className="text-[34px] md:text-[40px] leading-[1.4em] text-white font-[Krona_One] font-semibold">
              <CountUp
                from={0}
                to={40}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text px-1"
              />
              K<span className="text-[#3BD4F2] px-3">+</span>
            </div>
            <div className="text-base md:text-[18px] text-center pr-3 pt-1.5 leading-1.5 text-[#FFFFFFB3] font-[Public_Sans]">
              Employee
            </div>
          </div>
          <div className="border-b lg:border-r lg:border-b-0 border-[#3BD4F21A] w-full py-[25px] text-center">
            <div className="text-[34px] md:text-[40px] leading-[1.4em] text-white font-[Krona_One] font-semibold mb-1.5">
              <CountUp
                from={0}
                to={120}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text px-1"
              />
              <span className="text-[#3BD4F2] px-3">+</span>
            </div>
            <div className="text-base md:text-[18px] text-center pr-3 pt-1.5 leading-1.5 text-[#FFFFFFB3] font-[Public_Sans]">
              Project Completed
            </div>
          </div>
          <div className="border-b md:border-r lg:border-b-0 border-[#3BD4F21A] w-full py-[25px] text-center">
            <div className="text-[34px] md:text-[40px] leading-[1.4em] text-white font-[Krona_One] font-semibold mb-1.5">
              <CountUp
                from={0}
                to={19}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text px-1"
              />
              K<span className="text-[#3BD4F2] px-3">+</span>
            </div>
            <div className="text-base md:text-[18px] text-center pr-3 pt-1.5 leading-1.5 text-[#FFFFFFB3] font-[Public_Sans]">
              5 Star Review
            </div>
          </div>
          <div className="border-b lg:border-b-0 border-[#3BD4F21A] w-full py-[25px] text-center">
            <div className="text-[34px] md:text-[40px] leading-[1.4em] text-white font-[Krona_One] font-semibold mb-1.5">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text px-1"
              />
              <span className="text-[#3BD4F2] px-3">+</span>
            </div>
            <div className="text-base md:text-[18px] text-center pr-3 pt-1.5 leading-1.5 text-[#FFFFFFB3] font-[Public_Sans]">
              Best Awards
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticsNumber;
