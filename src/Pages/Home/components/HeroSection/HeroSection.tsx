const HeroSection = () => {
  return (
    <div>
      <section className="w-full pt-[40%] md:pt-[15%] flex">
        <div className="flex flex-col gap-[20px] w-full max-w-[679px] lg:ml-auto">
          <div className="w-[92%] md:max-w-[328px]">
            <div className="bg-[#3BD4F21A] rounded-[20px]">
              <div className="w-full py-2 px-3 bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
                Security you trust. Safety you count on.
              </div>
            </div>
          </div>
          <div className="text-left mb-5">
            <h1 className="text-[32px] md:text-[50px] lg:text-[64px] md:leading-[1.3em] font-bold text-white font-[krona_one]">
              Secure Today. Safe Tomorrow!
            </h1>
          </div>
          <div className="mb-[25px] max-w-[635px]">
            <p className="text-[18px] w-full md:text-[20px] leading-[1.5em] text-[#FFFFFFB3] font-[Public_Sans]">
              Comprehensive protection for your digital assets—today, tomorrow,
              and beyond. We deliver scalable cybersecurity solutions to keep
              your business secure at every stage.
            </p>
          </div>
          <div className="flex gap-[30px] flex-col sm:flex-row">
            <div>
              <button className="text-white font-[Public_Sans] bg-[radial-gradient(at_top_center,_#ff0000_0%,_#000000_100%)] tracking-[0.5px] py-[15px] px-[30px] font-semibold rounded-[50px] cursor-pointer hover:text-white hover:border-[#00788F] duration-[400] md:text-[20px]">
                Start 14 Days Free Trial
              </button>
            </div>
            <div>
              <button className="md:text-[20px]! font-[Public_Sans] py-[14px] px-[30px] text-[18px] tracking-[0.5px] text-white border border-[#ffffff4A] cursor-pointer hover:bg-[radial-gradient(at_top_center,_#ff0000_0%,_#000000_100%)] rounded-full  outline-none focus:outline-none focus:ring-0 hover:border-0! hover:shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

//
