import BottomIntro from "@/components/BottomIntro";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  const openModal = () => {
    document.body.classList.add("modal-open");
    setIsOpenModal(true);
  };
  const closeModal = () => {
    document.body.classList.remove("modal-open");
    setIsOpenModal(false);
  };
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div className="bg-[#0A0A22] h-[100vh] flex items-center justify-center w-full">
          <BounceLoader color="#CAA839" speedMultiplier={1} />
        </div>
      ) : (
        <div
          className={isOpenModal ? "relative overflow-y-hidden" : "relative"}
        >
          <Navbar openModal={openModal} />
          <div className="bg-[#0A0A22] py-12 rounded-bl-[70px] text-white font-montserrat">
            <div className="px-[12%]">
              <Header openModal={openModal} />
            </div>
          </div>
          <Services />
          <BottomIntro />
          <Teams />
          <Footer openModal={openModal} />
          <div className="h-full w-full">
            {isOpenModal && <ContactForm closeModal={closeModal} />}
          </div>
        </div>
      )}
    </div>
  );
}
