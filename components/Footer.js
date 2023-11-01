import { BiLogoPinterest } from "react-icons/bi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#0A0A22] py-[50px] md:px-[12%] px-[8%]">
      <div className="flex items-center pb-[60px] justify-center text-white">
        <div className="w-1/2">
          <div className="flex pb-8 items-center">
            <div>
              <img src="/law.png" width={70} alt="logo" />
            </div>
            <div>
              <h1 className="text-[18px] font-russo">Agbolagade Akande</h1>
              <h2 className="font-russo text-[15px]"> & Co.</h2>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-light leading-[30px] pr-[40%]">
              we pride ourselves on delivering personalized, efficient, and
              cost-effective legal services. Our dedication to your success and
              satisfaction is the driving force behind everything we do
            </p>
          </div>
        </div>
        <div className="w-1/3">
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
          <div className="flex gap-7 pb-8 w-full">
            <div>
              <Link
                className="font-medium hover:text-[#CAA839] text-sm"
                href="#"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                className="font-medium hover:text-[#CAA839] text-sm"
                href="#"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                className="font-medium hover:text-[#CAA839] text-sm"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
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
        <p className="text-gray-400 text-sm font-extralight">
          &copy; 2023, Agbolagade Akande & Co.
        </p>
      </div>
    </div>
  );
};

export default Footer;
