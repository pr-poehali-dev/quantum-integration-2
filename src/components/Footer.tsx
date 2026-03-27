import { BRAND } from "@/config/content"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-black tracking-widest text-sm">{BRAND.name}</p>
          <p className="text-white/40 text-xs text-center">
            © {year} {BRAND.name}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
