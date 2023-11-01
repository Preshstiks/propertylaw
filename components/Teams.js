import Image from "next/image";
const Teams = () => {
  return (
    <div className="md:pt-[100px] pt-[70px]">
      <div>
        <div className="text-center text-[#0A0A22]">
          <h2 className="uppercase text-[27px] tracking-[3px]">Expert Teams</h2>
          <div className="bg-[#CAA839] h-1 w-[50px] mx-auto rounded-full mb-[40px] mt-[20px]"></div>
        </div>
      </div>
      <div className="w-full pb-[100px] relative">
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 320">
            <path
              fill="#bbdefb"
              fill-opacity="1"
              d="M0,128L1440,32L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="md:flex block items-center justify-center">
          <div>
            <div className="relative z-[9999px] md:pb-0 pb-10">
              <Image
                src="/George-Oginni.png"
                className="rounded-full mx-auto md:h-[250px] md:w-[250px] h-[200px] w-[200px]"
                width={2000}
                style={{
                  objectFit: "cover",
                }}
                height={2000}
              />

              <div className="py-3">
                <h2 className="font-medium md:text-base text-sm text-center tracking-[3px] text-[#0A0A22]">
                  GEORGE OGINNI
                </h2>
              </div>
              <div className="xsm:w-1/2 w-[70%] text-center mx-auto">
                <span className="text-gray-600 md:text-sm text-[13px] font-light leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-[9999px]">
            <Image
              src="/kisha-brown.png"
              className="rounded-full mx-auto md:h-[250px] md:w-[250px] h-[200px] w-[200px]"
              width={2000}
              style={{
                objectFit: "cover",
              }}
              height={2000}
            />
            <div className="text-center py-3">
              <h2 className="font-medium md:text-base text-sm tracking-[3px] text-[#0A0A22]">
                KISHA BROWN
              </h2>
            </div>
            <div className="xsm:w-1/2 w-[70%]  text-center mx-auto">
              <span className="text-gray-600 md:text-sm text-[13px] font-light leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
