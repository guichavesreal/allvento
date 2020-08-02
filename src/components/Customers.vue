<template>
  <div id="addressForm">
    <div>
      <h1 class="container">Clientes</h1>

      <div>
        <b-button v-b-modal.modal-1>Adicionar Novo Cliente</b-button>

        <b-modal id="modal-1" title="Adicionar Novo Cliente">
          
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputFullName">Nome</label>
                <input type="text" class="form-control" id="inputFullName" placeholder="Nome completo" required/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputDocNumber">CPF</label>
                <input type="text" class="form-control" id="inputDocNumber" v-mask="'###.###.###-##'" placeholder="000.000.000-00" />
              </div>
            </div>

            <div class="form-row">
              
              <div class="form-group col-md-6">
                <label for="inputCep">CEP</label>
                  <input id="inputCep" class="form-control" type="text" v-mask="'#####-###'" v-model="cep" v-on:keyup="getZipCodeInfo"/>
              </div>

              <div class="col-md-6">
                <p class="text-danger" v-if="naoLocalizado">
                  <strong>*CEP não localizado</strong>
                </p>
              </div>

            </div>

            <div class="form-row">

              <div class="form-group col-md-10">
                <label for="inputAddress">Endereço</label>
                    <input id="inputAddress" class="form-control" type="text" placeholder="Rua Vital Brasil" v-model="endereco.logradouro"/>
              </div>

              <div class="form-group col-md-2">
                    <label for="inputNumber">Número</label>
                    <input type="text" id="inputNumber" placeholder="000" class="form-control" />
              </div>

            </div>

            <div class="form-row">
              
              <div class="form-group col-md-6">
                <label for="inputComplement">Complemento</label>
                <input type="text" class="form-control" id="inputComplement" placeholder="Complemento" />
              </div>
            
              <div class="form-group col-md-6">
                  <label for="inputDistrict">Bairro</label>
                  <input type="text" id="inputDistrict" class="form-control" v-model="endereco.bairro" />
              </div>

            </div>


            <div class="form-row">

              <div class="form-group col-md-4">
                <label for="inputState">Estado</label>
                  <input type="text" id="inputState" class="form-control" v-model="endereco.uf" maxlength="2" />
              </div>

              <div class="form-group col-md-8">
                <label for="inputCity">Cidade</label>
                  <input type="text" id="inputCity" class="form-control" v-model="endereco.localidade" />
              </div>

              
            </div>
            
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style>
/* Font */
@import url("https://fonts.googleapis.com/css?family=Roboto");

/* Style */
form {
  color: #fff;
  background-color: #3f51b5;
  font-family: "Roboto", sans-serif;
  padding: 30px;
  margin-top: 30px;
}
h2 {
  font-size: 16px;
  text-align: center;
}
label {
  font-size: 12px;
  color: #a4addc;
  margin-bottom: 0px;
}
.text-danger {
  position: absolute;
  top: 20px;
  font-size: 12px;
  color: #fcd000 !important;
}
</style>

<script>
import axios from "axios";
import {mask} from 'vue-the-mask';

export default {
  name: "addressForm",
  data() {
    return {
      cep: "",
      endereco: {},
      naoLocalizado: false,
    };
  },
  directives:{
    mask
  },
  mounted: function () {
    // this.$emit("inputCep").mask("00000-000");\
    
  },
  methods: {
    registrar: function () {
      // processar dados
    },
    getZipCodeInfo: function () {
      var self = this;

      self.naoLocalizado = false;

      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
        console.log(this);
        axios.get("https://viacep.com.br/ws/" + this.cep + "/json/")
        .then(
          function(response){
            if(!response.data.erro){
              self.endereco = response.data;
              console.log(response);
            } else {
              self.naoLocalizado = true;
            }
          }
        );
      }
    },
  },
};
</script>