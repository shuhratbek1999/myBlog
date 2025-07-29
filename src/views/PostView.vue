<template>
  <article class="max-w-3xl mx-auto py-12 px-4">
    <header class="mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ OnePost.title }}</h1>
      <div class="flex items-center text-gray-500 mb-6">
        <span>{{ OnePost.date }}</span>
        <span class="mx-2">•</span>
        <span>{{ OnePost.readTime }} daqiqa o'qish</span>
      </div>
      <img
        :src="OnePost.image"
        :alt="OnePost.title"
        class="w-full rounded-lg mb-6"
      />
    </header>

    <div class="prose max-w-none">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        mauris.
      </p>
      <p>
        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
        tellus rhoncus ut eleifend nibh porttitor.
      </p>
      <h2>Kichik sarlavha</h2>
      <p>
        Ut in nulla enim. Phasellus molestie magna non est bibendum non
        venenatis nisl tempor.
      </p>
    </div>

    <div class="mt-12 pt-8 border-t border-gray-200">
      <h3 class="text-xl font-semibold mb-4">
        Izohlar ({{ comments.length }})
      </h3>
      <div v-for="comment in comments" :key="comment.id" class="mb-6">
        <div class="flex items-start">
          <img :src="comment.avatar" class="w-10 h-10 rounded-full mr-4" />
          <div>
            <h4 class="font-semibold">{{ comment.name }}</h4>
            <p class="text-gray-500 text-sm mb-2">{{ comment.date }}</p>
            <p>{{ comment.text }}</p>
          </div>
        </div>
      </div>

      <form class="mt-8">
        <h4 class="text-lg font-semibold mb-4">Izoh qoldiring</h4>
        <textarea
          class="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
          placeholder="Fikringiz..."
        ></textarea>
        <button
          type="submit"
          class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { allPosts } from "../data/post";
const route = useRoute();
const AllPosts = ref(allPosts);
let OnePost = ref({});
const post = {
  id: 1,
  title: "Vue 3 va Composition API",
  image: "https://source.unsplash.com/random/800x400/?vue",
  date: "2023-05-15",
  readTime: 5,
};

const comments = [
  {
    id: 1,
    name: "Foydalanuvchi 1",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "2023-05-16",
    text: "Ajoyib maqola, juda foydali!",
  },
  {
    id: 2,
    name: "Foydalanuvchi 2",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "2023-05-17",
    text: "Tushunarli va aniq tushuntirilgan",
  },
];
watch(
  () => route.params.id,
  (val) => {
    console.log(val);

    AllPosts.value.filter((p) => {
      if (p.slug == val) {
        OnePost.value = { ...p };
      }
    });
  },
  { immediate: true }
);
</script>
