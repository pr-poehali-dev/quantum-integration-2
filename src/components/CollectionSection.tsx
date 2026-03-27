import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { COLLECTION, CATEGORIES } from "@/config/content"

export default function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? COLLECTION
    : COLLECTION.filter((item) => item.category === activeCategory)

  const scrollToContacts = () => {
    const el = document.querySelector("#contacts")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="collection" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">Новая коллекция</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900">ИЗДЕЛИЯ</h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-transparent text-gray-600 border-stone-300 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-white border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all duration-300"
              >
                <div className="overflow-hidden aspect-[3/4] bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm tracking-wide">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.description}</p>
                  <button
                    onClick={scrollToContacts}
                    data-cta="collection-order"
                    className="w-full py-2 text-xs font-semibold tracking-widest uppercase border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Уточнить / заказать
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
