import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flashLogo from "../../../../assets/flash-logo.webp";
import hitechLogo from "../../../../assets/hitech-logo.webp";
import huesLogo from "../../../../assets/hues-logo.webp";
import uturnLogo from "../../../../assets/uturn-logo.webp";
import visionLogo from "../../../../assets/vision-logo.webp";

function CarouselAbout() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
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
    waitForAnimate: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const merchants = [
    flashLogo,
    hitechLogo,
    huesLogo,
    uturnLogo,
    visionLogo,
    flashLogo,
    hitechLogo,
    huesLogo,
    uturnLogo,
    visionLogo,
    flashLogo,
    hitechLogo,
    huesLogo,
    uturnLogo,
    visionLogo,
  ];

  return (
    <div className="w-full overflow-hidden block">
      <Slider {...settings}>
        {merchants.map((img, index) => (
          <div
            key={index}
            className="flex! justify-center items-center outline-none cursor-pointer opacity-50 hover:opacity-100"
          >
            <img
              src={img}
              alt="Merchants"
              className="w-[328.6px] sm:w-[235.7px] mx-[40px] md:w-[214.6px] h-auto object-contain block mx-auto pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselAbout;
