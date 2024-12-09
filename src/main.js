import App from './App.vue'
import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for(const [key, value] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, value)
}

app.use(Router)
app.use(Store)
app.mount('#app');
app.use(ElementPlus)