import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ShowcaseSection from "@/components/ShowcaseSection"
import CollectionSection from "@/components/CollectionSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactsSection from "@/components/ContactsSection"
import Footer from "@/components/Footer"

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <CollectionSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
