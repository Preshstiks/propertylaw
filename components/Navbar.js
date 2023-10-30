import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img src="/law.png" width={70} alt="logo" />
        </div>
        <div>
          <h1 className="text-[25px] font-russo">Agbolagade Akande</h1>
          <h2 className="font-russo"> & Co.</h2>
        </div>
      </div>
      <div className="flex gap-7">
        <Link className="font-medium text-sm" href="#">
          About Us
        </Link>
        <Link className="font-medium text-sm" href="#">
          Services
        </Link>
        <Link className="font-medium text-sm" href="#">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
