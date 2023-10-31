import Image from "next/image";

const Teams = () => {
  return (
    <div className="pt-[100px]">
      <div>
        <div className="text-center text-[#000033]">
          <h2 className="uppercase text-[27px] tracking-[3px]">Expert Teams</h2>
          <div className="bg-[#CAA839] h-1 w-[50px] mx-auto rounded-full mb-[40px] mt-[20px]"></div>
        </div>
        {/* <p>
          We are committed to safeguarding your property interests and helping
          you make well-informed decisions to protect your real estate
          investments.
        </p> */}
      </div>
      <div className="w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0"
          viewBox="0 0 1200 320"
        >
          <path
            fill="#bbdefb"
            fill-opacity="1"
            d="M0,128L1440,32L1440,320L0,320Z"
          ></path>
        </svg>

        <div className="flex items-center justify-center">
          <div>
            <div className="relative z-[9999px]">
              <Image
                src="/owen.png"
                className="rounded-full mx-auto h-[250px] w-[250px]"
                width={2000}
                style={{
                  objectFit: "cover",
                }}
                height={2000}
              />

              <div>
                <h2 className="font-medium text-center tracking-[3px] text-[#000033]">
                  OWEN L ANDERSON
                </h2>
              </div>
              <div className="w-1/2 text-center mx-auto">
                <span className="text-gray-600 text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-[9999px]">
            <Image
              src="/patricia.png"
              className="rounded-full mx-auto h-[250px] w-[250px]"
              width={2000}
              style={{
                objectFit: "cover",
              }}
              height={2000}
            />
            <div className="text-center">
              <h2 className="font-medium tracking-[3px] text-[#000033]">
                PATRICIA I HANSEN
              </h2>
            </div>
            <div className="w-1/2 text-center mx-auto">
              <span className="text-gray-600 text-sm font-light">
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
