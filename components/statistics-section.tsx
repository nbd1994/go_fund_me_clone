"use client"

export default function StatisticsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Left content */}
          <div className="px-12 grid grid-cols-2 gap-5 mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              More than $50 million is raised every week on GoFundMe.*
            </h2>
            <p className="text-2xl text-gray-600">
              Get started in just a few minutes — with helpful new tools, it's easier than ever to pick the perfect
              title, write a compelling story, and share it with the world.
            </p>
          </div>

          {/* Right stats */}
          <div className="bg-[#FFF3D0] w-screen p-8">
            <div className="flex justify-center space-x-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">⚡</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">No fee to start fundraising</span>
              </div>
              <span>......................</span>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-sm font-bold">⏱</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">1 donation made every second</span>
              </div>

              <span>......................</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-sm font-bold">📱</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">8K+ fundraisers started daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
