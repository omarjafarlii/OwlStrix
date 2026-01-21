import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMailSharp } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#000E11] w-full border-t border-[#3BD4F21A]">
        <div className="wrapper mx-auto px-5 pt-[30px]">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="max-w-[591px] w-full">
              <span className="text-[22px] md:text-[28px] text-white leading-[1.4em] font-[Krona_One] font-semibold">
                Interested in working together? We’re ready to connect.
              </span>
              <p className="text-[20px] md:text-[32px] text-[#3BD4F2] leading-[1.5em] font-[Public_Sans] font-semibold my-[30px]">
                support@domain.com
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-col-3">
                <div className="w-full">
                  <h6 className="text-[20px] md:text- text-white leading-[1.4em] font-[Krona_One] font-semibold">
                    Quick Link
                  </h6>
                  <ul className="text-[#FFFFFFB3] text-base md:text-[18px] flex flex-col gap-3 my-5">
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <h6 className="text-[20px] md:text- text-white leading-[1.4em] font-[Krona_One] font-semibold">
                    Support
                  </h6>
                  <ul className="text-[#FFFFFFB3] text-base md:text-[18px] flex flex-col gap-3 my-5">
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/">Support</Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <h6 className="text-[20px] md:text- text-white leading-[1.4em] font-[Krona_One] font-semibold">
                    Quick Link
                  </h6>
                  <ul className="text-[#FFFFFFB3] text-base md:text-[18px] flex flex-col gap-3 my-5">
                    <li>
                      <Link to="/" className="flex items-center gap-2">
                        <IoCall size={20} className="text-[#3BD4F2]" />
                        <span>+12 345 678 91011</span>
                      </Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/" className="flex items-center gap-2">
                        <IoMailSharp size={20} className="text-[#3BD4F2]" />
                        <span>support@domain.com</span>
                      </Link>
                    </li>
                    <li className="hover:text-[#3BD4F2]">
                      <Link to="/" className="flex items-start gap-3">
                        <FaLocationDot size={20} className="text-[#3BD4F2]" />
                        <span>
                          Cyber Plaza Tower 88 Sentinel Avenue, Tech District
                          San Francisco, CA 94105 United States
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
