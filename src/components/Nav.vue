<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tester</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav me-auto">
          <router-link to="/" class="nav-link active">Home</router-link>
          <router-link to="/products" class="nav-link active">Produtos</router-link>
          <router-link to="/convert" class="nav-link active">Converter Texto</router-link>
          <router-link to="/import" class="nav-link active">Importar CSV</router-link>
        </div>
        
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a href="#" class="nav-link disabled">Login</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link disabled">Registrar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>