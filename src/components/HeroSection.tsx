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
          backgroundImage: `url('https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/files/a18e3733-4cbb-4c17-bad0-29df7dd2dbb3.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

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
          Художник / дизайнер одежды
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest leading-none mb-4">
          JY
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
          className="flex items-center justify-center"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#showcase")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 py-2.5 bg-pink-400 text-white font-medium text-sm tracking-wide rounded-full hover:bg-pink-500 transition-all duration-300"
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