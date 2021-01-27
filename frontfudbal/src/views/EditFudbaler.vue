<template>
  <div>
    <b-jumbotron header="Izmenite informacije o fudbaleru">
      <b-container fluid>
        <b-form>
          <b-row class="mt-2">
            <b-col sm="2" offset="1">
              <b-input v-model="idFudbaleri" class="mb-2 mr-sm-2 mb-sm-0" placeholder="ID fudbalera"></b-input>
            </b-col>
            <b-col sm="2">
              <b-input v-model="ime" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
            </b-col>
            <b-col sm="2">
              <b-input v-model="prezime" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Prezime"></b-input>
            </b-col>
            <b-col sm="2">
              <b-input v-model="golovi" class="mb-2 mr-sm-2 mb-sm-0" placeholder="golovi"></b-input>
            </b-col>
            <b-col sm="2">
              <b-input v-model="asistencije" class="mb-2 mr-sm-2 mb-sm-0" placeholder="asistencije"></b-input>
            </b-col>
          </b-row>
          <b-row class="mt-2"> </b-row>
          <b-row><b-col sm="12">
            <b-button variant="primary" size="lg" class="mb-2 mr-sm-2 mb-sm-0" @click="change">Save</b-button>
          </b-col></b-row>

        </b-form>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import router from "@/router";

const  Joi = require('joi');


const fudbaleriSema = Joi.object().keys({
  ime: Joi.string().trim().max(30).required(),
  prezime: Joi.string().trim().max(30).required(),
  golovi: Joi.number().required(),
  asistencije: Joi.number().required(),
  id: Joi.number().required()
});

import {mapState} from "vuex";
import { mapActions } from 'vuex';
export default  {
  name: "EditFudbaler",

  data() {
    return {
      ime: '',
      prezime: '',
      golovi: '',
      minuti_odigrani: '',
      idFudbaleri: ''
    }
  },
  methods: {
    ...mapActions(['changeFudbaler']),

    change: function() {
      const msg = JSON.stringify({ime: this.ime, prezime: this.prezime, golovi: parseInt(this.golovi), asistencije: parseInt(this.asistencije)});
      const { error, value } = fudbaleriSema.validate({ime: this.ime, prezime: this.prezime, golovi: parseInt(this.golovi), asistencije: parseInt(this.asistencije), id: this.idFudbaleri});

      if(error){
        alert(error);
      }else {

            this.changeFudbaler({idFudbaleri: parseInt(this.idFudbaleri), msg: msg});
          router.push({path: `/fudbaleri`})
          }


      this.ime = '';
      this.prezime = '';
      this.golovi = '';
      this.asistencije = '';
      this.idFudbaleri = '';
    }
  }
}

</script>

<style scoped>

</style>