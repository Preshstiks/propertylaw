import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = ({ closeModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-[0.5] w-screen h-screen fixed top-0 left-0 z-[9999] font-russo"
      >
        <div className="bg-white pt-[10px] fixed top-0 bottom-0 left-0 right-0 px-[12%] rounded-[25px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <Image
                  src="/law.png"
                  className="sm:w-[70px] sm:h-[70px] h-[50px] w-[50px]"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </div>
              <div>
                <h1 className="md:text-[18px] text-[#0A0A22] text-[15px]">
                  Emmanuel Akande
                </h1>
                <h2 className="md:text-[15px] text-[12px]"> & Co.</h2>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={closeModal}
                className="py-3 px-8 text-sm font-bold bg-gray-200 text-[#0A0A22] rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="py-[15px]">
            <h2 className="text-[30px] text-[#0A0A22] uppercase font-bold">
              Contact Us
            </h2>
          </div>
          <form className="">
            <div className="md:w-[60%] w-full">
              <div className="md:grid block grid-cols-2 gap-4">
                <div className="py-2">
                  <div className="pb-2">
                    <label className="font-bold">Name</label>
                  </div>
                  <input
                    placeholder="Name"
                    className="w-full rounded-md md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                    type="text"
                    name="Name"
                  />
                </div>

                <div className="py-2">
                  <div className="pb-2">
                    <label className="font-bold">Email</label>
                  </div>
                  <input
                    placeholder="Email"
                    className="w-full rounded-md md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                    type="email"
                    name="Email"
                  />
                </div>
              </div>
              <div className="py-2">
                <div className="pb-2">
                  <label className="font-bold">Subject</label>
                </div>
                <input
                  placeholder="Subject"
                  className="w-full rounded-md md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                  type="text"
                  name="Subject"
                />
              </div>
              <div className="py-2">
                <div className="pb-2">
                  <label className="font-bold">Message</label>
                </div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full rounded-md resize-none md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                  type="text"
                  name="Message"
                />
              </div>
              <div className="flex justify-between mt-[13px] w-full">
                <button
                  type="button"
                  className="md:py-3 py-2 px-6 text-white font-bold w-full bg-[#0A0A22] rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
