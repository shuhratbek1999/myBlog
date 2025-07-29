<template>
  <div class="py-12">
    <section class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">Biz haqimizda</h1>
        <div class="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div class="order-2 md:order-1">
          <h2 class="text-2xl font-bold mb-4">Bizning tariximiz</h2>
          <p class="text-gray-600 mb-4">
            Biz 2020 yildan beri dasturlash va texnologiyalar haqida bilim
            almashamiz. Dastlab kichik jamoadan boshlab, hozirda minglab
            o'quvchilarimizga ega bo'ldik.
          </p>
          <p class="text-gray-600">
            Bizning maqsadimiz - sifatli va tushunarli kontent yaratish orqali
            dasturlashni o'rganishni har kim uchun qulay qilish.
          </p>
        </div>
        <div class="order-1 md:order-2">
          <img
            src="../assets/logo.png"
            alt="Bizning jamoamiz"
            class="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-6 text-center">Bizning jamoamiz</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.id"
            class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <img
              :src="member.avatar"
              :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-gray-500 mb-2">{{ member.position }}</p>
            <p class="text-gray-600 text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  {
    id: 1,
    name: "Azizbek Nurmatov",
    position: "Asoschi & Full-stack dasturchi",
    bio: "10 yillik tajribaga ega dasturchi, Vue.js mutaxassisi",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "Dilfuza Rahimova",
    position: "UX/UI Dizayner",
    bio: "Foydalanuvchi interfeyslari va brend identifikatsiyasi bo'yicha mutaxassis",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Javlon Karimov",
    position: "Content menejer",
    bio: "Texnik yozuvchi va kontent strategiyasi bo'yicha mutaxassis",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];
</script>
