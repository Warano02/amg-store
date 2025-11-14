import { useState, useEffect } from 'react';
import { assets } from '@/assets/assets';
import { Link } from 'react-router-dom';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            back: assets.bg.samsungSlid1,
            title1: "Memorial Day Saving",
            title: 'Save $1,400 on the 65" OLED S90D',
            title2: "OLED Week is here - your best viewing experience yet.",
            b1: "Shop all deals",
            b2: "Buy now",
            to: "/"
        },
        {
            back: assets.bg.samsungSlid2,
            title1: "Memorial Day Saving",
            title: 'Save $1,400 on the 65" OLED S90D',
            title2: "OLED Week is here - your best viewing experience yet.",
            b1: "Shop all deals",
            b2: "Buy now",
            to: "/"
        },
        {
            back: assets.bg.samsungSlid3,
            title1: "Memorial Day Saving",
            title: 'Save $1,400 on the 65" OLED S90D',
            title2: "OLED Week is here - your best viewing experience yet.",
            b1: "Shop all deals",
            b2: "Buy now",
            to: "/"
        },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, currentSlide]);

    return (
        <div className="relative w-full h-[30em] sm:h-[40em] overflow-hidden bg-black">
            {/* Navigation */}
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between z-10 px-2 sm:px-4'>
                <button
                    onClick={prevSlide}
                    className="p-1 sm:p-2 bg-black/30 rounded-full hover:bg-black/50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-1 sm:p-2 bg-black/30 rounded-full hover:bg-black/50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Slides */}
            <div className="w-full h-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full shrink-0 h-full relative">
                            <img
                                src={slide.back}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Texte en overlay */}
                            <div className="absolute bottom-10 sm:bottom-40 left-4 sm:left-20 text-black">
                                <h2 className="text-base sm:text-xl font-bold cursor-pointer">{slide.title1}</h2>
                                <h1 className="text-xl sm:text-3xl font-extrabold cursor-pointer">{slide.title}</h1>
                                <p className="mt-1 sm:mt-2 text-sm sm:text-base">{slide.title2}</p>
                                <div className="mt-4 flex flex-wrap gap-2 sm:gap-4">
                                    <Link to={slide.to} className="text-sm sm:text-base bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded">{slide.b1}</Link>
                                    <Link to={slide.to} className="text-sm sm:text-base bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border border-white rounded">{slide.b2}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bouton pause/play */}
            <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute bottom-4 right-4 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition cursor-pointer"
                title={isPaused ? "Play" : "Pause"}
            >
                {isPaused ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default Slider;
