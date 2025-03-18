import logo from "../assets/images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="w-full text-white px-5  md:px-20 py-10 flex flex-col items-center gap-12"
      style={{
        background:
          "linear-gradient(to bottom, #796dd2 40%, #332f52 70%, #1a1923 100% ",
      }}
    >
      <div className="flex flex-col gap-6 w-[40%] text-center ">
        <p className="text-4xl font-bold">
          Let's make something great together.
        </p>
        <p className="text-3xl text-[#bbb8d6] font-bold">
          Let us know what challenges you are trying to solve so we can help.
        </p>
        <button className="bg-white rounded-3xl px-12 py-2.5 w-fit mx-auto text-xl text-[#53499d]">
          Join Us
        </button>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
        <img src={logo} alt="" className="w-[20rem] h-[7rem] object-cover" />
        <div className="grid grid-cols-1  md:grid-cols-2 gap-x-32 gap-y-6">
          <p>Home</p>
          <p>Facebook</p>
          <p>Services</p>
          <p>Instagram</p>
          <p>Hire Indian Talent</p>
          <p>Linkedin</p>
          <p>Our Portfolio</p>
          <p>Pinterest</p>
          <p>Book an Appointment</p>
          <p>Twitter</p>
        </div>
        <div>
          <p>Address :</p>
          <p>E-193,Third Floor,TDS Tower</p>
          <p>Phase 8B,Industrial Area, Sector 74</p>
          <p>Sahibzada Ajit Singh Nagar</p>
          <p>Punjab 160055</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-8 self-start">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-8">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>About Cookies</p>
          </div>
          <p>Copyright 2025 Phanom Techno Private Ltd.All rights reserved.</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-[#6c5fd4] flex justify-center items-center rounded-xl h-fit text-white text-3xl p-4">
            <FaPhoneAlt />
          </div>
          <div className="flex flex-col text-3xl">
            <p className=" text-[#6c5fd4]">Call to ask any question</p>
            <p>+91 (628) 007-2655</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
