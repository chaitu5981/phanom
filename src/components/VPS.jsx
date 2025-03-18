import man from "../assets/images/man.png";
import { FaStar } from "react-icons/fa";
const VPS = () => {
  return (
    <div className="w-full bg-[#e9b1f6] flex flex-col md:flex-row px-10 pt-10 items-center">
      <div className="flex items-start  w-full md:w-[50%]">
        <div>
          <p className="font-semibold text-2xl">Adarsh</p>
          <p>Phanom Guide</p>
        </div>
        <img src={man} className="w-[30rem] h-[30rem] object-cover" alt="" />
      </div>
      <div className="w-full  md:w-[39%]  flex flex-col gap-4 text-[18px]">
        <p>Virtual Private Server</p>
        <p className="text-4xl  font-semibold">
          Flexible, Private and Affordable VPS Hosting
        </p>
        <p>Expand major projects with hardware strategy design options.</p>
        <p>Pick your dream OS.</p>
        <p>Maintain Sites and Applications uptime of 99.9%.*</p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="bg-[#6c5fd4] px-8 py-2 rounded-md text-white">
            Get Plans and Pricing
          </button>
          <p>Buy Fully managed VPS</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 text-amber-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-white" />
          </div>
          <p>
            4.6 out of 5 starts based on 110,937 reviews.
            <span className="font-semibold"> View All</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default VPS;
