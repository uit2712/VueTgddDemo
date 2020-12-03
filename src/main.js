import Vue from 'vue';
import App from './App.vue';
import store from './store';
import GlobalPlugin from './plugins/index';
import Fragment from 'vue-fragment';

Vue.config.productionTip = false;

Vue.use(GlobalPlugin);
Vue.use(Fragment.Plugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
