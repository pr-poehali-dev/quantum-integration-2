import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { BRAND, NAV_ITEMS } from "@/config/content"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-black text-lg md:text-xl tracking-widest transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {BRAND.name}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium tracking-wider uppercase pb-0.5 group transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-gray-900" : "bg-white"}`} />
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-white text-2xl font-bold tracking-widest uppercase hover:text-gray-300 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
