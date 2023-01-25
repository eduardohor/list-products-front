<template>
  <main class="container">
    <h1 class="mt-3">Editar {{ product.name }}</h1>
    <form @submit.prevent="update" class="w-50 mt-4" enctype="multipart/form-data">
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input v-model="product.name" type="text" class="form-control" />
            <label class="form-label">Nome</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input v-model="product.price" type="text" class="form-control" />
            <label class="form-label">Preço</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="col">
          <div class="form-outline">
            <textarea v-model="product.description" cols="20" rows="5" class="form-control"></textarea>
            <label class="form-label">Descrição</label>
          </div>
        </div>
          <div class="form-outline mt-2">
            <label class="form-label">Imagem</label>
            <input type="file" name="image" accept="image/*" class="form-control" @change="uploadImage($event)"/>

          </div>
        </div>
        
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Atualizar</button>
    </form>

  </main>
</template>

<script>
import {axiosInstance} from  '../services/http'

export default {
  name: 'ProductEdit',

  data() {
    return {
      product: [],
      id: this.$route.params.id,
      image: []
    }
  },

  async mounted(){
    try {
      const {data} = await axiosInstance.get(`/products/${this.id}`)
      this.product = data
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    uploadImage(e){
      this.image = e.target.files
    },

    async update() {
      const payload = {
        _method: 'put',
        name: this.product.name,
        price: this.product.price,
        image: this.image[0],
        description: this.product.description
      }

      try{
        const {data} = await axiosInstance.post(`/products/${this.id}`, payload);
        this.$router.push({ name: 'product-show', params: { id: this.product.id } });
        console.log(data)
      } catch (error) {
        console.log(error.response.data['errors']);
      }
    }
  }
}

</script>