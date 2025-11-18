"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, Info, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left: Search icon only on mobile */}
          <div className="flex items-center gap-6">
            <button className="flex items-center text-gray-700 hover:text-gray-900 md:hidden">
              <Search size={24} />
            </button>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
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
          </div>

          {/* Logo centered absolutely on mobile, static on desktop */}
          <div className="flex-shrink-0 flex-1 flex justify-center relative">
            <Link href="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
              {/* Logo with sun icon for visual match */}
              <span className="relative flex items-center">
                <svg
                  className="hidden sm:inline-block mr-1"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="20" r="6" fill="#22c55e" />
                  <path d="M16 6v4M16 2v2M16 30v-2M6 16H2M30 16h-4M25.07 25.07l-2.83-2.83M25.07 6.93l-2.83 2.83M6.93 25.07l2.83-2.83M6.93 6.93l2.83 2.83" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                gofundme
              </span>
            </Link>
          </div>

          {/* Right: Hamburger menu on mobile, nav on desktop */}
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-4">
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
              <Link href="/sign-in" className="text-gray-700 hover:text-gray-900">
                Sign in
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">Start a GoFundMe</Button>
            </div>
            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden flex items-center"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay (optional, simple placeholder) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
          <div className="bg-white w-64 h-full shadow-lg p-6">
            <button
              className="mb-6 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Close
            </button>
            <nav className="flex flex-col gap-4">
              <Link href="/fundraise/start" onClick={() => setMobileMenuOpen(false)}>Start a Fundraiser</Link>
              <Link href="/fundraise/how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
              <Link href="/about/company" onClick={() => setMobileMenuOpen(false)}>Company</Link>
              <Link href="/about/team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
              <Link href="/about/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 mt-4">Start a GoFundMe</Button>
            </nav>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}