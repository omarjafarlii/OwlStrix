const OfferSection = () => {
  return (
    <div className="bg-[radial-gradient(at_bottom_left,_#FFF9F900_0%,_#001D23_100%)] w-full border border-[#3BD4F21A] rounded-2xl p-10 lg:p-[60px] mt-20">
      <div>
        <div className="max-w-[891px] w-full mx-auto">
          <div className="mb-2.5">
            <h3 className="font-[Krona_One] font-semibold text-center text-white text-[26px] md:text-[42px] lg:text-[48px] leading-[1.3em]">
              Cyber Threats Won’t Wait—Neither Should You
            </h3>
          </div>
        </div>
        <div className="max-w-[775px] w-full mx-auto">
          <p className="text-base md:text-[18px] text-center py-10 text-[#FFFFFFB3]">
            Our advanced cybersecurity solutions help detect vulnerabilities,
            block unauthorized access, and protect your critical data before
            breaches occur.
          </p>
        </div>
        <div>
          <div className="flex gap-[30px] flex-col sm:flex-row w-full justify-center">
            <div>
              <button className="text-[#000E11] font-[Public_Sans] bg-[radial-gradient(at_top_center,_#3BD4F2_0%,_#00788F_100%)] tracking-[0.5px] py-[15px] px-[30px] font-semibold border border-[#3BD4F2] rounded-[50px] cursor-pointer hover:text-white hover:border-[#00788F] duration-[400] md:text-[20px]">
                Start 14 Days Free Trial
              </button>
            </div>
            <div>
              <button className="md:text-[20px]! font-[Public_Sans] py-[17px] px-[30px] text-[18px] tracking-[0.5px] text-white border border-[#FFFFFF73] rounded-[50px] cursor-pointer bg-[radial-gradient(at_top_center,_#010D14_0%,_#3BD4F21A_100%)] hover:border-[#00788F] hover:bg-[radial-gradient(at_top_center,_#00788F_0%,_#3BD4F2_100%)]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
