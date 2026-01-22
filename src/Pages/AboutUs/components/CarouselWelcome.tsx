import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import securityBg from "../../../assets/servicesCardBg.webp";
import endpointBg from "../../../assets/servicesCardBg-2.webp";
import cloudBg from "../../../assets/servicesCardBg.webp";
import dataBg from "../../../assets/servicesCardBg-3.webp";

function CarouselWelcome() {
  const settings = {
  infinite: true,
  slidesToShow: 2,
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

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  const welcomeData = [
    securityBg,
    endpointBg,
    cloudBg,
    dataBg,
  ];

  return (
    <div className="w-full overflow-hidden block">
      <Slider {...settings}>
        {welcomeData.map((img, index) => (
          <div
            key={index}
            className="flex! justify-center items-center px-5 lg:pr-10 rounded-2xl outline-none cursor-pointer opacity-50 hover:opacity-100 w-full"
          >
            <img
              src={img}
              alt="Merchants"
              className="w-full rounded-2xl h-auto object-contain block mx-auto pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselWelcome;
