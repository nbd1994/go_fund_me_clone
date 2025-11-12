"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-whit py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top crowdfunding tips */}
        <div className="mb-16 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Top crowdfunding tips</h3>
            <Button variant="outline" className="rounded-full bg-transparent">
              View all
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Top tips for your GoFundMe fundraiser",
              "Tips for telling a great fundraiser story",
              "Tips for sharing your fundraiser",
            ].map((tip) => (
              <div
                key={tip}
                className="bg-[#FFF3D0] p-6 flex items-center justify-between cursor-pointer hover:bg-yellow-200 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-10 bg-[#FFD863] rounded-full flex items-center justify-center">💡</div>
                  <p className="font-semibold text-gray-900">{tip}</p>
                </div>
                <span className="text-gray-600">→</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-6">
            *Statistics on this page are averaged figures based on 2023-2024 GoFundMe data.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Donate</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Crisis relief
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Social Impact Funds
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Supporter Space
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Fundraise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How to start a GoFundMe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Fundraising categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Team fundraising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Fundraising Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Charity fundraising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Sign up as a nonprofit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How GoFundMe works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  GoFundMe Giving Guarantee
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Supported countries
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About GoFundMe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  GoFundMe.org
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  GoFundMe Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  GoFundMe Pro for nonprofits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-10 mb-5 border-b border-gray-200">
          <Button variant="ghost" className="text-gray-900 text-base">
            More resources ▼
          </Button>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex border rounded-4xl px-4 py-2 items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <span>🇺🇸</span>
              <span>United States · English</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-gray-600 pt-8">
          <span>© 2010-2025 GoFundMe</span>
          <Link href="#" className="hover:text-gray-900">
            Terms
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Privacy Notice
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Legal
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Accessibility Statement
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Cookie Policy
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Manage Cookie Preferences
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Your Privacy Choices
          </Link>
        </div>

        {/* App download */}
        <div className="flex gap-4 justify-end mt-6">
          <div className="text-xs text-gray-600">Get it on Google Play</div>
          <div className="text-xs text-gray-600">Download on App Store</div>
        </div>
      </div>
    </footer>
  )
}
