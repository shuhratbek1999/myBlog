<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section with Animation -->
    <section
      class="relative rounded-md py-20 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown"
        >
          Bizning Blogimizga Xush Kelibsiz!
        </h1>
        <p
          class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s"
        >
          Texnologiya, dasturlash va hayot haqida eng so'ngi maqolalar
        </p>
        <button
          class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s"
          @click="scrollToContent"
        >
          Maqolalarni Ko'rish
        </button>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 h-20 bg-white/10 backdrop-blur-sm"
      ></div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16 bg-white" ref="contentSection">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Kategoriyalar</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.slug}`"
            class="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition group"
            data-aos="fade-up"
            :data-aos-delay="category.delay"
          >
            <div
              class="w-16 h-16 mb-6 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition"
            >
              <component :is="category.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold text-center mb-3">
              {{ category.name }}
            </h3>
            <p class="text-gray-600 text-center">
              {{ category.description }}
            </p>
            <div
              class="mt-4 text-center text-blue-500 hover:text-blue-700 font-medium"
            >
              Ko'rish →
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="py-16 bg-gray-50" id="content-section">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">So'ngi Maqolalar</h2>
          <router-link
            to="/articles"
            class="text-blue-500 hover:text-blue-700 font-medium flex items-center"
          >
            Barchasini Ko'rish
            <svg
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in featuredPosts"
            :key="post.id"
            class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            data-aos="fade-up"
          >
            <router-link :to="`/post/${post.slug}`">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
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
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Bizning Jamoaga Qo'shiling
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Eng so'ngi maqolalardan xabardor bo'lish uchun obuna bo'ling
        </p>
        <div class="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Email manzilingiz"
            class="flex-grow bg-gray-200 px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
          />
          <button
            class="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-r-lg hover:bg-yellow-500 transition"
          >
            Obuna Bo'lish
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
} from "@heroicons/vue/24/outline";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { allPosts } from "../data/post";
const AllPorts = ref(allPosts);
const featuredPosts = computed(() => {
  return AllPorts.value.slice(0, 3); // Faqat 3 ta maqolani ko'rsatamiz
});
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
});

const scrollToContent = () => {
  const element = document.querySelector("#content-section");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    console.warn("Element topilmadi");
  }
};

const categories = ref([
  {
    id: 1,
    name: "Dasturlash",
    slug: "programming",
    description: "Vue, React, JavaScript va boshqa dasturlash tillari haqida",
    icon: CodeBracketIcon,
    delay: 100,
  },
  {
    id: 2,
    name: "Mobil Texnologiyalar",
    slug: "mobile",
    description: "Flutter, React Native va mobil ilovalar haqida",
    icon: DevicePhoneMobileIcon,
    delay: 200,
  },
  {
    id: 3,
    name: "Backend",
    slug: "backend",
    description: "Node.js, Django, Laravel va server texnologiyalari",
    icon: ServerStackIcon,
    delay: 300,
  },
]);
</script>

<style scoped>
/* Custom animations */
.animate__delay-2s {
  animation-delay: 0.5s;
}
</style>
