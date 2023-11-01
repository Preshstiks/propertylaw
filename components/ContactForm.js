import { AiOutlineClose } from "react-icons/ai";
const ContactForm = ({ closeModal }) => {
  return (
    <div className="z-[9999] fixed top-5 bottom-5 left-0 right-0 flex items-center justify-center">
      <div className="py-[70px] h-full px-[12%] rounded-[25px] flex flex-col bg-white w-[100%]">
        <div className="py-[20px]">
          <h2 className="text-[25px] uppercase font-bold">Contact Us</h2>
        </div>
        <form className="">
          <div className="w-[70%]">
            <div className="md:grid block grid-cols-2 gap-4">
              <div className="py-2">
                <input
                  placeholder="Name"
                  className="w-full rounded-md p-4 bg-gray-200 outline-none"
                  type="text"
                  name="Name"
                />
              </div>

              <div className="py-2">
                <input
                  placeholder="Email"
                  className="w-full rounded-md p-4 bg-gray-200 outline-none"
                  type="email"
                  name="Email"
                />
              </div>
            </div>
            <div className="py-2">
              <input
                placeholder="Subject"
                className="w-full rounded-md p-4 bg-gray-200 outline-none"
                type="text"
                name="Subject"
              />
            </div>
            <div className="py-2">
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-md resize-none p-4 bg-gray-200 outline-none"
                type="text"
                name="Message"
              />
            </div>
            <div className="flex justify-between mt-[20px]">
              <button
                type="button"
                onClick={closeModal}
                className="py-3 px-8 font-bold bg-gray-200 text-[#0A0A22] rounded-full"
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-3 px-8 text-white font-bold bg-[#0A0A22] rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
