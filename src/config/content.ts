// ============================================================
// YASTREBOVA JY — Конфиг контента
// Меняйте тексты, карточки и данные здесь, не трогая разметку
// ============================================================

export const BRAND = {
  name: "YASTREBOVA JY",
  tagline: "Фэшн-иллюстрации & авторская одежда",
  description:
    "YASTREBOVA JY — это авторский бренд на стыке фэшн-иллюстрации и одежды. Каждое изделие рождается из рисунка: линия становится кроем, образ — вещью. Я создаю одежду, которую хочется носить, и иллюстрации, которые хочется вешать на стену.",
  missionText:
    "YASTREBOVA JY — это бренд, где каждое изделие начинается с рисунка. Я верю, что мода должна быть личной: не массовой, не безликой, а созданной с вниманием к деталям, к ткани, к человеку. Моя работа — переводить образы в вещи, которые живут, дышат и рассказывают историю. Иллюстрация здесь — не украшение, а язык.",
  email: "hello@yastrebovajy.com",
  telegram: "https://t.me/yastrebovajy",
  whatsapp: "https://wa.me/79000000000",
};

export const NAV_ITEMS = [
  { name: "Витрина", href: "#showcase" },
  { name: "Коллекция", href: "#collection" },
  { name: "О бренде", href: "#about" },
  { name: "Контакты", href: "#contacts" },
];

// ============================================================
// Иллюстрации (витрина)
// ============================================================
export const ILLUSTRATIONS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Red Line",
    caption: "Акрил на бумаге, 2024",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=600&q=80",
    title: "Silhouette No. 3",
    caption: "Тушь, графика, 2024",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    title: "Fluid",
    caption: "Акварель, 2023",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    title: "Texture Study",
    caption: "Смешанная техника, 2023",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    title: "Drape",
    caption: "Графит, 2024",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    title: "Monochrome",
    caption: "Тушь, 2023",
  },
];

// ============================================================
// Категории коллекции
// ============================================================
export const CATEGORIES = [
  { id: "all", label: "Все" },
  { id: "dress", label: "Платья" },
  { id: "top", label: "Верх" },
  { id: "bottom", label: "Низ" },
  { id: "accessories", label: "Аксессуары" },
];

// ============================================================
// Коллекция изделий
// ============================================================
export const COLLECTION = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    title: "Платье «Линия»",
    category: "dress",
    categoryLabel: "Платье",
    description: "Прямой крой, натуральный лён, авторская вышивка по манжете.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80",
    title: "Топ «Эскиз»",
    category: "top",
    categoryLabel: "Верх",
    description: "Шёлковый топ с принтом-иллюстрацией, завязки сзади.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1548549557-dbe9946621da?w=600&q=80",
    title: "Юбка «Штрих»",
    category: "bottom",
    categoryLabel: "Низ",
    description: "А-силуэт, хлопок с эффектом стирки, миди-длина.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&q=80",
    title: "Платье «Контур»",
    category: "dress",
    categoryLabel: "Платье",
    description: "Асимметричный подол, вискоза, декоративные швы.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80",
    title: "Рубашка «Холст»",
    category: "top",
    categoryLabel: "Верх",
    description: "Оверсайз, натуральный хлопок, ручная роспись.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    title: "Брюки «Палитра»",
    category: "bottom",
    categoryLabel: "Низ",
    description: "Широкий крой, смесовая ткань, боковые карманы.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    title: "Сумка «Набросок»",
    category: "accessories",
    categoryLabel: "Аксессуар",
    description: "Кожзам, принт-иллюстрация, формат А4.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
    title: "Платье «Акварель»",
    category: "dress",
    categoryLabel: "Платье",
    description: "Многослойный шифон, плавные переходы цвета.",
  },
];

// ============================================================
// Форматы работы / услуги
// ============================================================
export const SERVICES = [
  {
    id: 1,
    icon: "Pencil",
    title: "Индивидуальный заказ",
    description:
      "Создаю вещь с нуля под вас: от эскиза до готового изделия. Подбираем ткань, крой, детали вместе.",
  },
  {
    id: 2,
    icon: "Layers",
    title: "Авторские коллекции",
    description:
      "Лимитированные капсулы, каждый сезон. Связная история образов и иллюстраций в одной линейке.",
  },
  {
    id: 3,
    icon: "Handshake",
    title: "Коллаборации",
    description:
      "Совместные проекты с брендами, художниками и фотографами. Открыта к интересным предложениям.",
  },
  {
    id: 4,
    icon: "ImageIcon",
    title: "Иллюстрации на заказ",
    description:
      "Фэшн-иллюстрации для кампаний, упаковки, редакционных съёмок и личных проектов.",
  },
];

// ============================================================
// Отзывы
// ============================================================
export const TESTIMONIALS = [
  {
    id: 1,
    text: "Заказывала платье под мероприятие — Юлия предложила крой, которого я сама бы не придумала. В итоге это лучшая вещь в моём гардеробе.",
    author: "Анна М.",
    role: "Клиент, индивидуальный заказ",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaM&backgroundColor=1a1a1a&textColor=ffffff",
  },
  {
    id: 2,
    text: "Сотрудничали для рекламной кампании — иллюстрации получились точно такими, как я представлял, даже лучше. Очень внимательный подход.",
    author: "Дмитрий К.",
    role: "Арт-директор",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DmitryK&backgroundColor=1a1a1a&textColor=ffffff",
  },
  {
    id: 3,
    text: "Купила топ из коллекции — качество ткани и отделка на уровне, который редко встречаешь у небольших брендов. Буду возвращаться.",
    author: "Вера С.",
    role: "Постоянный покупатель",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=VeraS&backgroundColor=1a1a1a&textColor=ffffff",
  },
];

// ============================================================
// Типы запросов для формы
// ============================================================
export const REQUEST_TYPES = [
  "Индивидуальный заказ одежды",
  "Иллюстрация на заказ",
  "Коллаборация / совместный проект",
  "Вопрос о коллекции",
  "Другое",
];
