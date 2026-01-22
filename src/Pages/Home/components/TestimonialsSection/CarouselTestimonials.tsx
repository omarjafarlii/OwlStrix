import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import profileimg1 from "../../../../assets/serious-adult-businesswoman-looking-at-camera.webp";
import profileimg2 from "../../../../assets/confident-businessman-posing-in-an-office-with-two.webp";
import profileimg3 from "../../../../assets/smiling-female-corporate-manager-in-the-office.webp";

interface CarouselCardType {
    id: number,
    image: string,
    name: string,
    role: string,
    text: string
}

function CarouselTestimonials () {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: "ease-in-out",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    waitForAnimate: true,
    useTransform: true,
  };

    const testimonials = [
  {
    id: 1,
    name: "Sarah Lim",
    role: "Manager at GreenByte",
    image: profileimg1,
    text:
      "Our transition to the cloud was seamless and secure thanks to their expert guidance and protection.",
  },
  {
    id: 2,
    name: "David Hartono",
    role: "CEO of BrightTech",
    image: profileimg2,
    text:
      "The 24/7 monitoring service gave us peace of mind. We haven’t had a single incident since onboarding them.",
  },
  {
    id: 3,
    name: "Lina Yusuf",
    role: "IT Manager at Core Bank",
    image: profileimg3,
    text:
      "Their penetration testing exposed weaknesses that could have cost us millions. Truly a game changer.",
  },
];

  return (
    <div className="w-full mmin-w-0 overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((item: CarouselCardType) => (
            <div className="text-base">
          <div className="p-[25px] m-5 md:px-10 md:pt-10 md:pb-[15px] md:m-[30px] border border-[#FFFFFF1A] shadow-[0_0_20px_0_rgba(59,212,242,0.1)] rounded-2xl">
            <div className="flex items-start justify-between">
              <div>
                <div>
                  <div className="mb-6">
                    <ul className="flex items-center gap-[5px] text-[#FFBE00]">
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <div className="rounded-full w-[55px] h-[55px] md:w-[55px] md:h-[55px]">
                      <img
                        src={item.image}
                        alt="Profile"
                        className="rounded-full w-full h-full"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-[Public_Sans] font-semibold text-[18px] md:text-[20px] mb-[5px]">
                        {item.name}
                      </div>
                      <div className="font-[Public_Sans] text-[14px] text-[#FFFFFFB3] leading-[1.5em] md:text-base">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <IoMdQuote className="text-[70px] text-[#3BD4F21A]" />
              </div>
            </div>
            <div className="my-[30px]">
                <p className="font-[Public_Sans] text-[20px] font-semibold text-white">{item.text}</p>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselTestimonials;
