<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sahifa sarlavhasi -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold">Barcha Maqolalar</h1>
        <p class="mt-2 text-gray-600">
          Bizning blogdagi barcha maqolalar to'plami
        </p>
      </div>
    </header>

    <!-- Filtrlash va qidiruv -->
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Maqolalarni qidirish..."
          class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          v-model="selectedCategory"
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Barcha kategoriyalar</option>
          <option
            v-for="category in Allcategories"
            :key="category.id"
            :value="category.slug"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <!-- Maqolalar ro'yxati -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          data-aos="fade-up"
        >
          <router-link :to="`/post/${post.slug}`" class="block h-full">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover"
              loading="lazy"
            />
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ formatDate(post.date) }}</span>
                <span class="mx-2">•</span>
                <span>{{ post.readTime }} daqiqa o'qish</span>
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>
              <div class="flex items-center">
                <span
                  class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  {{ getCategoryName(post.category) }}
                </span>
              </div>
            </div>
          </router-link>
        </article>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-12" v-if="totalPages > 1">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'mx-1 px-4 py-2 rounded',
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { allPosts, categories } from "../data/post";

// Barcha maqolalarni ishlatamiz
const AllPosts = ref(allPosts);
const Allcategories = ref(categories);
const searchQuery = ref("");
const selectedCategory = ref("");
const currentPage = ref(1);
const postsPerPage = 6;

// Filtrlangan maqolalar
const filteredPosts = computed(() => {
  let result = AllPosts.value;
  // Kategoriya bo'yicha filtrlash
  if (selectedCategory.value) {
    result = result.filter((post) => post.category === selectedCategory.value);
  }
  // Qidiruv bo'yicha filtrlash
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Paginatsiya
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return result.slice(start, end);
});

// Sahifalar soni
const totalPages = computed(() => {
  return Math.ceil(AllPosts.value.length / postsPerPage);
});

// Kategoriya nomini olish
const getCategoryName = (slug) => {
  const category = Allcategories.value.find((cat) => cat.slug === slug);
  return category ? category.name : "Boshqa";
};

// Sana formati
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("uz-UZ", options);
};

// Animatsiyalarni ishga tushirish
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
