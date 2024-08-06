import './assets/main.css'
import { VueQueryPlugin } from "vue-query";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { i18n } from "./lang"

const app = createApp(App)

app.use(createHead());
app.use(i18n)
app.use(VueQueryPlugin);
app.use(autoAnimatePlugin);
app.use(createPinia())
app.use(router)

router.isReady().then(() => startApp())

const startApp = async () => { 
    app.mount('#app');
} 
