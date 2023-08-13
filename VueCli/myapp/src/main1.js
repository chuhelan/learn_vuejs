import { createApp } from 'vue'
import App from './MyApp.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

createApp(App)
.component("Navbar",Navbar)
.component("Sidebar",Sidebar)
.mount('#app')
