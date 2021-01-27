<template>
  <div>
    <b-table sticky-header="800px" :items="fudbaleri" :fields="fields" head-variant="light"></b-table>
  </div>
</template>

<script>
import router from "@/router";
import { mapState, mapActions } from 'vuex';

export default {

name: "TabelaFudbalera",
  computed: {
    ...mapState(['fudbaleri'])
  },
  data(){
    return {
      fields: [
        { key: 'idFudbaleri' },
        { key: 'ime' },
        { key: 'prezime' },
        { key: 'golovi' },
        { key: 'asistencije' }
      ]
    }
  }
}
</script>

<style scoped>

</style>