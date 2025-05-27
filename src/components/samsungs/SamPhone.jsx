import { useParams } from "react-router-dom"

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useShopContext } from "../../hooks/useShopContext";
function SamPhone() {
  const { formatPrice } = useShopContext()
  const { id } = useParams()
  console.log(id);

  const storages = [
    {
      size: '256Go',
      normal: 1299.99,
      price: 1199.99,
      colors: [
        {
          col: "#0000",
          name: "Black",
          price: 9112.99
        },
        {
          col: "#ffff",
          name: "White",
          price: 799.99
        },
      ]
    }
  ]

  return (
    <>
      <Title />
      <div className="flex relative pl-2 w-full h-[32em] gap-3 md:justify-between">
        <ImageSlider />
        <div className="hide-scrollbar overflow-auto relative w-full md:w-1/3 min-h-96 max-h-[32em]  top-9">
          <div className="w-full h-8 rounded-4xl bg-[#F8F8F8] flex justify-center items-center mb-4">
            <span className="w-1/2 h-2/3 cursor-pointer shadow-2xs p-2 rounded bg-white font-bold text-[13px] flex justify-center items-center">Galaxie S25 Ultra</span>
          </div>
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Storage</h1>
            <p>Limite Offer. <span className="text-[#ee9765]">Double your storage on us</span> </p>
          </div>
          <div className="w-full p-4">
            {
              storages.map((ele, i) => (
                <div key={i} className="w-full h-24 border-2 border-blue-200 rounded flex items-center justify-between p-2">
                  <h1 className="text-xl font-bold">{ele.size}</h1>
                  <div className="flex flex-col gap-2 justify-end">
                    <div className="flex gap-1">
                      {ele.normal && <span className="text-gray-500 font-semibold line-through"> {formatPrice(ele.normal)} </span>}
                      <h2 className="font-bold">{formatPrice(ele.price)} </h2>
                    </div>
                    {ele.normal&& <span className="text-orange-500 font-[400]">Save -{formatPrice(ele.normal-ele.price)} </span>}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

const images = [
  'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
  'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
  'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
  'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
  'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png',
];

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length;

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center mt-5 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-black' : 'bg-black/20'
              }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}


export function Title() {
  const SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" className="w-26 h-4">
      <polygon className="fill-yellow-400" points="15,0 19,10 30,10 21,15 24,25 15,18 6,25 9,15 0,10 11,10" />
      <polygon className="fill-yellow-400" points="45,0 49,10 60,10 51,15 54,25 45,18 36,25 39,15 30,10 41,10" />
      <polygon className="fill-yellow-400" points="75,0 79,10 90,10 81,15 84,25 75,18 66,25 69,15 60,10 71,10" />
      <polygon className="fill-yellow-400" points="105,0 109,10 120,10 111,15 114,25 105,18 96,25 99,15 90,10 101,10" />
      <polygon className="fill-yellow-400" points="135,0 139,10 150,10 141,15 144,25 135,18 126,25 129,15 120,10 131,10" />
    </svg>
  )
  return (
    <div className="sticky top-0 z-50 w-full h-[8em] bg-white flex border-b-0.2 border-gray-500 items-center justify-between md:p-2.5">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-2">Galaxie S25 Ultra <span className="text-xl font-semibold text-gray-500">Unlocked | 1TB | Titanium JetBlack </span></h1>
        <div className="flex items-center ">
          <h3 className="font-semibold text-gray-800">SM-S93U1 /SM938UAKFXAA |</h3>
          <SVG />
          <span className="text-blue-500 cursor-pointer hover:underline">4.8 (7803)</span>
        </div>
      </div>
      <div className="flex justify-around gap-14 items-center h-full relative">
        <div className="flex flex-col gap-2">
          <span className="text-[1em] text-gray-500">Total</span>
          <span className="text-2xl font-bold">$1,199.99</span>
          <div className="flex gap-2">
            <span className="text-gray-600 line-through">$122</span>
            <span className="text-orange-500">Save $240</span>
          </div>
        </div>
        <button className="w-[130px] h-12 rounded-3xl bg-[#408CCE] text-white font-bold cursor-pointer">Continue</button>
      </div>
    </div>
  )
}


export default SamPhone