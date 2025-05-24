import { useRef } from "react";
import Slider from "./SamHero"
import { offers } from "../../assets/assets";

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
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-500 special-scroll scrollbar-track-transparent"
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
    </>
  )
}

export default SamHome
