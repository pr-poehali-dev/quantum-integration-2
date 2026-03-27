import { motion } from "framer-motion"
import { BRAND } from "@/config/content"

export default function HeroSection() {
  const scrollToContacts = () => {
    const el = document.querySelector("#contacts")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-stone-900 flex items-center justify-center"
    >
      {/* Fabric texture background — layered gradient pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Texture lines decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.15) 40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-white/70 mb-6"
        >
          Авторский фэшн-бренд
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest leading-none mb-4">
          YASTREBOVA
          <br />
          <span className="font-light italic text-white/80">JY</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl font-light tracking-wide text-white/80 mb-10"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContacts}
            data-cta="hero-contact"
            className="px-8 py-3.5 bg-white text-gray-900 font-semibold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Связаться со мной
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#showcase")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3.5 border border-white/50 text-white font-medium text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Смотреть работы
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-white/30"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  )
}
