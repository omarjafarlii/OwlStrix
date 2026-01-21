import React from "react";
import cyberHygine from "../assets/young-professional-female-hacker-is-indoors-by-com-1024x576.webp";
import servicecardBg from "../assets/servicesCardBg.webp";
import { Link } from "react-router";
import { FaClock } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
const CardBlog = () => {
  const cardData = [
    {
      id: 1,
      category: "Insight",
      title: "Cyber Hygiene 101: Best Practices for Everyday Users",
      date: "July 18, 2025",
      imageUrl: cyberHygine,
      slug: "cyber-hygiene-101",
    },
    {
      id: 2,
      category: "Business",
      title: "Why Small Businesses Can't Afford to Ignore Cybersecurity",
      date: "July 18, 2025",
      imageUrl: servicecardBg,
      slug: "small-business-cybersecurity",
    },
  ];

  return cardData.map((item) => (
    <div key={item.id} className="w-full rounded-2xl border border-[#3BD4F21A] bg-[radial-gradient(at_bottom_left,_#FFF9F900_0%,_#001D23_100%)]">
      <div className="relative w-full">
        <img
          src={item.imageUrl}
          alt="Image"
          className="w-full object-cover rounded-t-2xl h-[200px] md:h-[300px] lg:h-[350px]"
        />
        <Link
          to="/"
          className="absolute bottom-5 left-5 bg-[#004F5E] rounded-full
                     border border-[#FFFFFF26]
                     text-sm md:text-base
                     text-white py-1.5 px-[18px]"
        >
          {item.category}
        </Link>
      </div>
      <div className="pt-5 md:pt-[30px] px-[30px] md:px-10 pb-[30px] md:pb-10">
        <h3>
          <Link
            to="/"
            className="text-base md:text-[22px] lg:text-2xl font-[Krona_One] leading-[1.4em] text-white"
          >
            {item.title}
          </Link>
        </h3>
        <div className="py-5">
          <div className="text-[#FFFFFF4D] flex items-center gap-x-2">
            <FaClock />
            <div className="text-sm leading-[1.5em] font-[Public_Sans]">
              {item.date}
            </div>
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="text-base md:text-[18px] mt-5 flex items-center gap-4 font-[Public_Sans] text-[#3BD4F2] hover:text-[#00788F] duration-300 leading-[1em] tracking-[0.5px]"
          >
            <span>Read More</span>
            <GoArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default CardBlog;
