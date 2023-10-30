import { icons } from "react-icons";
import { BiSolidBuildingHouse } from "react-icons/bi";
const Services = () => {
  const OurServices = [
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
    {
      icon: BiSolidBuildingHouse,
      title: "Real Estate/Property Law",
      description:
        "Navigating the intricate world of real estate and property law requires a trusted partner who understands the complexities of transactions, contracts, and legal regulations. Our seasoned team of professionals is dedicated to providing comprehensive legal solutions for your real estate needs.",
    },
  ];
  return (
    <div className="pt-[130px] px-[12%]">
      <div className="text-center pb-[80px]">
        <span className="text-[#C4A747] text-[11px] tracking-[4px]">
          WE'VE GOT YOU COVERED
        </span>
        <h1 className=" text-[35px]">Legal Services</h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        {OurServices.map((items) => (
          <div className="w-[250px]">
            <div className="w-[80px] bg-[#0A0A22] h-[80px] rounded-lg flex items-center justify-center">
              <items.icon className="text-[40px] text-[#C4A747]" />
            </div>
            <div>
              <h2 className="text-[#0A0A22] text-xl">{items.title}</h2>
            </div>
            <div>
              <p className=" text-gray-600 text-sm font-light">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
