import { useEffect, useState } from "react";
import thinking from "../assets/images/thinking.png";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const items = [
  {
    id: 1,
    p1: "3x",
    p2: "Faster Release Cycle",
  },
  { id: 2, p1: "40%", p2: "Reduction in manual administration time" },
  { id: 3, p1: "60%", p2: "Software Development Reusability" },
  { id: 4, p1: "40%", p2: "Cost Optimization" },
];
const items2 = [
  {
    title: "Holistic Solutions",
    desc: "we provide end-to-end services, that address all aspects of your needs,ensuring seamless integration and effective results",
  },
  {
    title: "Client-centric Approach",
    desc: "Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations.",
  },
  {
    title: "Innovative Thinking",
    desc: "Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing quality, innovative solutions, and outstanding results in every project we undertake.",
  },
  {
    title: "Expert Team",
    desc: "Our team consists of highly skilled professionals with diverse expertise, dedicated to delivering the highest quality of work and consistently exceeding expectations",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions.",
  },
];
const Description = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => {
        let next = prev + 1;
        if (next === items.length) next = 0;
        return next;
      });
    }, 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="  gap-6 py-10  w-full">
      <div className="flex bg-[#6c5fd4] text-white py-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {[...items, ...items].map((item) => (
            <SwiperSlide className="text-3xl pl-8 pr-6 border-r-2 border-white">
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col md:flex-row p-10 ">
        <div className="w-full md:w-[50%] flex flex-col gap-10 ">
          <p className="text-5xl text-[#6c5fd4] w-[50%]">
            What makes us unique?
          </p>
          <p className="text-xl">
            At Phanom Professionals, we don't just offer services; we innovate,
            create, and lead with excellence. Our unique and forward-thinking
            approach sets us apart in the highly competitive world of marketing
            and IT services. As a leading digital marketing agency in India, we
            are committed to delivering transformative solutions that drive
            growth, inspire engagement, and establish lasting success for our
            clients.
          </p>
          <button className="bg-[#6c5fd4] w-fit px-5 py-2 rounded-xl text-white">
            Book an Appointment
          </button>
        </div>
        <div className="w-full md:w-[50%] overflow-y-auto h-[30rem] hide gap-10 flex flex-col px-4">
          {items2.map((item) => (
            <div className="flex gap-6 items-center shadow-md p-4 shadow-slate-400">
              <img
                style={{ mixBlendMode: "multiply", backgroundColor: "#6c5fd4" }}
                src={thinking}
                alt=""
                srcset=""
                className="w-[5rem] h-[5rem] rounded-xl"
              />
              <div className="flex flex-col gap-6">
                <p className="font-semibold text-2xl">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Description;
