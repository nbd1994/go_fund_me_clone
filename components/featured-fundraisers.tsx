"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import FundraiserCard from "./ui/fundraiser-card"

const fundraisers = [
  {
    id: 1,
    title: "Help for Maria Florida Rios",
    image: "/help-maria-florida.jpg",
    donations: "2.5K",
    raised: "$111,958",
    progress: 85,
  },
  {
    id: 2,
    title: "Help Ivanna Potts Get Lifesaving Heart Surgery in America",
    image: "/medical-heart-surgery.jpg",
    donations: "5.9K",
    raised: "$173,378",
    progress: 75,
  },
  {
    id: 3,
    title: "Në ndihmë të Nexhmiut me sklerozë multiple",
    image: "/medical-multiple-sclerosis.jpg",
    donations: "1.2K",
    raised: "€56,320",
    progress: 60,
  },
  {
    id: 4,
    title: "Hero - Sam Zitouni and his family",
    image: "/diverse-family-portrait.png",
    donations: "2.9K",
    raised: "€64,552",
    progress: 70,
  },
  {
    id: 5,
    title: "Support Lewis Rimmer's Recovery and His Family",
    image: "/recovery-support-family.jpg",
    donations: "1.7K",
    raised: "€95,539",
    progress: 80,
  },
]

export default function FeaturedFundraisers() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Discover fundraisers inspired by what you care about</h2>
          <div className="flex items-center justify-between">
            <button className="py-2 px-4 text-gray-600 border-2 rounded-4xl hover:text-gray-900">Happening worldwide ▼</button>

            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:hidden">
          <FundraiserCard
            image="/medical-heart-surgery.jpg"
            title="Help Ivanna Potts Get Lifesaving Heart Surgery in America"
            donations="6.2K donations"
            amount="£177,128 raised"
            progress={0.8}
          />
          <FundraiserCard
            image="/medical-multiple-sclerosis.jpg"
            title="Hero - Sam Zitouni and his family"
            donations="3K donations"
            amount="£66,205 raised"
            progress={0.95}
          />
          <FundraiserCard
            image="/recovery-support-family.jpg"
            title="Ken kämpft mit Alva gegen Krebs"
            donations="1K donations"
            amount="€31,564 raised"
            progress={0.65}
          />
        </div>
        <div className="sm:hidden flex justify-center mt-6">
          <button className="w-full max-w-xs py-3 rounded-xl bg-white text-gray-900 font-semibold shadow border text-lg">
            Show more
          </button>
        </div>

        <div className="hidden sm:grid grid-cols grid-cols-4 gap-2 mt-8">
          {/* Left: Large featured fundraiser */}
          <div className="col-span-2">
            {/* Replace with your fundraiser card component or markup */}
            <FundraiserCard
              image="/help-maria-florida.jpg"
              title="Në ndihmë të Nexhmiut me sklerozë multiple"
              donations="1.2K donations"
              amount="€56,320 raised"
              progress={0.7}
              large
              href="/detail"
            />
          </div>

          {/* Middle: Two stacked fundraisers */}
          <div className="flex flex-col gap-6">
            <FundraiserCard
              image="/medical-heart-surgery.jpg"
              title="Help Ivanna Potts Get Lifesaving Heart Surgery in America"
              donations="5.9K donations"
              amount="£173,462 raised"
              progress={0.9}
            />
            <FundraiserCard
              image="/medical-multiple-sclerosis.jpg"
              title="Help for Maria Florinda Rios"
              donations="2.5K donations"
              amount="$112,008 raised"
              progress={0.8}
            />
          </div>

          {/* Right: Two stacked fundraisers */}
          <div className="flex flex-col gap-6">
            <FundraiserCard
              image="/medical-multiple-sclerosis.jpg"
              title="Hero - Sam Zitouni and his family"
              donations="2.9K donations"
              amount="£64,799 raised"
              progress={0.85}
            />
            <FundraiserCard
              image="/recovery-support-family.jpg"
              title="Support Lewis Rimmer’s Recovery and His Family"
              donations="1.7K donations"
              amount="£95,924 raised"
              progress={0.75}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
