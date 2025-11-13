"use client"

import { useState } from "react";
import Header from "@/components/header";
import FeaturedFundraisers from "@/components/featured-fundraisers";
import Footer from "@/components/footer"

// Carousel/Slider component
function FundraiserCarousel({ slides }: { slides: any[] }) {
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

// Fundraiser Details component
function FundraiserDetails() {
    return (
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow border space-y-6">
            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xl">
                    <svg width="28" height="28" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                    </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">Joe Steele</span>
            </div>
            <hr />
            {/* Donation protected badge */}
            <div>
                <span className="inline-flex items-center px-3 py-1 rounded-md bg-cyan-100 text-cyan-900 font-semibold text-base">
                    <svg className="mr-1" width="18" height="18" fill="none" stroke="#0891b2" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 3l7 4v5c0 5.25-3.5 10-7 10s-7-4.75-7-10V7l7-4z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                    Donation protected
                </span>
            </div>
            <hr />
            {/* Story text */}
            <div className="space-y-6 text-lg text-gray-900">
                <p>
                    I’ve written this on behalf of Ivanna’s parents, Shannon and Jack. Over the past couple of weeks, since receiving the news, they’ve been trying to plan the sale of Ivanna’s home and explore ways to manage it on their own. However, with time working against them, they’ve realised that it simply isn’t possible to do it without help. Here’s her story..
                </p>
                <p>
                    Our brave little girl, Ivanna, is just 4 years old and living every parent’s worst nightmare, yet she greets each day with courage and a smile.
                </p>
                <p>
                    She was born with a complex and severe form of congenital heart disease hypoplastic right heart and heterotaxy syndrome, including:
                </p>
                <a href="#" className="text-gray-900 underline font-semibold">Read more</a>
            </div>
            {/* Reactions */}
            <div className="flex items-center gap-2 pt-2 px-1">
                <span className="flex items-center gap-1 text-gray-700 text-lg font-medium">
                    <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                    </svg>
                    React
                </span>
                <span className="text-xl md:text-2xl">❤️</span>
                <span className="text-xl md:text-2xl">🩹</span>
                <span className="text-xl md:text-2xl">💚</span>
                <span className="text-xl md:text-2xl">💐</span>
                <span className="text-xl md:text-2xl">🙏</span>
                <span className="text-xl md:text-2xl">👏</span>
                <span className="text-xl md:text-2xl">✨</span>
            </div>
        </div>
    );
}

function FundraiserUpdates() {
    return (
        <div className="bg-white rounded-2xl p-4  md:p-8 shadow border mt-8">
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-extrabold">Updates</h2>
                <span className="bg-gray-100 text-gray-700 text-sm font-bold px-2 py-0.5 rounded">2</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-600">
                    J
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">Nov 7</span>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded">NEW</span>
                    </div>
                    <div className="text-gray-500 text-sm">
                        Joe Steele &middot; Organizer
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-4">
                <div className="uppercase text-gray-700 font-semibold mb-2 text-sm">Update</div>
                <div className="space-y-4 text-lg text-gray-900">
                    <p>
                        We are nearly 60% there towards our goal to save our daughters life <span className="text-xl">❤️</span> we are so so grateful for everyone’s support where it be sharing Ivanna’s story or kind donations, we want to thank you all! The support has been unbelievable, more than we ever imagined.
                    </p>
                    <p>
                        After the news we received that Ivanna now has no surgical options left in the UK we are now at a race against time with around 40% remaining still to meet. Ivanna’s case is time sensitive, we are praying she doesn’t lose the surgical window chance for survival before we can get her to Boston.
                    </p>
                    <p>
                        Any shares and donations could be the reason Ivanna reaches her 5th birthday <span className="text-xl">❤️</span>
                    </p>
                    <p>
                        Without Ivanna, we have nothing..
                    </p>
                    <p>
                        Ivannas mum and dad x
                    </p>
                </div>
            </div>
            <div className="mb-4">
                <img
                    src="/gofundme-giving-funds-app.jpg"
                    alt="Update"
                    className="rounded-xl w-40 h-32 object-cover"
                />
            </div>
            <button className="border border-gray-400 rounded-full px-6 py-2 font-semibold text-lg mb-6 hover:bg-gray-50 transition">
                See 1 more
            </button>
            <div className="flex gap-4">
                <button className="flex-1 border border-gray-400 rounded-full px-6 py-3 font-bold text-lg hover:bg-gray-50 transition">
                    Donate
                </button>
                <button className="flex-1 border border-gray-400 rounded-full px-6 py-3 font-bold text-lg hover:bg-gray-50 transition">
                    Share
                </button>
            </div>
        </div>
    );
}


// Donation Summary (sticky right/floating bottom on mobile) component
function DonationSummary() {
    return (
        <>
            {/* Desktop: sticky right */}
            <aside className="w-full max-w-sm hidden md:block">
                <div className="sticky top-24">
                    <div className="bg-white rounded-2xl border p-6 shadow flex flex-col gap-6">
                        {/* Progress circle and stats */}
                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16">
                                <svg className="w-16 h-16" viewBox="0 0 36 36">
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#eee"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="4"
                                        strokeDasharray="100"
                                        strokeDashoffset={100 - 70}
                                        strokeLinecap="round"
                                        style={{ transition: "stroke-dashoffset 0.5s" }}
                                    />
                                    <text
                                        x="18"
                                        y="22"
                                        textAnchor="middle"
                                        fontSize="12"
                                        fontWeight="bold"
                                        fill="#222"
                                    >
                                        70%
                                    </text>
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">£173,703 raised</div>
                                <div className="text-gray-500 text-sm">£250K goal &middot; 5.9K donations</div>
                            </div>
                        </div>
                        {/* Donate and Share buttons */}
                        <button className="w-full bg-lime-200 text-green-900 font-bold py-4 rounded-full text-xl hover:bg-lime-300 transition">
                            Donate now
                        </button>
                        <button className="w-full bg-green-900 text-lime-200 font-bold py-4 rounded-full text-xl hover:bg-green-800 transition">
                            Share
                        </button>
                        {/* Recent donations */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                                    <svg width="20" height="20" fill="none" stroke="#a259d9" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"></path></svg>
                                </span>
                                <span className="text-lg font-bold text-purple-700">303 people just donated</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-3.582-9-8 0-2.21 1.79-4 4-4 1.306 0 2.417.835 2.83 2h2.34c.413-1.165 1.524-2 2.83-2 2.21 0 4 1.79 4 4 0 4.418-4.03 8-9 8z"></path></svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold">Anonymous</div>
                                        <div className="text-gray-800">
                                            <span className="font-bold">£5</span> &middot; <span className="underline cursor-pointer">Recent donation</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-3.582-9-8 0-2.21 1.79-4 4-4 1.306 0 2.417.835 2.83 2h2.34c.413-1.165 1.524-2 2.83-2 2.21 0 4 1.79 4 4 0 4.418-4.03 8-9 8z"></path></svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold">The Sky Is The Limit Competitions</div>
                                        <div className="text-gray-800">
                                            <span className="font-bold">£5,200</span> &middot; <span className="underline cursor-pointer">Top donation</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-3.582-9-8 0-2.21 1.79-4 4-4 1.306 0 2.417.835 2.83 2h2.34c.413-1.165 1.524-2 2.83-2 2.21 0 4 1.79 4 4 0 4.418-4.03 8-9 8z"></path></svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold">Anonymous</div>
                                        <div className="text-gray-800">
                                            <span className="font-bold">£5</span> &middot; 5 mins
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-3.582-9-8 0-2.21 1.79-4 4-4 1.306 0 2.417.835 2.83 2h2.34c.413-1.165 1.524-2 2.83-2 2.21 0 4 1.79 4 4 0 4.418-4.03 8-9 8z"></path></svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold">Anonymous</div>
                                        <div className="text-gray-800">
                                            <span className="font-bold">£20</span> &middot; 24 mins
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Mobile: floating bottom bar */}
            <div className="fixed md:hidden left-0 right-0 bottom-0 z-40 px-2 pb-2 pointer-events-none">
                <div className="bg-white rounded-2xl border shadow flex flex-col gap-4 p-4 max-w-6/7 mx-auto pointer-events-auto">
                    {/* Progress and stats */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <svg className="w-12 h-12" viewBox="0 0 36 36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    stroke="#eee"
                                    strokeWidth="4"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    stroke="#22c55e"
                                    strokeWidth="4"
                                    strokeDasharray="100"
                                    strokeDashoffset={100 - 70}
                                    strokeLinecap="round"
                                    style={{ transition: "stroke-dashoffset 0.5s" }}
                                />
                                <text
                                    x="18"
                                    y="22"
                                    textAnchor="middle"
                                    fontSize="10"
                                    fontWeight="bold"
                                    fill="#222"
                                >
                                    70%
                                </text>
                            </svg>
                        </div>
                        <div>
                            <div className="text-lg font-bold">£173,703 raised</div>
                            <div className="text-gray-500 text-xs">£250K goal &middot; 5.9K donations</div>
                        </div>
                    </div>
                    {/* Donate and Share buttons */}
                    <div className="flex gap-2">
                        <button className="flex-1 bg-lime-200 text-green-900 font-bold py-3 rounded-full text-base hover:bg-lime-300 transition">
                            Donate now
                        </button>
                        <button className="flex-1 bg-green-900 text-lime-200 font-bold py-3 rounded-full text-base hover:bg-green-800 transition">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

const slides = [
    {
        image: "/animal-pet.jpg",
        type: "image",
    },
    {
        image: "/medical-heart-surgery.jpg",
        title: "Story",
        text: `I've written this on behalf of Ivanna’s parents, Shannon and Jack. Over the past couple of weeks, since receiving the news, they’ve been trying to plan the sale of Ivanna’s home and explore ways to manage it on their own. However, wi...`,
        button: "Read more",
    },
    {
        image: "/gofundme-giving-funds-app.jpg",
        title: "Update",
        text: "Ivanna’s surgery is scheduled for next month. Thank you for your support!",
        button: "See update",
    },
    {
        image: "/gofundme-giving-funds-app.jpg",
        type: "image",
    },
];

export default function Detail() {
    return (
        <main>
            <Header />
            <div className="mt-4 mx-auto py-5 px-4">
                <h1 className="text-4xl font-extrabold mb-4">Help Ivanna Potts Get Lifesaving Heart Surgery in America</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-10 flex gap-8">
                {/* Left: Fundraiser details (scrollable) */}
                <section className="flex-1 min-w-0">
                    <FundraiserCarousel slides={slides} />
                    <FundraiserDetails />
                    <FundraiserUpdates />
                </section>
                {/* Right: Sticky donation summary */}
                <DonationSummary />
            </div>
            <FeaturedFundraisers />
            <Footer />
        </main>
    );
}