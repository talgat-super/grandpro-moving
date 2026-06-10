import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CalculatorSection } from '@/components/sections/CalculatorSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { ChatWidget } from '@/components/ui/ChatWidget'
import { Preloader } from '@/components/ui/Preloader'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CalculatorSection />
        <AboutSection />
        <BrandsSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  )
}
