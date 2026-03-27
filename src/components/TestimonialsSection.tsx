import { motion } from "framer-motion"
import { TESTIMONIALS } from "@/config/content"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900">
            ЧТО ГОВОРЯТ<br />
            <span className="font-light italic text-gray-400">клиенты</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-stone-50 border border-stone-100 p-8 hover:shadow-md transition-all duration-300"
            >
              <p className="text-4xl text-stone-200 font-serif leading-none mb-4">"</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                {item.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.author}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-300 mb-6">Упоминания в медиа</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["VOGUE", "ELLE", "BURO", "W Magazine"].map((media) => (
              <span key={media} className="text-stone-300 font-black text-lg tracking-widest">
                {media}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
