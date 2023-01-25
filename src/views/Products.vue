<template>
  <main class="container mt-3">
    <h1 class="mt-3">Produtos</h1>
    <button class="btn btn-success">Adicionar produto</button>
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
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td class="d-flex">
              <a href="" class="btn btn-warning">Editar</a>

              <button class="btn btn-danger">Excluir</button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Products'
}
</script>