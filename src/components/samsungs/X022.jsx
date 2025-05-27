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
                            className="w-full flex-shrink-0"
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