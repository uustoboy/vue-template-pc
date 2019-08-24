import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
Vue.config.productionTip = false

//处理title;
Vue.use(require('vue-wechat-title'))

Vue.prototype.$src = process.env.VUE_APP_PUBLIC_PATH

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
