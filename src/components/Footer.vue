<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Mening Blogim</h3>
          <p>Texnologiya, dasturlash va hayot haqida fikrlar</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Tez havolalar</h3>
          <router-link to="/" class="block mb-2 hover:text-primary"
            >Bosh sahifa</router-link
          >
          <router-link to="/about" class="block mb-2 hover:text-primary"
            >Haqida</router-link
          >
          <router-link to="/contact" class="block hover:text-primary"
            >Aloqa</router-link
          >
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Ijtimoiy tarmoqlar</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-primary">Telegram</a>
            <a href="#" class="hover:text-primary">Twitter</a>
            <a href="#" class="hover:text-primary">GitHub</a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; 2023 Mening Blogim. Barcha huquqlar himoyalangan.</p>
      </div>
    </div>
  </footer>
</template>
