// ============================================================
// YASTREBOVA JY — Конфиг контента
// Меняйте тексты, карточки и данные здесь, не трогая разметку
// ============================================================

export const BRAND = {
  name: "JY",
  tagline: "Фэшн-иллюстрации & авторская одежда",
  description:
    "JY — это авторский бренд на стыке фэшн-иллюстрации и одежды. Каждое изделие рождается из рисунка: линия становится кроем, образ — вещью. Я создаю одежду, которую хочется носить, и иллюстрации, которые хочется вешать на стену.",
  missionText:
    "JY — это бренд, где каждое изделие начинается с рисунка. Я верю, что мода должна быть личной: не массовой, не безликой, а созданной с вниманием к деталям, к ткани, к человеку. Моя работа — переводить образы в вещи, которые живут, дышат и рассказывают историю. Иллюстрация здесь — не украшение, а язык.",
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
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/6aebecf8-3659-4f70-8f79-5ee86d0b62f3.jpeg",
    title: "Гусарский сюртук",
    caption: "Цветные карандаши, 2024",
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/c4377b3c-50b9-4d19-9a54-a30be24bf538.jpeg",
    title: "Розовый жакет",
    caption: "Цветные карандаши, 2024",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/6169c911-745c-4f56-9534-ef94feb262f2.jpeg",
    title: "Уличная сцена",
    caption: "Смешанная техника, 2024",
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/26f1832a-b593-4902-8b53-fa5050e5b66f.jpeg",
    title: "Джинсовая юбка",
    caption: "Цветные карандаши, 2024",
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/5c62a09a-d710-4c82-a52e-173d241f55d6.jpeg",
    title: "Платье «Полоса»",
    caption: "Цветные карандаши, 2024",
  },
  {
    id: 6,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/5318b346-f9a6-49e9-afda-d5ee2a5e9f67.jpeg",
    title: "Miu Miu",
    caption: "Цветные карандаши, 2024",
  },
  {
    id: 7,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/336b6ae8-eb95-4838-a2ad-0a5caf9d043d.jpeg",
    title: "Красное платье",
    caption: "Тушь, цветные карандаши, 2024",
  },
  {
    id: 8,
    image: "https://cdn.poehali.dev/projects/35c55dbe-861b-4c04-a168-039702444445/bucket/a98929af-bba9-456c-9f80-ca3af47f29ef.jpeg",
    title: "Тренч",
    caption: "Цветные карандаши, 2024",
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