"use client"

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Fundraising on GoFundMe is easy, powerful, and trusted.
        </h2>

        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>
            Get what you need to help your fundraiser succeed on GoFundMe, whether you're raising money for yourself,
            friends, family, or charity. With no fee to start, GoFundMe is the world's leading crowdfunding
            platform—from memorial tributes and funerals to <u>medical</u> emergencies and <u>nonprofits</u>. Whenever
            you need help, you can ask here.
          </p>

          <p>
            Still have <u>questions</u>? Learn more about <u>how GoFundMe works</u>.
          </p>
        </div>
      </div>
    </section>
  )
}
