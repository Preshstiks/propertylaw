import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <div className="h-full w-full relative">
      {isLoading ? (
        <div className="bg-[#0A0A22] h-[100vh] flex items-center justify-center w-full">
          <BounceLoader color="#CAA839" speedMultiplier={1} />
        </div>
      ) : (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
