"use client"

import { Zap, TimerReset, Notebook } from "lucide-react"

export default function StatisticsSection() {
  return (
    <section className="w-full px-4 sm:px-4 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Left content */}
          <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              More than $50 million is raised every week on GoFundMe.*
            </h2>
            <p className="text-2xl text-gray-600">
              Get started in just a few minutes — with helpful new tools, it's easier than ever to pick the perfect
              title, write a compelling story, and share it with the world.
            </p>
          </div>

          {/* Right stats */}
          <div className="bg-[#FFF3D0] w-full px-2 sm:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-0">
              {/* First stat: always visible */}
              <div className="flex items-center gap-3 text-[#42411D] text-lg font-semibold">
                <Zap size={28} strokeWidth={2} className="mr-1" />
                No fee to start fundraising
              </div>
              {/* Separator and stat: hidden on mobile */}
              <span className="hidden md:inline mx-4 text-[#42411D] text-xl font-light select-none">....................</span>
              <div className="hidden md:flex items-center gap-3 text-[#42411D] text-lg font-semibold">
                <TimerReset size={28} strokeWidth={2} className="mr-1" />
                <span className="font-bold">1</span> donation made every second
              </div>
              <span className="hidden md:inline mx-4 text-[#42411D] text-xl font-light select-none">....................</span>
              <div className="hidden md:flex items-center gap-3 text-[#42411D] text-lg font-semibold">
                <Notebook size={28} strokeWidth={2} className="mr-1" />
                <span className="font-bold">8K+</span> fundraisers started daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}