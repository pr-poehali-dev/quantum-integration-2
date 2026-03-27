import { motion } from "framer-motion"
import { SERVICES } from "@/config/content"
import Icon from "@/components/ui/icon"

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">Форматы работы</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-wider">КАК МЫ МОЖЕМ<br />СОТРУДНИЧАТЬ</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <Icon name={service.icon} fallback="Star" size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-white tracking-wide uppercase text-sm mb-3">{service.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}