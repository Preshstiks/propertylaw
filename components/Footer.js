import { BiLogoPinterest } from "react-icons/bi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
const Footer = ({ openModal }) => {
  const routes = [
    {
      link: "services",
      text: "Services",
    },
    {
      link: "about",
      text: "About Us",
    },
  ];
  return (
    <div className="bg-[#0A0A22] py-[50px] md:px-[12%] px-[8%]">
      <div className="md:flex block items-center pb-[60px] justify-center text-white">
        <div className="md:w-1/2 md:pb-0 pb-5 w-full">
          <div className="flex pb-8 items-center">
            <div>
              <Image
                src="/law.png"
                className="sm:w-[70px] sm:h-[70px] h-[50px] w-[50px]"
                width={70}
                height={70}
                alt="logo"
              />
            </div>
            <div>
              <h1 className="md:text-[18px] text-[15px] font-russo">
                Emmanuel Akande
              </h1>
              <h2 className="font-russo md:text-[15px] text-[12px]"> & Co.</h2>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-light leading-[30px] md:pr-[40%] pr-0">
              we pride ourselves on delivering personalized, efficient, and
              cost-effective legal services. Our dedication to your success and
              satisfaction is the driving force behind everything we do
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <div>
            <div className="pb-2">
              <h2 className="text-[#CAA839] text-[15px] font-medium tracking-[4px]">
                OUR ADDRESS
              </h2>
            </div>
            <div className="pb-8">
              <p className="text-sm font-light leading-[30px]">
                Sahadatu Plaza,
              </p>
              <p className="text-sm font-light leading-[30px]">
                70D, Allen Avenue,
              </p>
              <p className="text-sm font-light leading-[30px]">Ikeja</p>
            </div>
          </div>
          <div className="flex gap-7 md:justify-start justify-center pb-8 w-full">
            {routes.map((item) => (
              <ScrollLink
                to={item.link}
                spy={true}
                smooth={true}
                offset={item.link === "link" ? -40 : 0}
                className="font-medium p-0 m-0 cursor-pointer hover:text-[#CAA839] minimd:text-sm text-[12px]"
              >
                {item.text}
              </ScrollLink>
            ))}
            <div
              className="font-medium hover:text-[#CAA839] cursor-pointer minimd:text-sm text-[12px]"
              onClick={openModal}
            >
              Contact Us
            </div>
          </div>
          <div className="flex md:justify-start justify-center items-center">
            <div className="flex items-center gap-8">
              <div>
                <AiFillFacebook className="text-[25px] hover:text-[#CAA839]" />
              </div>
              <div>
                <AiOutlineInstagram className="text-[25px] hover:text-[#CAA839]" />
              </div>
              <div>
                <AiOutlineTwitter className="text-[25px] hover:text-[#CAA839]" />
              </div>
              <div>
                <BiLogoPinterest className="text-[25px] hover:text-[#CAA839]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-400 xsm:text-sm text-xs font-extralight">
          &copy; 2023, Emmanuel Akande & Co.
        </p>
      </div>
    </div>
  );
};

export default Footer;
