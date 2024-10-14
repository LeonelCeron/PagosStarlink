//import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Start - Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify' 
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// End - Vuetify

//import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

//import { customAliases } from './assets/customIcons'

// Components
import App from './App.vue'
import router from './router'

const app = createApp(App)
  
// Start - createVuetify
const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })
// End - createVuetify

app.use(createPinia())
app.use(router)

//Use Vuetify
app.use(vuetify)

app.mount('#app')
