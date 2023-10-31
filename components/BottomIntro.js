import { BottomIntroData } from "@/data/bottomIntroData";

const BottomIntro = () => {
  return (
    <div className="px-[12%] py-[100px] rounded-ee-[70px] rounded-se-[70px] bg-[#000033] text-white">
      <div className="flex items-center justify-between">
        <div className="w-[100%]">
          <div>
            <span className="text-[#CAA839] text-[11px] tracking-[4px]">
              WHY CHOOSE US?
            </span>
          </div>
          <div>
            <span className="font-medium text-[30px]">
              Your Path to Legal Excellence
            </span>
          </div>
        </div>
        <div className="w-[100%]">
          <p className="text-gray-400 text-sm font-light">
            When it comes to property law, the choice of your legal partner is
            paramount. Agbolagade Akande & Co. offers the ideal solution for all
            your property law needs. With our seasoned experts, unparalleled
            expertise, and a proven track record, we provide the assurance of
            navigating the complexities of property law successfully.
          </p>
        </div>
      </div>
      <div className="flex pt-[100px] gap-7">
        {BottomIntroData.map((items) => (
          <div className="relative" key={items.num}>
            <div className="absolute z-0 top-[-97px] left-2 font-medium text-[#22224b] text-[100px]">
              {items.num}
            </div>
            <div className="relative z-40 pb-[40px]">
              <h2 className="text-lg ">{items.title}</h2>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-light">
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
