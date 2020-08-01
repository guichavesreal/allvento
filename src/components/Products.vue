<template>
  <div>
    <h1 class="container">Products</h1>

    <div>
      <b-button v-b-modal.modal-1>Adicionar novo produto</b-button>

      <b-modal id="modal-1" title="Adicionar novo produto">
        <form>
  <div class="form-row">
    <div class="form-group col-md-8">
      <label for="inputProductName">Nome do Produto</label>
      <input type="text" class="form-control" id="inputProductName" placeholder="Nome do Produto">
    </div>
    <div class="form-group col-md-2">
      <label for="inputPrice">Preço</label>
      <input type="text" class="form-control" id="inputPrice" placeholder="Preço">
    </div>
  </div>
  <div class="form-group">
    <label for="inputDescription">Descrição</label>
    <textarea type="text" class="form-control" id="inputDescription" placeholder="Descrição">
  </div>
  
  <button type="submit" class="btn btn-primary">Salvar</button>
</form>

      </b-modal>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
       
    };
  }
};
</script>