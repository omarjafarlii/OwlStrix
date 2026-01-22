import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import type { CardProps } from "../Pages/AboutUs/components/WelcomeSection";

interface CardPropsForTeam {
  item: CardProps;
}

const CardForTeam: React.FC<CardPropsForTeam> = ({ item }) => {
  return (
    <div className="relative group rounded-2xl">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full max-w-[850px] rounded-2xl"
      />
      <div className="absolute bottom-[40px] left-0 right-0 px-10 z-20 flex items-center justify-between">
        <h3 className="text-base md:text-[22px] lg:text-2xl text-white font-[Krona_One] font-semibold">
          {item.name}
        </h3>
      </div>
      <div className="absolute inset-0 bg-[#000E11CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <div
        className="
          absolute inset-0 z-20
          opacity-0 translate-y-[150px]
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
          py-10
        "
      >
        <div
          className="
            relative flex flex-row-reverse
            translate-x-[80px]
            group-hover:translate-x-0
            transition-transform duration-300 delay-150
          "
        >
          <p className="rotate-90 text-base md:text-[18px] text-white leading-[1.5em] font-[Public_Sans] py-10">
            {item.headline}
          </p>
        </div>
        <div className="flex items-end justify-end absolute bottom-[40px] w-full px-10">
          <ul
            className="
              flex flex-col
              translate-y-[60px] opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300 delay-200
            "
          >
            <li className="mb-2.5">
              <Link
                to={item.social_links.facebook}
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-b from-[#3BD4F2] to-[#00788F] text-white h-[35px] w-[35px] rounded-full"
              >
                <FaFacebookF size={15} />
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                to={item.social_links.linkedin}
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-b from-[#3BD4F2] to-[#00788F] text-white h-[35px] w-[35px] rounded-full"
              >
                <FaLinkedinIn size={15} />
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                to={item.social_links.instagram}
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-b from-[#3BD4F2] to-[#00788F] text-white h-[35px] w-[35px] rounded-full"
              >
                <FaInstagram size={15} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardForTeam;
