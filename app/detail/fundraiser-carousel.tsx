"use client"
import { useState } from "react";

// Carousel/Slider component
export default function FundraiserCarousel({ slides }: { slides: any[] }) {
    const [current, setCurrent] = useState(0);

    const goTo = (idx: number) => setCurrent(idx);
    const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const slide = slides[current];

    return (
        <div className="relative w-full rounded-2xl mb-8 overflow-hidden bg-[#072617] min-h-[400px] flex flex-col justify-center items-center">
            {/* Slide rendering */}
            {slide.type === "image" ? (
                <img
                    src={slide.image}
                    alt="Fundraiser"
                    className="w-full h-[400px] object-cover"
                    draggable={false}
                />
            ) : (
                <>
                    {/* Slide image as background */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
                        draggable={false}
                    />
                    {/* Slide content */}
                    <div className="relative z-10 flex flex-col items-start justify-center w-full h-full py-16 px-6">
                        <h2 className="text-4xl font-extrabold mb-8 text-white">{slide.title}</h2>
                        <p className="text-xl text-white max-w-2xl mb-8">{slide.text}</p>
                        <button className="px-5 py-2 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#072617] transition">
                            {slide.button}
                        </button>
                    </div>
                </>
            )}
            {/* Pagination dots */}
            <div className="absolute left-8 bottom-8 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`w-2 h-2 rounded-full ${current === idx ? "bg-white" : "bg-white/30"} border-none`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            {/* Navigation arrows */}
            <div className="absolute right-8 bottom-4 flex gap-4 z-20">
                <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white text-lg hover:bg-black/90 transition border-none"
                    aria-label="Previous slide"
                >
                    &#8592;
                </button>
                <button
                    onClick={next}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#072617] transition bg-transparent"
                    aria-label="Next slide"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}