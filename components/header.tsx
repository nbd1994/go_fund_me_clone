"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, Info } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left nav */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Search size={20} />
              <span>Search</span>
            </button>

            {/* Donate dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-150">
                <span>Donate</span>
                <ChevronDown size={18} />
              </div>
              <div className="absolute left-0 mt-2 w-[600px] bg-white border rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-30 p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mr-4">
                    <Info size={28} className="text-gray-500" />
                  </div>
                  <span className="text-2xl font-semibold text-gray-900">How it works, pricing, and more</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-6">
                  <div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">How GoFundMe works</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">GoFundMe Giving Guarantee</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">Supported countries</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">Pricing</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">Help Center</div>
                  </div>
                  <div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">About GoFundMe</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">Newsroom</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">Careers</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">GoFundMe.org</div>
                    <div className="mb-4 text-lg text-gray-900 hover:text-green-700 cursor-pointer transition-colors duration-150">GoFundMe Partnerships</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fundraise dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-150">
                <span>Fundraise</span>
                <ChevronDown size={18} />
              </div>
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-30">
                <Link href="/fundraise/start" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">Start a Fundraiser</Link>
                <Link href="/fundraise/how-it-works" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">How it Works</Link>
                <Link href="/fundraise/success-stories" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">Success Stories</Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-600">
              gofundme
            </Link>
          </div>

          {/* Right nav */}
          <div className="flex items-center gap-4">
            {/* About dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-150">
                <span>About</span>
                <ChevronDown size={18} />
              </div>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-30">
                <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">Company</Link>
                <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">Team</Link>
                <Link href="/about/contact" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700 transition-colors duration-150">Contact</Link>
              </div>
            </div>

            <Link href="/signin" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>

            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">Start a GoFundMe</Button>
          </div>
        </div>
      </div>
    </header>
  )
}