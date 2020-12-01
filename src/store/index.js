import Vue from 'vue';
import Vuex from 'vuex';
import { HOME_MODULE } from './module-types/home';
import homeModule from '@/store/modules/home';

Vue.use(Vuex);

const store = new Vuex.Store({});
store.registerModule(HOME_MODULE, homeModule);

export default store;