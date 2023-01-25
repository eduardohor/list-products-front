<template>
  <main class="container mt-3">
    <h1 class="mb-3">Detalhes do Produto:</h1>
    <div class="d-flex justify-content-center row">
      <div class="col-lg-4">
        <img class="rounded-circle"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Generic placeholder image" width="240" height="240">
        <h2>{{ product.name}}</h2>
        <h4>R$ {{ product.price }}</h4>
        <p><span>Descrição:</span> {{ product.description }}</p>
        <div class="d-flex justify-content-center">
          <p><router-link :to="{ name: 'product-edit', params: { id: product.id } }" class="btn btn-warning" href="#" role="button">Editar</router-link></p>
          <p><a class="btn btn-danger" href="#" role="button">Excluir</a></p>
        </div>

      </div>

    </div>
  </main>
</template>

<script>
import { axiosInstance } from '../services/http'

export default {
  name: 'ProductShow',
  data() {
    return {
      product: []
    }
  },

  async created() {
    const id = this.$route.params.id

    try {
      const { data } = await axiosInstance.get(`/products/${id}`);
      this.product = data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.h2 {
  font-weight: 400;
}

.col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
</style>