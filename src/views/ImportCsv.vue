<template>
  <main class="container">
    <h1 class="mt-3">
      Importar Categorias de Produtos
    </h1>

    <div>
      <label class="m-2">Baixa o arquivo de exemplo</label>
      <button class="btn btn-secondary" @click="download">Download</button>
    </div>
    <hr>
    <form @submit.prevent="importFile" class="mt-5 mb-2" enctype="multipart/form-data">
      <div class="d-flex flex-column">
        <label for="file">Clique para importar arquivo csv</label>
        <input type="file" class="form-control-file" id="file" @change="uploadFile($event)">
      </div>
      <button type="submit" class="btn btn-success mt-4">Importar</button>
    </form>

    <div v-if="success" class="alert alert-success" role="alert">
      {{ success }}
    </div>
    <hr>
    <h3 class="mt-5">Lista de Categorias</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category of categories" :key="category.id">
            <th scope="row">{{ category.id }}</th>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
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
      categories: [],
      success:''
    }
  },

  methods: {
    uploadFile(e) {
      this.file = e.target.files
    },

    async download() {
      try {
        const { data } = await axiosInstance.get('/download');
        const fileUrl = window.URL.createObjectURL(new Blob([data]))
        let fileLink = document.createElement('a')
        fileLink.href = fileUrl
        fileLink.setAttribute('download', 'categories.csv')
        document.body.appendChild(fileLink)
        fileLink.click()
      } catch (error) {
        console.log(error.response.data['errors']);
      }
    },

    async importFile() {
      const payload = {
        file: this.file[0]
      }

      try {
        const { data } = await axiosInstance.post('/upload', payload);
        this.success = data.msg
        this.categories = data.data
      } catch (error) {
        console.log(error.response.data['errors']);
      }
    }
  }

}
</script>