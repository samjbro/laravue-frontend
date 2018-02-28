import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue';
import Categories from '@/components/category/index.vue';
import Products from '@/components/product/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
        alias: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
