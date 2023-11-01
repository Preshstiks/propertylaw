import BottomIntro from "@/components/BottomIntro";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import { BounceLoader } from "react-spinners";

export default function Home() {
  return (
    <div>
      <div className="bg-[#0A0A22] py-12 rounded-bl-[70px] text-white font-montserrat">
        <div className="px-[12%]">
          <Header />
        </div>
      </div>
      <Services />
      <BottomIntro />
      <Teams />
    </div>
  );
}
