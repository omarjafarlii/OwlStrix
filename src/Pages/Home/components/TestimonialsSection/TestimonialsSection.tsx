import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";
import CarouselTestimonials from "./CarouselTestimonials";

const TestimonialsSection = () => {
  return (
    <div className="py-20 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
        <div className="w-full md:min-h-[60vh] md:flex flex-col justify-between md:flex-1">
          <div className="max-w-[679px] w-full">
            <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px]">
              <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
                Testimonials
              </div>
            </div>
            <div className="py-10">
              <h2 className="text-[26px] md:text-[42px] lg:text-[48px] text-white leading-[1.3em] font-[krona_one] font-semibold">
                Trusted by Those Who Matter Most
              </h2>
            </div>
          </div>
          <div className="md:flex gap-x-4">
            <div className="text-base md:text-[18px] text-[#FFFFFFB3] leading-[1.5em] font-[Public_sans]">
              Over 1 million people all over the world
            </div>
            <div>
              <Link
                to="/"
                className="text-base md:text-[18px] flex gap-x-4 font-[Public_Sans] text-[#3BD4F2] hover:text-[#00788F] duration-300 leading-[1.5em] tracking-[0.5px]"
              >
                <span>View More</span>
                <GoArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full min-w-0 max-w-full md:flex-1 md:max-w-[700px]">
          <CarouselTestimonials />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
