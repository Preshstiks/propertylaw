import BottomIntro from "@/components/BottomIntro";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-blue-50">
      <div className="bg-[#0A0A22] py-12 rounded-bl-[70px] text-white font-montserrat">
        <div className="px-[12%]">
          <Navbar />
          <Header />
        </div>
      </div>
      <Services />
      <BottomIntro />
    </div>
  );
}
