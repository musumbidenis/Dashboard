import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueSweetalert2 from 'vue-sweetalert2'
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')