import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import ProductsCreate from '../views/ProductsCreate.vue'
import ProductShow from '../views/ProductShow.vue'
import ProductEdit from '../views/ProductEdit.vue'
import ConvertText from '../views/ConvertText.vue'

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
      name: 'products-create',
      component: ProductsCreate
    },
    {
      path: '/products/show/:id',
      name: 'product-show',
      component: ProductShow
    },
    {
      path: '/products/edit/:id',
      name: 'product-edit',
      component: ProductEdit
    },
    {
      path: '/convert',
      name: 'convert',
      component: ConvertText
    },
  ]
})

export default router
