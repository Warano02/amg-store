import { useRef } from "react";
import Slider from "./SamHero"
import { assets, offers } from "../../assets/assets";
import { Link } from "react-router-dom";

function SamHome() {
  const scrollRef = useRef(null);
  return (
    <>
      <Slider />
      <h1 className="text-2xl md:text-4xl m-8 font-bold text-center ">Shop all the latest products and innovations</h1>

      <div className="w-full px-4">
        {/* Wrapper pour isoler la scrollbar */}
        <div className="relative">
          {/* Contenu scrollable */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent  special-scroll"
            style={{ scrollBehavior: 'smooth' }}
          >
            {offers.map((offer, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] text-center">
                <div className="w-[100px] h-[100px] mx-auto rounded-lg overflow-hidden bg-white cursor-pointer shadow transform transition-transform duration-300 hover:scale-105">
                  <img src={offer.img} alt={offer.label} className="object-contain w-full h-full" />
                </div>
                <p className="mt-2 text-sm font-medium">{offer.label}</p>
              </div>
            ))}
          </div>

          {/* Barre visuelle simulée au milieu */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
            <div className="h-1 bg-gray-300 w-1/2 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[32em] mt-4 mb-4 flex items-center justify-center md:justify-start">
        <img src={assets.bg.bg2sam} className="w-full absolute" />
        <div className="relative w-[29.5em] h-96 flex flex-col justify-center items-center gap-1.5 md:ml-24">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-2"> #YouMake every day Smarter </h1>
          <h3 className="font-semibold text-xl md:text-2xl text-center">Choose connection. Enjoy the moment.</h3>
          <div className="relative mt-2 flex justify-center gap-2 items-center  w-full">
            <Link to={"/"} className="group flex flex-col gap-0.5 text-black ">
              Learn More
              <div className="bg-black h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
            <button className="w-1/3 h-9 bg-black text-white font-bold rounded-full cursor-pointer">Shop Now</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default SamHome
