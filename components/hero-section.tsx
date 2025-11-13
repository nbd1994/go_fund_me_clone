"use client"
import { Button } from "@/components/ui/button"
import CauseCircle from "@/components/cause-circle"
import BackgroundBubbles from "@/components/background-bubbles"

const categories = [
  { label: "Your cause", image: "/diverse-family.jpg", style: { top: "2%", left: "20%" } },
  { label: "Medical", image: "/medical-healthcare.jpg", style: { top: "35%", left: "13%" } },
  { label: "Emergency", image: "/emergency-crisis.jpg", style: { bottom: "2%", left: "20%" } },
  { label: "Education", image: "/education-students.jpg", style: { top: "2%", right: "20%" } },
  { label: "Business", image: "/business-startup.png", style: { top: "35%", right: "13%" } },
  { label: "Animal", image: "/animal-pet.jpg", style: { bottom: "2%", right: "20%" } },
]

export default function HeroSection() {
  return (
    <div>
      <BackgroundBubbles />
      <section className="relative backdrop-blur-sm w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="h-110 max-w-7xl mx-auto relative z-20">
          <div className="text-center">
            <p className="text-l font-bold text-gray-600 mb-2">#1 CROWDFUNDING PLATFORM</p>
          </div>

          {/* Category circles */}
          <div className="relative h-110 flex flex-col items-center justify-center mb-12">

            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8">
                Successful
                <br />
                fundraisers
                <br />
                start here
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Start a GoFundMe
              </Button>
            </div>

            <div className="hidden sm:block">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="absolute"
                  style={cat.style}
                >
                  <CauseCircle label={cat.label} image={cat.image} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}