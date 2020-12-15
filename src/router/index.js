import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/page-home/Home.vue';
import Category from '@/components/page-category/Category.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'cate',
    component: Category
  }
]

const router = new VueRouter({
  routes
});

export default router
