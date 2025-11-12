"use client"

import { useState } from "react"

const steps = [
  {
    title: "Use our tools to create your fundraiser",
    description:
      "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.",
    tip: "Get tips for starting your fundraiser.",
    visual: (
      <>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold mb-2">Set your starting goal</p>
            <div className="bg-white/20 h-10 rounded w-3/4"></div>
          </div>
          <div className="bg-yellow-100 text-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span>
              <p className="font-semibold">Fundraisers like yours typically aim to raise</p>
            </div>
            <p className="text-3xl font-bold">$2,000 or more</p>
            <div className="w-full bg-gray-300 h-2 rounded-full mt-4">
              <div className="w-1/3 h-full bg-green-600 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white/10 h-12 rounded"></div>
          <div className="bg-white/10 h-12 rounded"></div>
        </div>
      </>
    ),
  },
  {
    title: "Reach donors by sharing",
    description:
      "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
    tip: "",
    visual: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🔗</span>
        </div>
        <p className="text-xl font-semibold text-white">Share your fundraiser link</p>
        <div className="mt-4 w-3/4 h-10 bg-white/20 rounded"></div>
        <div className="mt-2 w-2/3 h-10 bg-white/10 rounded"></div>
      </div>
    ),
  },
  {
    title: "Securely receive funds",
    description:
      "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
    tip: "",
    visual: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🏦</span>
        </div>
        <p className="text-xl font-semibold text-white">Receive funds securely</p>
        <div className="mt-4 w-3/4 h-10 bg-white/20 rounded"></div>
        <div className="mt-2 w-2/3 h-10 bg-white/10 rounded"></div>
      </div>
    ),
  },
]

function StepButton({
  step,
  active,
  onClick,
  completed,
}: {
  step: number
  active: boolean
  onClick: () => void
  completed?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center group focus:outline-none`}
      aria-current={active ? "step" : undefined}
      type="button"
    >
      {/* Left arrow */}
      <span
        className={`w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent ${
          active
            ? "border-r-gray-900"
            : completed
            ? "border-r-gray-900"
            : "border-r-gray-300"
        } mr-2 group-hover:border-r-gray-900`}
      ></span>
      {/* Number circle */}
      <span
        className={`w-16 h-16 flex items-center justify-center rounded-full border-2 text-2xl font-bold transition-all
          ${
            active
              ? "bg-gray-900 text-white border-gray-900"
              : completed
              ? "bg-white text-gray-900 border-gray-300"
              : "bg-white text-gray-900 border-gray-300"
          }
          ${
            !active
              ? "group-hover:text-white group-hover:border-gray-900 cursor-pointer transition-colors duration-200"
              : ""
          }
        `}
      >
        <span
          className={`${
            active
              ? "text-white"
              : completed
              ? "text-gray-900"
              : "text-gray-900"
          }`}
        >
          {step}
        </span>
      </span>
    </button>
  )
}

export default function StepsSection() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 text-center mb-16">
          Fundraising on GoFundMe is easy, 
          <br />
           powerful, and trusted.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - visual representation */}
          <div className="bg-green-600 rounded-3xl p-8 text-white relative h-140 flex flex-col justify-center min-h-[400px]">
            {steps[currentStep].visual}
          </div>

          {/* Right side - steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4">
                  <StepButton
                    step={idx + 1}
                    active={currentStep === idx}
                    completed={currentStep > idx}
                    onClick={() => setCurrentStep(idx)}
                  />
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 ml-20 text-xl">
                  {step.description}
                </p>
                {step.tip && (
                  <p className="text-sm text-gray-500 ml-20 mt-2">
                    {step.tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}