<template>
  <div class="py-12">
    <section class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">
          Biz bilan bog'laning
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Savollaringiz yoki takliflaringiz bo'lsa, quyidagi forma orqali
          yuborishingiz mumkin
        </p>
        <div class="w-24 h-1 bg-primary mx-auto mt-4"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6">Xabar yuborish</h2>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 mb-2"
                  >Ismingiz</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2"
                  >Email manzilingiz</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700 mb-2"
                  >Xabaringiz</label
                >
                <textarea
                  id="message"
                  rows="5"
                  v-model="form.message"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition w-full"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Yuborilmoqda..." : "Xabarni yuborish" }}
              </button>
            </form>
          </div>
        </div>

        <div>
          <div class="bg-white p-8 rounded-lg shadow-md h-full">
            <h2 class="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary/10 p-3 rounded-full mr-4">
                  <PhoneIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold">Telefon raqam</h3>
                  <p class="text-gray-600">+998 90 123 45 67</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary/10 p-3 rounded-full mr-4">
                  <EnvelopeIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold">Email manzil</h3>
                  <p class="text-gray-600">info@myblog.uz</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPinIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold">Manzilimiz</h3>
                  <p class="text-gray-600">Toshkent shahar, Yunusobod tumani</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <TelegramIcon class="h-5 w-5" />
                </a>
                <a
                  href="#"
                  class="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <TwitterIcon class="h-5 w-5" />
                </a>
                <a
                  href="#"
                  class="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <InstagramIcon class="h-5 w-5" />
                </a>
                <a
                  href="#"
                  class="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <LinkedInIcon class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon as TelegramIcon,
  ChatBubbleLeftRightIcon as TwitterIcon,
  FilmIcon as InstagramIcon,
  BuildingOfficeIcon as LinkedInIcon,
} from "@heroicons/vue/24/outline";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  // Bu yerda APIga so'rov yuborish kodi bo'ladi
  setTimeout(() => {
    alert("Xabaringiz muvaffaqiyatli yuborildi!");
    form.value = { name: "", email: "", message: "" };
    isSubmitting.value = false;
  }, 1500);
};
</script>
