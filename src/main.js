import Vue from 'vue';
import App from './App.vue';
import store from './store';
import GlobalPlugin from './plugins/index';
import Fragment from 'vue-fragment';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router'

Vue.config.productionTip = false;

Vue.use(GlobalPlugin);
Vue.use(Fragment.Plugin);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
