<template>
  <main class="container">
    <h1 class="mt-3">Adicionar Produto</h1>
    <form @submit.prevent="create" class="w-50 mt-4" enctype="multipart/form-data">
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <label class="form-label">Nome</label>
            <input v-model="name" type="text" class="form-control" />
            <template v-if="validate.name">
                {{ validate.name[0] }}
              </template>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <label class="form-label">Preço</label>
            <input v-model="price" type="text" class="form-control" />
            <template v-if="validate.price">
              {{ validate.price[0] }}
            </template>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="col">
            <div class="form-outline">
              <label class="form-label">Descrição</label>
              <textarea v-model="description" cols="20" rows="5" class="form-control"></textarea>
              <template v-if="validate.description">
              {{ validate.price[0] }}
            </template>
            </div>
          </div>
          <div class="form-outline mt-2">
            <label class="form-label">Imagem</label>
            <input type="file" name="image" accept="image/*" class="form-control" @change="uploadImage($event)" />
            <template v-if="validate.image">
              {{ validate.image[0] }}
            </template>
          </div>
        </div>

      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar</button>
    </form>

  </main>
</template>

<script>
import { axiosInstance } from '../services/http'


export default {
  name: 'ProductsCreate',

  data() {
    return {
      name: '',
      price: '',
      image: [],
      description: '',
      validate: []
    }
  },

  methods: {
    uploadImage(e) {
      this.image = e.target.files
    },
    async create() {
      const payload = {
        name: this.name,
        price: this.price,
        image: this.image[0],
        description: this.description
      }

      try {
        const { data } = await axiosInstance.post('/products', payload);
        this.$router.push({ name: 'products' });
      } catch (error) {
        this.validate = error.response.data.errors;
      }
    }
  }
}

</script>