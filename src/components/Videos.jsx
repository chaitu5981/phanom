import jack from "../assets/videos/Jack.mp4";
import nvidia from "../assets/videos/nvidia.mp4";
import cred from "../assets/videos/cred.mp4";
import jio from "../assets/videos/jio.mp4";
const Videos = () => {
  return (
    <div className="bg-[#616dd6] w-full py-8 px-12 text-white flex flex-col gap-10">
      <p className="text-center text-3xl font-semibold">
        Real stories, Real impact:Our users share their experience
      </p>

      <div className="flex gap-12 justify-center items-center">
        <video controls width={200} className="rounded-md">
          <source src={cred} type="video/mp4" />
        </video>
        <video controls width={230} className="rounded-md">
          <source src={jack} type="video/mp4" />
        </video>
        <video controls width={230} className="rounded-md">
          <source src={nvidia} type="video/mp4" />
        </video>
        <video controls width={200} className="rounded-md">
          <source src={jio} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Videos;
