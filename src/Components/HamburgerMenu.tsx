import React, { useState } from "react";
import logo from "../assets/ciberyx-logo-primary.webp";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";
import { IoChevronDown } from "react-icons/io5";

interface HamburgerMenuType {
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuType> = ({ flag, setFlag }) => {
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);

  return (
    <div
      className={`custom-scrollbar h-full overflow-y-auto menu-width sm:w-[60%] z-101 ${flag ? "translate-x-0" : "translate-x-[-150%]"} duration-1000 fixed left-0 top-0 bottom-0 bg-[#004F5E] text-white`}
    >
      <div className="p-[30px] h-full">
        <div className="flex items-center justify-between w-full">
          <div className="max-w-[170px] w-full">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <FaXmark
            onClick={() => setFlag(false)}
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="py-10 h-full">
          <menu className="text-[18px] leading-[1.2em] font-[Public_Sans] flex flex-col gap-[30px]">
            <li>
              <Link onClick={() => setFlag(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setFlag(false)}
                to="/about"
                className="text-[#FFF9F9B3] hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setFlag(false)}
                to="/services"
                className="text-[#FFF9F9B3] hover:text-white"
              >
                Services
              </Link>
            </li>
            <li className="relative">
              <div
                onClick={() => setFlag2((prev) => !prev)}
                className="flex items-center justify-between w-full text-[#FFF9F9B3] hover:text-white cursor-pointer"
              >
                <span>Pages</span>
                <IoChevronDown
                  className={`${flag2 ? "rotate-180" : "rotate-0"} duration-500`}
                  size={22}
                />
              </div>
              <ul
                className={`${flag2 ? "max-h-[300px] opacity-100 mt-8 p-4 border" : "max-h-0 opacity-0 mt-0 p-0 border-0"} duration-500 text-[#FFFFFFB3] font-[Public_Sans] text-[18px] bg-[#001D23] top-full border-[#3BD4F21A] rounded-2xl min-w-[220px] z-50`}
              >
                <li className="p-[15px] hover:text-white">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="p-[15px] hover:text-white">
                  <Link to="/ourteam">Our Team</Link>
                </li>
                <li className="p-[15px] hover:text-white">
                  <Link to="faq">FAQ</Link>
                </li>
                <li className="p-[15px] hover:text-white">
                  <Link to="/comingsoon">Coming Soon</Link>
                </li>
                <li className="p-[15px] hover:text-white">
                  <Link to="/page404">404 Page</Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div
                onClick={() => setFlag3((prev) => !prev)}
                className="flex items-center justify-between w-full text-[#FFF9F9B3] hover:text-white cursor-pointer"
              >
                <span>Blog</span>
                <IoChevronDown
                  className={`${flag3 ? "rotate-180" : "rotate-0"} duration-500`}
                  size={22}
                />
              </div>
              <ul
                className={`${flag3 ? "max-h-[300px] opacity-100 mt-8 p-4 border" : "max-h-0 opacity-0 mt-0 p-0 border-0"} duration-500 text-[#FFFFFFB3] font-[Public_Sans] text-[18px] bg-[#001D23] top-full border-[#3BD4F21A] rounded-2xl min-w-[220px] z-50`}
              >
                <li className="p-[15px] hover:text-white">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="p-[15px] hover:text-white">
                  <Link to="/singlepost">Single Post</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={() => setFlag(false)}
                to="/contact"
                className="text-[#FFF9F9B3] hover:text-white"
              >
                Contact
              </Link>
            </li>
          </menu>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
