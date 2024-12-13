// FILE: main.js

import { createApp } from 'vue'
import { Quasar,Notify } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'



// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router/router.js'
import iconSet from "quasar/icon-set/fontawesome-v6";


const myApp = createApp(App)

myApp.use(Quasar, {

    plugins: {Notify}, // import Quasar plugins and add here
    lang: quasarLang,
    config: {
        notify: {}
    }
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router).mount('#app')
