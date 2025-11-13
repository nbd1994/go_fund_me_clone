"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const topics = [
  {
    id: 1,
    title: "GoFundMe Giving Funds",
    description:
      "A brand new product to make a bigger impact on the nonprofits you care about. The only Donor-Advised Fund backed by the world leader in giving.",
    badge: "New",
    badgeColor: "bg-purple-300",
    image: "/gofundme-giving-funds-app.jpg",
    action: "Learn more",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Hurricane Melissa",
    image: "/hurricane-melissa-disaster.jpg",
    badge: "Natural disaster",
    badgeColor: "bg-cyan-300",
    action: "Donate now",
    bgColor: "bg-white-200",
  },
  {
    id: 3,
    title: "Feeding communities",
    image: "/feeding-communities-food.jpg",
    badge: "Urgent cause",
    badgeColor: "bg-red-300",
    action: "Donate now",
    bgColor: "bg-white",
  },
  {
    id: 4,
    title: "Fundraising FAQs: Israel/Gaza",
    description: "Learn more about fundraising during the Israel-Gaza conflict.",
    badge: "Urgent cause",
    badgeColor: "bg-purple-300",
    image: "/faq-help.jpg",
    action: "Learn more",
    bgColor: "bg-white",
  },
]

export default function FeaturedTopics() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured topics</h2>
        <div className={`${topics[0].bgColor} hidden md:grid grid-cols-2 rounded-3xl overflow-hidden group cursor-pointer mb-6`}>
          <div className="relative h-70 bg-gray-200">
            <Image
              src={topics[0].image || "/placeholder.svg"}
              alt={topics[0].title}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity"
            />
            <span
              className={`absolute top-4 left-4 ${topics[0].badgeColor} text-gray-900 px-3 py-1text-sm font-semibold`}
            >
              {topics[0].badge}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{topics[0].title}</h3>
            <p className="text-gray-700 mb-6">{topics[0].description}</p>
            <Button variant="link" className="text-gray-900 p-0 justify-start hover:underline">
              {topics[0].action} →
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Grid of smaller topics */}
          {topics.slice(1).map((topic) => (
            <div key={topic.id} className={`${topic.bgColor} rounded-3xl overflow-hidden group cursor-pointer`}>
              <div className="relative h-56 bg-gray-200">
                <Image
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
                <span
                  className={`absolute top-4 left-4 ${topic.badgeColor} text-gray-900 px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {topic.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <Button variant="link" className="text-gray-900 p-0 justify-start hover:underline">
                  {topic.action} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
