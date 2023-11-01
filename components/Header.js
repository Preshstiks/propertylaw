import Image from "next/image";
const Header = () => {
  return (
    <div className="pb-[50px]">
      <div className="flex justify-center space-x-[40px] items-center">
        <div>
          <img src="" />
          <div className="font-medium text-[45px]">
            <h1 className="pb-3">Experienced.</h1>
            <h1 className="pb-3">Driven. Effective.</h1>
          </div>
          <div>
            <p className=" font-extralight w-[80%] leading-7">
              Your Trusted Partner in Property Law: Navigating Real Estate with
              Expertise and Excellence.
            </p>
          </div>
        </div>
        <div>
          <Image src="/justice.png" width={370} height={370} alt="header-img" />
          {/* <Image src="/statue.png" width={750} height={750} alt="header-img" /> */}
        </div>
      </div>
      <div className="flex gap-6">
        <button className="py-4 px-5 text-[#0A0A22] rounded-lg text-sm font-bold bg-[#CAA839]">
          Consultation
        </button>
        <button className="py-4 px-5 bg-[#22224b] rounded-lg text-sm font-bold text-[#CAA839]">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default Header;
