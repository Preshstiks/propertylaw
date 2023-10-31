import { BiSolidBuildingHouse } from "react-icons/bi";
import { RiBankFill } from "react-icons/ri";
import { LuBaby } from "react-icons/lu";
import {
  MdOutlineLandscape,
  MdBusinessCenter,
  MdRealEstateAgent,
} from "react-icons/md";
import { TbTrees, TbBuildingSkyscraper } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Services = () => {
  const OurServices = [
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: MdOutlineLandscape,
      title: "Land/Property taxation",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: TbTrees,
      title: "Enviromental Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: RiBankFill,
      title: "Banking & Insurance Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: MdBusinessCenter,
      title: "Corporate/Business Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: LuBaby,
      title: "Adoption Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: TbBuildingSkyscraper,
      title: "Intellectual Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: MdRealEstateAgent,
      title: "Estate planning, Labour and Civil Litigation",
      description:
        "Secure your future and protect your rights with our comprehensive legal services. Whether you need to plan your estate, resolve employment issues, or navigate civil disputes, our experienced team is dedicated to guiding you through the complexities of law, providing peace of mind and justice every step of the way.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="py-[130px] px-[12%]">
      <div className="text-center pb-[80px]">
        <span className="text-[#CAA839] text-[11px] tracking-[4px]">
          WE'VE GOT YOU COVERED
        </span>
        <h1 className="text-[35px]">Legal Services</h1>
        <div className="bg-[#CAA839] h-1 w-[50px] mx-auto rounded-full my-[20px]"></div>
      </div>
      <div>
        <Carousel
          additionalTransfrom={0}
          responsive={responsive}
          draggable={false}
          autoPlay={"mobile"}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          focusOnSelect={false}
          infinite
          itemClass=""
          minimumTouchDrag={80}
          pauseOnHover
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          swipeable
        >
          {OurServices.map((items) => (
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 mx-[20px] rounded-lg shadow-md bg-white"
            >
              <div className="pb-2 flex items-center justify-center">
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
                <p className="text-center text-gray-600 text-sm  font-light">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
