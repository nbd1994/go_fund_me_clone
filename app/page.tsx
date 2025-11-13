import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatisticsSection from "@/components/statistics-section"
import StepsSection from "@/components/steps-section"
import FeaturedFundraisers from "@/components/featured-fundraisers"
import FeaturedTopics from "@/components/featured-topics"
import HowItWorks from "@/components/how-it-works"
import TrustSection from "@/components/trust-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <StepsSection />
      <FeaturedFundraisers />
      <FeaturedTopics />
      <AboutSection />
      <HowItWorks />
      <TrustSection />
      <Footer />
    </main>
  )
}
