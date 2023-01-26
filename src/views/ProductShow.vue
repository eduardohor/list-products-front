<template>
  <main class="container mt-3">
    <h1 class="mb-3">{{ product.name }}</h1>
    <div class="d-flex justify-content-center row">
      <div class="col-lg-4">
        <img class="rounded-circle"
          :src="url + product.image"
          alt="Imagem do produto" width="240" height="240">
        <h3 class="mt-3">R$ {{ product.price }}</h3>
        <p><span>Descrição:</span> {{ product.description }}</p>
        <div class="d-flex justify-content-center">
          <p><router-link :to="{ name: 'product-edit', params: { id: product.id } }" class="btn btn-warning" href="#"
              role="button">Editar</router-link></p>
          <p><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger"
              role="button">Excluir</button></p>
        </div>

      </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Excluir </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Deseja realmente excluir o produto {{ product.name }} ? 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <form @submit.prevent="remove">
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Excluir</button>
            </form>
          </div>
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
      product: [],
      id:this.$route.params.id,
      url: `${import.meta.env.VITE_API_URL_IMG}` 
    }
  },

  async created() {
    try {
      const { data } = await axiosInstance.get(`/products/${this.id}`);
      this.product = data
    } catch (error) {
      console.log(error)
    }
  },

  methods:{
    async remove(){
      try {
          const { data } = await axiosInstance.delete(`/products/${this.id}`)
          this.$router.push({ name: 'products' });
      } catch (error) {
        console.log(error)
      }
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