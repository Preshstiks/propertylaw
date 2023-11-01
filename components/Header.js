import Image from "next/image";
const Header = () => {
  return (
    <div className="pb-[50px]">
      <div className="md:flex block justify-center space-x-[40px] items-center">
        <div>
          <img src="" />
          <div className="font-medium sm:text-[40px] text-[35px] md:text-[45px]">
            <h1 className="pb-3">Experienced.</h1>
            <h1 className="pb-3">Driven. Effective.</h1>
          </div>
          <div>
            <p className="font-extralight sm:text-base text-[13px] w-[80%] leading-7">
              Your Trusted Partner in Property Law: Navigating Real Estate with
              Expertise and Excellence.
            </p>
          </div>
        </div>
        <div className="md:block hidden">
          <Image src="/justice.png" width={370} height={370} alt="header-img" />
          {/* <Image src="/statue.png" width={750} height={750} alt="header-img" /> */}
        </div>
      </div>
      <div className="flex md:pt-0 pt-9 gap-6">
        <button className="sm:py-4 sm:px-5 py-3 px-4 text-[#0A0A22] rounded-lg xsm:text-sm text-xs font-bold bg-[#CAA839]">
          Consultation
        </button>
        <button className="sm:py-4 sm:px-5 py-3 px-4 bg-[#22224b] rounded-lg xsm:text-sm text-xs font-bold text-[#CAA839]">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default Header;
