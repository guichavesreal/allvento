<template>
  <div>
    <h1 class="container">Products</h1>

    <div>
      <b-button v-b-modal.modal-1>Adicionar novo produto</b-button>

      <b-modal id="modal-1" title="Adicionar novo produto">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Senha</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Endereço" />
          </div>
          <div class="form-group">
            <label for="inputComplement">Complemento</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Complemento" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState">Estado</label>
              <select id="inputState" class="form-control">
                <option
                  v-for="state in info"
                  :key="state.sigla"
                  v-bind="option.value"
                >{{ state.sigla }}</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">Cidade</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-2">
              <label for="inputZipCode">CEP</label>
              <input type="text" class="form-control" id="inputZipCode" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">Clique em mim</label>
            </div>
            <div>{{ info }}</div>
          </div>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
      </b-modal>
    </div>

    <div class="container">
      <div class="row.show-grid">
        <div class="form.col-md-12" v-on:submit="registrar">
          <h2>Auto Preenchimento de Endereço via CEP</h2>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="inputCep">CEP</label>
                <input
                  id="inputCep"
                  class="form-control"
                  type="text"
                  v-model="cep"
                  v-on:keyup="buscar"
                />
              </div>
            </div>
            <div class="col-md-3">
              <span class="text-danger">
                <strong>*CEP não localizado</strong>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="row-md-5">
              <div class="form-group">
              <label for="inputLogradouro">Logradouro</label>
              <input id="inputLogradouro" class="form-control" type="text" v-model="endereco.logradouro">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
              <label for="inputNumero">Número</label>
              <input type="text" id="inputNumero" class="form-control">
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
              <label for="inputComplemento">Complemento</label>
              <input type="text" id="inputComplemento" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
                <div class="form-group">
            <label for="inputBairro">Bairro</label>
            <input type="text" id="inputBairro" class="form-control" v-model="endereco.bairro">
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
            <label for="inputCidade">Cidade</label>
            <input type="text" id="inputCidade" class="form-control" v-model="endereco.localidade">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
            <label for="inputEstado">Estado</label>
            <input type="text" id="inputEstado" class="form-control" v-model="endereco.uf" maxlength="2">
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
                <div class="col-md-2">
                    <div class="form-group">
                        <input type="submit" class="form-control" value="enviar">
                    </div>
                </div>
            </div>            
          </div>
        </div>
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

const urlStates = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
export default {
  data() {
    return {
      cep: "",
      endereco: {},
      naoLocalizado: false,
    };
  },
  mounted: function () {
    $("#inputCep").mask("00000-000");
  },
  methods: {
    registrar: function () {
      // processar dados
    },
    buscar: function () {
      var self = this;

      self.naoLocalizado = false;

      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
        $.getJSON("https://viacep.com.br/ws/" + this.cep + "/json/", function (
          endereco
        ) {
          if (endereco.erro) {
            self.endereco = {};
            $("#inputLogradouro").focus();
            self.naoLocalizado = true;
            return;
          }
          self.endereco = endereco;
          console.log(endereco);
          $("#inputNumero").focus();
        });
      }
    },
  },
};
</script>