import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-[12%] py-[20px] bg-[#0A0A22] text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img src="/law.png" width={70} alt="logo" />
          </div>
          <div>
            <h1 className="text-[18px] font-russo">Agbolagade Akande</h1>
            <h2 className="font-russo text-[15px]"> & Co.</h2>
          </div>
        </div>
        <div className="flex gap-7">
          <div>
            <Link className="font-medium hover:text-[#CAA839] text-sm" href="#">
              Home
            </Link>
            <div className="bg-[#CAA839] mt-2 mx-auto h-1 rounded-full w-9"></div>
          </div>
          <div>
            <Link className="font-medium hover:text-[#CAA839] text-sm" href="#">
              Services
            </Link>
          </div>
          <div>
            <Link className="font-medium hover:text-[#CAA839] text-sm" href="#">
              About Us
            </Link>
          </div>
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
