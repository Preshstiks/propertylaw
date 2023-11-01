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
        "Make the most of your real estate assets with our knowledgeable legal advice. We guarantee efficient, safe, and legal transactions for both purchasing and managing real estate. Our knowledgeable staff manages conflicts and zoning laws, fostering trust in the real estate industry",
    },
    {
      icon: MdOutlineLandscape,
      title: "Land/Property taxation",
      description:
        "We streamline property and land taxes so you can better manage and minimize your tax liabilities. With the help of our knowledge, you'll be able to make wise financial decisions that could result in financial savings and less stress from taxes, giving you piece of mind as a property owner",
    },
    {
      icon: TbTrees,
      title: "Enviromental Law",
      description:
        "Devoted to using legal expertise to safeguard the environment. Our group is an expert in conservation, sustainability, and environmental standards. We encourage people who are passionate about a greener, more sustainable future and assist businesses in adhering to environmental regulations",
    },
    {
      icon: RiBankFill,
      title: "Banking & Insurance Law",
      description:
        "Our experts provide legal counsel and representation to financial institutions and insurers in the areas of compliance, risk management, and litigation. Our services include mergers and acquisitions advice, regulatory compliance, and financial stock and debt advising.",
    },
    {
      icon: MdBusinessCenter,
      title: "Corporate/Business Law",
      description:
        "With our experienced advice, you can navigate the business world with confidence. We cover business creation, contracts, and conflict resolution for startups and established businesses alike. You may rely on us to be your legal business partner.",
    },
    {
      icon: LuBaby,
      title: "Adoption Law",
      description:
        "With compassion and skill, we bring families together. Throughout the adoption process, our adoption legal services give counsel and support. We're here to make your adoption journey as easy as possible, from legal needs to emotional concerns. Trust us to assist you in creating the family of your dreams.",
    },
    {
      icon: TbBuildingSkyscraper,
      title: "Intellectual Property Law",
      description:
        "With our skilled Intellectual Property Law services, you can protect your discovery and innovation. Count on us to safeguard your intellectual property – patents, trademarks, copyrights, and trade secrets. Work with us to legally protect your ideas and breakthroughs",
    },
    {
      icon: MdRealEstateAgent,
      title: "Estate planning, Labour and Civil Litigation",
      description:
        "Our legal services can help you safeguard your future and uphold your rights. For your peace of mind and justice, our knowledgeable staff streamlines the law in many areas, including estate planning, employment, and civil disputes.",
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
                <p className="text-center leading-6 text-gray-600 text-sm  font-light">
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
