import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
// Heroicons
// ContactView.vue faylida import qismini quyidagicha o'zgartiring:
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon as TelegramIcon,
  ChatBubbleLeftRightIcon as TwitterIcon,
  FilmIcon as InstagramIcon,
  BuildingOfficeIcon as LinkedInIcon,
} from "@heroicons/vue/24/outline";

const app = createApp(App);

// Global komponent sifatida ro'yxatdan o'tkazish
// app.component("Bars3Icon", Bars3Icon);
app.component("PhoneIcon", PhoneIcon);
app.component("EnvelopeIcon", EnvelopeIcon);
app.component("MapPinIcon", MapPinIcon);
app.component("TelegramIcon", TelegramIcon);
app.component("TwitterIcon", TwitterIcon);
app.component("InstagramIcon", InstagramIcon);
app.component("LinkedInIcon", LinkedInIcon);

app.use(router);
app.mount("#app");
