<template>
  <main class="container">
    <h1 class="mt-3">
      Importar Categorias de Produtos
    </h1>
    <form @submit.prevent="importFile" class="mt-3" enctype="multipart/form-data">
      <div class="d-flex flex-column">
        <label for="file">Clique para importar arquivo csv</label>
        <input type="file" class="form-control-file" id="file" @change="uploadFile($event)">
      </div>
      <button type="submit" class="btn btn-success mt-4">Importar</button>
    </form>

    <h3 class="mt-4">Lista de Categorias</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category of categories" :key="category.id">
            <th scope="row">{{ category.id }}</th>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>{{ category.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { axiosInstance } from '../services/http'

export default {
  name: 'ImportCsv',

  data() {
    return {
      file: [],
      categories: []
    }
  },

  methods: {
    uploadFile(e) {
      this.file = e.target.files
    },

    async importFile() {
      const payload = {
        file: this.file[0]
      }

      try {
        const { data } = await axiosInstance.post('/upload', payload);
        this.categories = data.data
      } catch (error) {
        console.log(error.response.data['errors']);
      }
    }
  }

}
</script>