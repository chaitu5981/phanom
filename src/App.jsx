import "./App.css";
import Logo from "./assets/images/logo.png";

import Animation from "./components/Animation";
import Service from "./components/Service";
import Logos from "./components/Logos";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Choose from "./components/Choose";
import Videos from "./components/Videos";
import VPS from "./components/VPS";
const App = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const hideMenu = (e) => {
    console.log(e.target.classList);
    if (
      !e.target.classList.contains("menu") &&
      !e.target.classList.contains("service-btn")
    ) {
      console.log("Hi");
      setShowMenu(false);
    }
  };
  console.log(showMenu);
  return (
    <div className="" onClick={hideMenu}>
      <div className="flex justify-around flex-row sm:flex-col md:flex-row px-6 relative">
        <img src={Logo} className="w-[10rem] h-[4rem]" alt="logo" srcset="" />
        <div className="hidden  sm:flex justify-between items-center gap-7">
          <div className="flex gap-5 font-semibold ">
            <button
              className="service-btn"
              onClick={() => setShowMenu((p) => !p)}
            >
              Service
            </button>
            <button>Hire Indian Talent</button>
            <button>Our Portfolio</button>
            <button>Case Study</button>
          </div>
          <button className="bg-[#6C5FD4] text-white rounded-3xl px-3.5  py-2 h-fit">
            Book an Appointment
          </button>
        </div>

        <button
          className="block sm:hidden text-3xl"
          onClick={() => setShowDropDownMenu((p) => !p)}
        >
          <GiHamburgerMenu />
        </button>
        {showMenu && (
          <div className="grid grid-cols-2 md:grid-cols-4 absolute top-12 shadow-xl p-6 gap-8 rounded-md left-1/2 -translate-x-1/2 bg-white z-20 menu">
            <div className="flex flex-col gap-4">
              <p className="text-[#6c5fd4] font-bold text-xl">
                Digital Marketing
              </p>
              <button className="w-full text-left self-start">
                SEO (Search Engine Optimization)
              </button>
              <button className="w-full text-left self-start">
                Social Media MArketing
              </button>
              <button className="w-full text-left self-start">
                Pay Per Click(PPC)
              </button>
              <button className="w-full text-left self-start">
                Youtube Marketing
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#6c5fd4] font-bold text-xl">
                Design & Development
              </p>
              <button className="w-full">Web Development</button>
              <button className="w-full">Shopify</button>
              <button className="w-full">Java</button>
              <button className="w-full">Magento</button>
              <button className="w-full">Wordpress</button>
              <button className="w-full">PHP</button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#6c5fd4] font-bold text-xl">
                Animation & Graphics
              </p>
              <button className="w-full text-left">Video Marketing</button>
              <button className="w-full text-left">Branding</button>
              <button className="w-full text-left">
                Packaging & Labelling
              </button>
              <button className="w-full text-left">Graphic Design</button>
              <button className="w-full text-left">Web Design</button>
              <button className="w-full text-left">Rotoscoping</button>
              <button className="w-full text-left">Animation</button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#6c5fd4] font-bold text-xl">
                E-Commerce Solutions
              </p>
              <button className="w-full text-left">E-commerce Marketing</button>
              <button className="w-full text-left">Amazon Marketing</button>
            </div>
          </div>
        )}
      </div>
      {showDropDownMenu && (
        <div className="sm:hidden w-full flex flex-col px-6 gap-2.5">
          <button
            className="w-fit service-btn"
            onClick={() => setShowMenu((p) => !p)}
          >
            Service
          </button>
          <button className="w-fit">Hire Indian Talent</button>
          <button className="w-fit">Our Portfolio</button>
          <button className="w-fit">Case Study</button>
          <button className="bg-[#6C5FD4] text-white rounded-3xl px-3.5  py-2 h-fit w-fit">
            Book an Appointment
          </button>
        </div>
      )}

      <Hero />
      <Logos />
      <Animation />
      <Service />
      <VPS />
      <Description />
      <Choose />
      <Videos />
    </div>
  );
};
export default App;
