<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Category Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-8">
        <div class="flex items-center">
          <router-link to="/" class="text-blue-500 hover:text-blue-700">
            ← Bosh sahifa
          </router-link>
          <h1 class="text-3xl font-bold ml-4">{{ category.name }}</h1>
        </div>
        <p class="mt-2 text-gray-600">{{ category.description }}</p>
      </div>
    </header>

    <!-- Category Posts -->
    <main class="container mx-auto px-4 py-8 w-full">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <article
          v-for="post in categoryPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-up"
        >
          <router-link :to="`/post/${post.slug}`">
            <div class="w-full h-56 overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>

            <div class="p-6 flex-grow">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ post.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ post.readTime }} daqiqa o'qish</span>
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </router-link>
        </article>
      </div>

      <!-- Empty State -->
      <div
        v-if="categoryPosts.length === 0"
        class="text-center py-12"
        data-aos="fade-up"
      >
        <div
          class="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6"
        >
          <svg
            class="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          Hozircha maqolalar mavjud emas
        </h3>
        <p class="text-gray-600">
          Bu kategoriyaga maqolalar tez orada qo'shiladi
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { allPosts, Categories } from "../data/post";
const AllPosts = ref(allPosts);
const categories = ref(Categories);
const route = useRoute();
const categorySlug = route.params.slug;

const category = ref(
  categories.value[categorySlug] || {
    name: "Kategoriya topilmadi",
    description: "",
  }
);

const categoryPosts = computed(() => {
  return AllPosts.value.filter((post) => post.category === categorySlug);
});

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
});
</script>

<style scoped>
/* Custom styles */
</style>
