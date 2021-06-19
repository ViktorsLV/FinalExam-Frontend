import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
 
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
