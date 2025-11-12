"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">How GoFundMe works</h2>
          <Button variant="outline" className="rounded-full bg-transparent">
            Learn more
          </Button>
        </div>

        <div className="relative bg-blue-100 rounded-3xl overflow-hidden h-80 flex items-center justify-center group cursor-pointer">
          <Image
            src="/diverse-people-gardening-community.jpg"
            alt="How GoFundMe works"
            fill
            className="object-cover group-hover:opacity-80 transition-opacity"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Play className="w-8 h-8 text-green-600 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-4 py-2 shadow-lg text-gray-900 font-semibold">
            Play 1 min video
          </div>
        </div>
      </div>
    </section>
  )
}
