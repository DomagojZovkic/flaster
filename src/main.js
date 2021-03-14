import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import axios from 'axios'
import VueAxios from 'vue-axios'

if (process.env.VUE_APP_ENVIRONMENT == "production") {
  require("@/analytics.js")
}
 
Vue.use(VueAxios, axios)
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
