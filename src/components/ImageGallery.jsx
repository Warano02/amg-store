import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';


export function ImageSlider({images}) {
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
        setCurrentSlide((prev) => prev === 0 ? totalSlides - 1 : prev - 1);
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
                            className="w-full shrink-0"
                        />
                    ))}
                </div>
                <button onClick={goToPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            <div className="flex items-center mt-5 space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-black' : 'bg-black/20'}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}


export const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0] || "")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const thumbRef = useRef(null)

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0])
    }
  }, [images])

  const scrollThumbnails = (direction) => {
    if (!thumbRef.current) return
    const scrollAmount = 200
    thumbRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  if (images.length === 0) return null

  return (
    <div className="flex flex-col items-center space-y-4 relative">
      <div className="w-full max-w-3xl relative cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <img
          src={mainImage}
          alt="Main"
          className="w-full rounded-lg h-96 object-cover transition-transform duration-300"
        />
        <span className="absolute bottom-2 right-4 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
          Click to Zoom
        </span>
      </div>

      <div className="flex items-center gap-2 w-full max-w-3xl">
        <button
          className="text-gray-600 hover:text-black p-2"
          onClick={() => scrollThumbnails("left")}
        >
          ◀
        </button>
        <div
          className="flex gap-2 overflow-x-auto hide-scrollbar"
          ref={thumbRef}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`rounded-lg md:h-24 h-14 w-auto object-cover cursor-pointer transition-all duration-200 
                ${mainImage === img ? "ring-2 ring-blue-500" : "hover:opacity-80"}`}
            />
          ))}
        </div>
        <button
          className="text-gray-600 hover:text-black p-2"
          onClick={() => scrollThumbnails("right")}
        >
          ▶
        </button>
      </div>

      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={mainImage}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded"
          />
        </div>
      )}
    </div>
  )
}
