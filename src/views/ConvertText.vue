<template>
  <main class="container">
    <h1 class="mt-3">Converter Texto</h1>
    <form @submit.prevent="convert">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="text">Adicione uma frase para converter o texto para maiúsculo</label>
          <input v-model="text" type="text" class="form-control" id="exampleInputEmail1" placeholder="Texto">
        </div>
      </div>
      <button type="submit" class="btn btn-success mt-2">Converter</button>
    </form>
    <div class="form-group mt-5">
      <h3>Resultado: {{ resultConvert }}</h3>

    </div>

  </main>
</template>

<script>
import {axiosInstance} from  '../services/http'

export default {
  name: 'ConvertText',

  data(){
    return{
      text: '',
      resultConvert: ''
    }
  },

  methods:{
   async convert(){
    const payload = {
      text: this.text
    }
      try{
        const {data} = await axiosInstance.post('/convert', payload);
        this.resultConvert = data
      } catch (error) {
        console.log(error.response.data['errors']);
      }
    }
  }
}
</script>