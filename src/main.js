import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from '@/components/ui/BaseButton'
import BaseCard from '@/components/ui/BaseCard'
import BaseBadge from '@/components/ui/BaseBadge'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge)

app.mount('#app')
