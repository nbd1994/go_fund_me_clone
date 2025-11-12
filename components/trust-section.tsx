"use client"

export default function TrustSection() {
  return (
    <section className="w-full py-32 px-4 sm:px-6 lg:px-8 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-8">We've got you covered.</h2>

        <div className="prose prose-invert prose-lg space-y-4">
          <p className="text-xl text-white leading-relaxed">
            GoFundMe is a trusted leader in online fundraising. With simple pricing and a team of Trust & Safety experts
            in your corner, you can raise money or make a donation with peace of mind.
          </p>

          <div className="text-white  flex items-start gap-3 mt-6">
            <span className="text-2xl">🛡️</span>
            <p>
              Read the <u className="cursor-pointer hover:opacity-80">GoFundMe Giving Guarantee</u>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
