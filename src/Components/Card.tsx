interface CardItem {
    id: number,
    logo: string,
    title: string,
    description: string
}
interface CardProps {
    item: CardItem
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div>
      <div className="pt-[30px] md:px-[40px] cursor-pointer pb-5 md:pb-[35px] px-[30px] md:px-[40px] bg-[radial-gradient(at_bottom_left,#FFF9F900_0%,#001D23_100%)] hover:bg-[radial-gradient(at_bottom_left,#001D23_0%,#004F5E_100%)] duration-300 border border-[#3BD4F21A] rounded-2xl">
        <div className="flex flex-col gap-5">
          <div className="bg-[#3BD4F21A] mb-5 w-[65px] h-[65px] md:w-[74px] md:h-[74px] border border-[#FFFFFF29] rounded-full px-4 pt-[18px] pb-[14px] flex items-center justify-center">
            <img src={item.logo} alt="Logo" />
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
      </div>
    </div>
  );
};

export default Card;
