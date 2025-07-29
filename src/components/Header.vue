<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <img src="../assets/logo.png" alt="Logo" class="h-10 mr-3" />
        <span class="text-xl font-bold text-primary">Mening Blogim</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-secondary"
          >Bosh sahifa</router-link
        >
        <router-link to="/about" class="hover:text-secondary"
          >Haqida</router-link
        >
        <router-link to="/contact" class="hover:text-secondary"
          >Aloqa</router-link
        >
      </nav>

      <!-- Mobile menu button -->
      <button @click="toggleMenu" class="md:hidden">
        <Bars3Icon class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white pb-4 px-4">
      <router-link to="/" class="block py-2 hover:text-secondary"
        >Bosh sahifa</router-link
      >
      <router-link to="/about" class="block py-2 hover:text-secondary"
        >Haqida</router-link
      >
      <router-link to="/contact" class="block py-2 hover:text-secondary"
        >Aloqa</router-link
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
