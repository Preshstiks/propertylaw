import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
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
  const [show, setShow] = useState(false);
  return (
    <div className="px-[12%] py-[20px] bg-[#0A0A22] text-white">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
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
              Agbolagade Akande
            </h1>
            <h2 className="font-russo md:text-[15px] text-[12px]"> & Co.</h2>
          </div>
        </Link>
        <div>
          <HiMenuAlt3
            onClick={() => setShow(true)}
            className="text-[25px] md:hidden block"
          />
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="bg-[#0A0A22] text-center absolute top-0 left-0 md:hidden h-[50vh] w-full "
            >
              {routes.map((item) => (
                <div className="my-[50px]">
                  <ScrollLink
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={item.link === "link" ? -40 : 0}
                    onClick={() => setShow(false)}
                    className="cursor-pointer font-medium text-sm hover:text-[#CAA839]"
                  >
                    {item.text}
                  </ScrollLink>
                </div>
              ))}
              <div>
                <Link
                  onClick={() => setShow(false)}
                  className="font-medium hover:text-[#CAA839] text-sm"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
              <AiOutlineClose
                onClick={() => setShow(false)}
                className=" text-white text-[25px] absolute top-10 right-10"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="md:flex gap-7 hidden">
          {routes.map((item) => (
            <ScrollLink
              to={item.link}
              spy={true}
              smooth={true}
              offset={item.link === "link" ? -40 : 0}
              className=" cursor-pointer hover:text-[#CAA839]"
            >
              {item.text}
            </ScrollLink>
          ))}

          <div>
            <Link
              className="font-medium hover:text-[#CAA839] text-sm"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
