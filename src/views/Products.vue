<template>
  <main class="container mt-3">
    <h1 class="mt-3">Produtos</h1>
    <router-link to="/products/create" class="btn btn-success">Adicionar produto</router-link>
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Image</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product of products" :key="product.id">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td>R$ {{ product.price }}</td>
            <td>
              <img class="rounded-circle"
                :src="url + product.image"
                alt="Imagem do produto" width="50" height="50">
            </td>
            <td>
              <router-link :to="{ name: 'product-show', params: { id: product.id } }" class="btn btn-info">Detalhes
                &raquo;</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { axiosInstance } from '../services/http'

export default {
  name: 'Products',

  data() {
    return {
      products: [],
      url: `${import.meta.env.VITE_API_URL_IMG}`
    }
  },

  async created() {
    try {
      const { data } = await axiosInstance.get('/products');
      this.products = data
    } catch (error) {
      console.log(error)
    }

  }
}


</script>