<template>
  <div>
  <b-jumbotron header="Dodajte fudbalera">
    <b-container fluid>
      <b-form>
        <b-row class="mt-2">
          <b-col sm="2" offset="2">
            <b-input v-model="ime" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
          </b-col>
          <b-col sm="2">
            <b-input v-model="prezime" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Prezime"></b-input>
          </b-col>
          <b-col sm="2">
            <b-input v-model="golovi" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Golovi"></b-input>
          </b-col>
          <b-col sm="2">
            <b-input v-model="asistencije" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Asistencije"></b-input>
          </b-col>
        </b-row>
        <b-row class="mt-2"> </b-row>
        <b-row><b-col sm="12">
          <b-button variant="primary" size="lg" class="mb-2 mr-sm-2 mb-sm-0" @click="addNew">Save</b-button>
          <router-link to="/editFudbaler" type="button"variant="primary" class="btn btn-primary btn-lg mb-2 mr-sm-2 mb-sm-0">Edit</router-link>
        </b-col></b-row>

      </b-form>
    </b-container>
  </b-jumbotron>
  </div>
</template>

<script>
import {mapActions} from "vuex";
const  Joi = require('joi');


const fudbaleriSema = Joi.object().keys({
  ime: Joi.string().trim().max(30).required(),
  prezime: Joi.string().trim().max(30).required(),
  golovi: Joi.number().required(),
  asistencije: Joi.number().required()
});

export default  {
  name: "AddFudbaler",
  props: {
    fudbaleri: Array
  },
  data() {
    return {
      ime: '',
      prezime: '',
      golovi: '',
      asistencije: ''
    }
  },
  methods: {
    ...mapActions(['newFudbaler']),
    addNew: function() {
      const msg = JSON.stringify({ime: this.ime, prezime: this.prezime, golovi: parseInt(this.golovi), asistencije: parseInt(this.asistencije)});
      const { error, value } = fudbaleriSema.validate({ime: this.ime, prezime: this.prezime, golovi: parseInt(this.golovi), asistencije: parseInt(this.asistencije)});

      if(error){
        alert(error);
      }else{
        this.newFudbaler(msg);
        }
      this.ime = '';
      this.prezime = '';
      this.golovi = '';
      this.asistencije = '';
    }
  }
}
</script>

<style scoped>

</style>