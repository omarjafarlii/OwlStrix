import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

interface CardItem {
  id: number;
  bgImage: string;
  icon: string;
  title: string;
  description: string;
}
interface CardProps {
  item: CardItem;
}

const CardServices: React.FC<CardProps> = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 cursor-pointer w-full bg-[radial-gradient(at_bottom_left,#FFF9F900_0%,#001D23_100%)] duration-300 border border-[#3BD4F21A] rounded-2xl">
        <div className="relative h-[220px] rounded-[20px] w-full">
          <div
            className="absolute rounded-[20px] w-full inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          ></div>
          <div className="absolute inset-0 rounded-t-[20px] w-full bg-[linear-gradient(180deg,#001D2399_0%,#001D23_100%)]"></div>
        </div>
        <div className="pt-[30px] md:px-[40px] block md:pt-[0] md:px-10 md:pb-10 pb-5 md:pb-[35px] px-[30px] md:px-[40px]">
          <div className={`${item.id === 1 || item.id === 2 ? "md:flex" : "block"} items-start gap-[15px]`}>
            <div className="bg-[#3BD4F21A] mb-5 w-[65px] h-[65px] md:w-[74px] md:h-[74px] border border-[#FFFFFF29] rounded-full px-4 pt-[18px] pb-[14px] flex items-center justify-center flex-shrink-0">
              <img src={item.icon} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-[krona_one] text-white text-base md:text-[22px] lg:text-2xl leading-[1.5em] font-semibold">
                {item.title}
              </h4>
              <p className="font-[Public_sans] text-[#FFFFFFB3] text-base md:text-[18px] leading-[1.5em]">
                {item.description}
              </p>
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
    </div>
  );
};

export default CardServices;
