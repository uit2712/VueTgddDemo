import Vue from 'vue';
import Vuex from 'vuex';
import { HOME_MODULE } from './module-types/home';
import homeModule from '@/store/modules/home';
import { FOOTER_MODULE } from './module-types/footer';
import footerModule from '@/store/modules/footer';

Vue.use(Vuex);

const store = new Vuex.Store({});
store.registerModule(HOME_MODULE, homeModule);
store.registerModule(FOOTER_MODULE, footerModule);

export default store;