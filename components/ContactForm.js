const ContactForm = () => {
  return (
    <div className=" py-[70px] border-b border-t border-[#CAA839]">
      <div className="text-center py-[20px]">
        <h2 className="text-[25px] uppercase">Contact Us</h2>
      </div>
      {/* <div className="flex justify-center">
        <div className="p-4 bg-[#CAA839] text-center inline-flex rounded-full">
          <MdLocationOn className="text-[#0A0A22] font-bold text-[20px]" />
        </div>
      </div>
      <div className="px-[30%]">
        <p className="text-sm text-center font-light leading-[30px]">
          Sahadatu Plaza, 70D, Allen Avenue, Ikeja
        </p>
      </div> */}
      <form className="flex justify-center">
        <div className="w-[60%]">
          <div className="py-2">
            <input
              placeholder="Name"
              className="w-full rounded-md p-4 bg-[#22224b]"
              type="text"
              name="Name"
            />
          </div>
          <div className="py-2">
            <input
              placeholder="Email"
              className="w-full rounded-md p-4 bg-[#22224b]"
              type="email"
              name="Email"
            />
          </div>
          <div className="py-2">
            <input
              placeholder="Subject"
              className="w-full rounded-md p-4 bg-[#22224b]"
              type="text"
              name="Subject"
            />
          </div>
          <div className="py-2">
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-md resize-none p-4 bg-[#22224b]"
              type="text"
              name="Message"
            />
          </div>
          <button className="p-4 text-[#0A0A22] font-bold w-full bg-[#CAA839] rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
