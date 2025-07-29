<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>