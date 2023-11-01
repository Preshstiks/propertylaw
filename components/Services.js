import { BiSolidBuildingHouse } from "react-icons/bi";
import { RiBankFill } from "react-icons/ri";
import { LuBaby } from "react-icons/lu";
import {
  MdOutlineLandscape,
  MdBusinessCenter,
  MdRealEstateAgent,
} from "react-icons/md";
import { TbTrees, TbBuildingSkyscraper } from "react-icons/tb";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div id={"services"} className="md:py-[130px] sm:py-[100px] py-[70px]">
      <div className="text-center pb-[80px] px-[12%]">
        <span className="text-[#CAA839] text-[11px] tracking-[4px]">
          WE'VE GOT YOU COVERED
        </span>
        <h1 className="text-[35px]">Legal Services</h1>
        <div className="bg-[#CAA839] h-1 w-[50px] mx-auto rounded-full my-[20px]"></div>
      </div>
      <div className=" px-[9%]">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {OurServices.map((items) => (
              <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 mx-[20px] flex-grow-0 flex-shrink-0 xmd:basis-[29.5%] sm:basis-[60%] basis-[60%] rounded-lg shadow-md bg-white"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
