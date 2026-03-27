import { motion } from "framer-motion"
import { BRAND } from "@/config/content"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
                alt="Юлия Ястребова — дизайнер YASTREBOVA JY"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-300 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">О бренде</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-8 leading-tight">
              ОТ ЛИНИИ<br />К ВЕЩИ
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-10">
              Работаю с натуральными тканями, создаю лимитированные коллекции и принимаю индивидуальные заказы. Каждый проект — это разговор: с тканью, с образом, с человеком, который будет это носить.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contacts")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              data-cta="about-contact"
              className="px-8 py-3.5 bg-gray-900 text-white font-semibold text-sm tracking-widest uppercase hover:bg-gray-700 transition-all duration-300"
            >
              Написать мне
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
