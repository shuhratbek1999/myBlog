export const allPosts = [
  {
    id: 1,
    title: "Vue 3 Composition API: Toʻliq Qoʻllanma",
    slug: "vue-3-composition-api",
    excerpt:
      "Vue 3 ning yangi Composition API dan qanday foydalanishni oʻrganing",
    image: "https://picsum.photos/id/1/600/400",
    date: "2023-05-15",
    readTime: 8,
    tags: ["Vue", "JavaScript", "Frontend"],
    category: "programming",
  },
  {
    id: 2,
    title: "Tailwind CSS bilan Tezroq Dizayn Qilish",
    slug: "tailwind-css",
    excerpt:
      "Tailwind CSS yordamida qanday qilib tez va samarali dizayn qilish mumkin",
    image: "https://picsum.photos/id/2/600/400",
    date: "2023-05-10",
    readTime: 5,
    tags: ["CSS", "Frontend", "Design"],
    category: "programming",
  },
  {
    id: 3,
    title: "Node js bilan Tezroq Backend yozish mumkin",
    slug: "node-js",
    excerpt:
      "Node js yordamida qanday qilib tez va samarali server qilish mumkin",
    image: "https://picsum.photos/id/3/600/400",
    date: "2023-05-10",
    readTime: 5,
    tags: ["Javascript", "Backend", "node"],
    category: "programming",
  },
  // ... boshqa maqolalar
];

export const categories = [
  { id: 1, name: "Dasturlash", slug: "programming" },
  { id: 2, name: "Mobil Texnologiyalar", slug: "mobile" },
  { id: 3, name: "Backend", slug: "backend" },
];

export const Categories = {
  programming: {
    name: "Dasturlash",
    description: "Vue, React, JavaScript va boshqa dasturlash tillari haqida",
  },
  mobile: {
    name: "Mobil Texnologiyalar",
    description: "Flutter, React Native va mobil ilovalar haqida",
  },
  backend: {
    name: "Backend",
    description: "Node.js, Django, Laravel va server texnologiyalari",
  },
};
