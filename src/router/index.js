import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import ProductsCreate from '../views/ProductsCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/create',
      name: 'productsCreate',
      component: ProductsCreate
    },
  ]
})

export default router
