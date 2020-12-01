import Vue from 'vue';
import App from './App.vue';
import store from './store';
import GlobalPlugin from './plugins/index';

Vue.config.productionTip = false;

Vue.use(GlobalPlugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
