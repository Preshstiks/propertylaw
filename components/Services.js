import { useState } from "react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import Slider from "react-slick";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const OurServices = [
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Land/Property taxation",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Enviromental Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Banking & Insurance Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Corporate/Business Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Adoption Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Intellectual Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Estate planning, Labour and Civil Litigation",
      description:
        "Secure your future and protect your rights with our comprehensive legal services. Whether you need to plan your estate, resolve employment issues, or navigate civil disputes, our experienced team is dedicated to guiding you through the complexities of law, providing peace of mind and justice every step of the way.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="py-[130px] px-[12%]">
      <div className="text-center pb-[80px]">
        <span className="text-[#CAA839] text-[11px] tracking-[4px]">
          WE'VE GOT YOU COVERED
        </span>
        <h1 className="text-[35px]">Legal Services</h1>
      </div>
      <div className="h-full">
        <Slider {...settings}>
          {OurServices.map((items) => (
            <div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 rounded-lg shadow-md h-[450px] bg-white flex"
            >
              <div className="flex items-center justify-center pb-2">
                <div className="w-[80px] bg-[#0A0A22] h-[80px] rounded-lg flex items-center justify-center">
                  <items.icon className="text-[40px] text-[#CAA839]" />
                </div>
              </div>
              <div className="py-4">
                <h2 className="text-[#0A0A22] text-center text-[22px] font-medium">
                  {items.title}
                </h2>
              </div>
              <div>
                <p className="text-center text-gray-600 text-sm font-light">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
