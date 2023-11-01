import BottomIntro from "@/components/BottomIntro";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div className="bg-[#0A0A22] h-[100vh] flex items-center justify-center w-full">
          <BounceLoader color="#CAA839" speedMultiplier={1} />
        </div>
      ) : (
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
      )}
    </div>
  );
}
