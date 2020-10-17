import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import UUID from "vue-uuid";
import VueSocketIO from 'vue-socket.io'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(UUID);

Vue.use(VueCookies);
Vue.$cookies.config('30d');

Vue.use(new VueSocketIO ({
  debug: true,
  connection: 'http://localhost:3000',
}))

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
