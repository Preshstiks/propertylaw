import { BottomIntroData } from "@/data/bottomIntroData";

const BottomIntro = () => {
  return (
    <div
      id={"about"}
      className="px-[12%] sm:py-[100px] py-[80px] md:mr-[25px] sm:mr-[15px] mr-0 rounded-ee-[70px] rounded-se-[70px] bg-[#0A0A22] text-white"
    >
      <div className="md:flex block items-center justify-between">
        <div className="w-[100%]">
          <div>
            <span className="text-[#CAA839] text-[11px] tracking-[4px]">
              WHY CHOOSE US?
            </span>
          </div>
          <div>
            <span className="font-medium sm:text-[30px] text-[25px]">
              Your Path to Legal Excellence
            </span>
          </div>
        </div>
        <div className="w-[100%]">
          <p className="text-gray-400 text-sm leading-6 font-light">
            When it comes to property law, the choice of your legal partner is
            paramount. Agbolagade Akande & Co. offers the ideal solution for all
            your property law needs. With our seasoned experts, unparalleled
            expertise, and a proven track record, we provide the assurance of
            navigating the complexities of property law successfully.
          </p>
        </div>
      </div>
      <div className="md:flex block sm:pt-[100px] pt-[90px] gap-7">
        {BottomIntroData.map((items) => (
          <div className="relative md:pb-0 pb-[70px]" key={items.num}>
            <div className="absolute z-0 top-[-97px] left-2 font-medium text-[#22224b] text-[100px]">
              {items.num}
            </div>
            <div className="relative z-40 md:pb-[40px] pb-2">
              <h2 className="text-lg ">{items.title}</h2>
            </div>
            <div>
              <p className="text-gray-400 leading-6 text-sm font-light">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomIntro;
