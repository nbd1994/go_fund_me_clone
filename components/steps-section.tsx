"use client"

import { useState, useEffect, useRef } from "react"
import { Pause, Play } from "lucide-react"

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
        className={`hidden sm:inline-block w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent ${
          active
            ? "border-r-green-600"
            : completed
            ? "border-r-green-600"
            : "border-r-gray-300"
        } mr-2 group-hover:border-r-green-600`}
      ></span>
      {/* Number circle */}
      <span
        className={`w-12 h-12 flex items-center justify-center rounded-full border-2 text-2xl font-bold transition-all
          ${
            active
              ? "bg-green-600 text-white border-green-600"
              : completed
              ? "bg-white text-green-600 border-green-600"
              : "bg-white text-gray-900 border-gray-300"
          }
          ${
            !active
              ? "group-hover:text-green-600 group-hover:border-green-600 cursor-pointer transition-colors duration-200"
              : ""
          }
        `}
      >
        <span
          className={`${
            active
              ? "text-white"
              : completed
              ? "text-green-600"
              : "text-gray-900"
          }`}
        >
          {step}
        </span>
      </span>
    </button>
  )
}

const STEP_DURATION = 6000 // 3 seconds

export default function StepsSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Handle auto-advance and progress bar
  useEffect(() => {
    if (!playing) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    setProgress(0)
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next step
          setCurrentStep((prevStep) => (prevStep + 1) % steps.length)
          return 0
        }
        return prev + 100 / (STEP_DURATION / 100)
      })
    }, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentStep, playing])

  // Reset progress when step changes manually
  const handleStepClick = (idx: number) => {
    setCurrentStep(idx)
    setProgress(0)
  }

  // Play/Pause toggle
  const handlePlayPause = () => setPlaying((p) => !p)

  return (
    <section className="w-full pt-15 pb-8 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 text-center mb-16">
          Fundraising on GoFundMe is easy, 
          <br />
           powerful, and trusted.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mx-6 md:mx-10">
          {/* Left side - visual representation */}
          <div className="bg-green-600 rounded-3xl p-8 text-white relative h-140 max-w-125 flex flex-col justify-center min-h-[400px]">
            {/* Play/Pause button */}
            <button
              className="absolute top-6 right-6 bg-white/80 hover:bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
              onClick={handlePlayPause}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause size={24} /> : <Play size={24} />}
            </button>
            {steps[currentStep].visual}
            {/* Progress bar */}
            <div className="absolute left-0 bottom-0 w-full h-2 bg-white/30 rounded-b-3xl overflow-hidden">
              <div
                className="h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
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
                    onClick={() => handleStepClick(idx)}
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