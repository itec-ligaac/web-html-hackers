import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuikit from "vuikit"
import VuikitIcons from "@vuikit/icons"
import { Laue } from 'laue';
import * as VueGoogleMaps from 'vue2-google-maps'

import "@vuikit/theme"

Vue.config.productionTip = false

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Laue);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDspdeL-W5n9eMoj4iOBQVqztP8t1Wk5Hg',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
