import { useState } from "react";
import logo from "../assets/logo-owl.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import HamburgerMenu from "./HamburgerMenu";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="bg-[#000E11] md:bg-transparent absolute top-0 left-0 w-full z-50 border-b border-[#3BD4F21A]">
      <div>
        <div className="wrapper mx-auto p-5 flex items-center justify-between">
          <div>
            <img
              src={logo}
              alt="Cyberix Logo"
              className="w-[120px] sm:w-[140px] md:w-[170px] lg:w-[115px] h-auto object-contain"
            />
          </div>
          <nav className="hidden lg:block">
            <menu className="flex items-center gap-[35px] text-[18px] w-full font-[Public_Sans]">
              <li className="text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="relative group text-[#FFF9F9B3] hover:text-white">
                <Link to="/about" className="relative z-10">
                  About Us
                </Link>
              </li>
              <li className="hover:text-white text-[#FFF9F9B3]">
                <Link to="/services">Services</Link>
              </li>
              <li className="cursor-pointer relative group after:content-[''] after:absolute after:left-0 after:top-full after:h-8 after:w-full">
                <div className="flex items-center gap-2">
                  <span className="hover:text-white text-[#FFF9F9B3]">
                    Pages
                  </span>
                  <span className="text-[#FFF9F9B3]">
                    <IoChevronDown size={22} className="group-hover:rotate-180 duration-500" />
                  </span>
                </div>
                <ul className="absolute hidden group-hover:flex group-hover:flex-col text-[#FFFFFFB3] font-[Public_Sans] text-[18px] bg-[#001D23] top-full mt-8 p-4 border border-[#3BD4F21A] rounded-2xl min-w-[220px] z-50">
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
              <li className="cursor-pointer relative group after:content-[''] after:absolute after:left-0 after:top-full after:h-8 after:w-full">
                <div className="flex items-center gap-2">
                  <span className="hover:text-white text-[#FFF9F9B3]">
                    Blog
                  </span>
                  <span className="text-[#FFF9F9B3]">
                    <IoChevronDown size={22} className="group-hover:rotate-180 duration-500" />
                  </span>
                </div>
                <ul className="absolute hidden group-hover:flex group-hover:flex-col text-[#FFFFFFB3] font-[Public_Sans] text-[18px] bg-[#001D23] top-full mt-8 p-4 border border-[#3BD4F21A] rounded-2xl min-w-[220px] z-50">
                  <li className="p-[15px] hover:text-white">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="p-[15px] hover:text-white">
                    <Link to="/singlepost">Single Post</Link>
                  </li>
                </ul>
              </li>
              <li className="hover:text-white text-[#FFF9F9B3]">
                <Link to="/contact">Contact</Link>
              </li>
            </menu>
          </nav>
          <div className="block lg:hidden">
            <FaBars
              onClick={() => setFlag((prev) => !prev)}
              className="text-white text-[17px] md:text-[20px] cursor-pointer"
            />
          </div>
          <div className="hidden lg:block">
            <button className="bg-transparent h-[46px] px-[30px] text-[18px] tracking-[0.5px] text-white border border-[#FFFFFF73] rounded-[50px] whitespace-nowrap cursor-pointer hover:border-[#00788F] hover:bg-[radial-gradient(at_top_center,_#00788F_0%,_#3BD4F2_100%)]">
              Get Started
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <HamburgerMenu flag={flag} setFlag={setFlag} />
        </div>
      </div>
    </div>
  );
};

export default Header;
