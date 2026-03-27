import { motion } from "framer-motion"
import { ILLUSTRATIONS } from "@/config/content"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 bg-white">
      {/* Mission gradient text */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center mb-20">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">Витрина</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-12">ИЛЛЮСТРАЦИИ</h2>
        <TextGradientScroll
          text="Каждый рисунок — это начало истории. Линия, которая становится платьем. Образ, который становится коллекцией. Здесь живут идеи до того, как они превратятся в ткань."
          className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-700"
          type="word"
          textOpacity="soft"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ILLUSTRATIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden bg-stone-100 aspect-[4/5] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>
              <div className="pt-4 pb-2 border-b border-stone-100">
                <h3 className="font-bold text-gray-900 tracking-wide text-sm uppercase">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
