import { useState } from "react"
import { motion } from "framer-motion"
import { BRAND, REQUEST_TYPES } from "@/config/content"
import Icon from "@/components/ui/icon"

type FormState = "idle" | "loading" | "success" | "error"

export default function ContactsSection() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    name: "",
    contact: "",
    requestType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = "Введите имя"
    if (!form.contact.trim()) newErrors.contact = "Введите email или телефон"
    else if (form.contact.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact)) {
      newErrors.contact = "Некорректный email"
    }
    if (!form.requestType) newErrors.requestType = "Выберите тип запроса"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    setErrors({})
    setFormState("loading")
    // Endpoint подключается отдельно — сейчас имитация
    await new Promise((r) => setTimeout(r, 1000))
    setFormState("success")
  }

  const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div>
      <label className="block text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )

  return (
    <section id="contacts" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">Контакты</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-6 leading-tight">
              ДАВАЙТЕ<br />СОЗДАДИМ<br />ЧТО-ТО
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
              Расскажите о вашем проекте — индивидуальный заказ, иллюстрация или коллаборация. Отвечаю в течение 24 часов.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-10 h-10 bg-white border border-stone-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                  <Icon name="Mail" size={16} />
                </div>
                <span className="text-sm font-medium">{BRAND.email}</span>
              </a>
            </div>

            {/* Messengers */}
            <div className="flex gap-3">
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="telegram"
                className="flex items-center gap-2 px-6 py-3 bg-[#2AABEE] text-white font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-all"
              >
                <Icon name="Send" size={14} />
                Telegram
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-all"
              >
                <Icon name="MessageCircle" size={14} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-stone-200 bg-white">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center mb-6">
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black tracking-wider text-gray-900 mb-3">ЗАЯВКА ОТПРАВЛЕНА</h3>
                <p className="text-gray-500 text-sm max-w-xs">Отвечу в течение 24 часов. Спасибо, что написали!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-stone-200 p-8 space-y-6" data-form="contact">
                <Field label="Имя" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-stone-300"
                  />
                </Field>

                <Field label="Email или телефон" error={errors.contact}>
                  <input
                    type="text"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="email@example.com или +7..."
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-stone-300"
                  />
                </Field>

                <Field label="Тип запроса" error={errors.requestType}>
                  <select
                    value={form.requestType}
                    onChange={(e) => setForm({ ...form, requestType: e.target.value })}
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors bg-white"
                  >
                    <option value="">Выберите...</option>
                    {REQUEST_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Сообщение">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите о проекте..."
                    rows={4}
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-stone-300 resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  data-cta="form-submit"
                  className="w-full py-4 bg-gray-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-gray-700 transition-all duration-300 disabled:opacity-50"
                >
                  {formState === "loading" ? "Отправка..." : "Отправить заявку"}
                </button>

                {formState === "error" && (
                  <p className="text-red-500 text-xs text-center">Произошла ошибка. Попробуйте ещё раз.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
