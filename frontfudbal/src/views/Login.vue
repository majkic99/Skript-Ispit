<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="username" placeholder="Username" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button type="button" @click="loginF" >Login</button>
  </div>
</template>

<script>
const  Joi = require('joi');
import {mapActions} from "vuex";
const userSema = Joi.object().keys({
  username : Joi.string().min(5).max(40).required(),
  password : Joi.string().min(5).max(15).required(),

})
export default {
  name: 'Login',
  data() {
    return {
        username: "",
        password: ""

    }
  },
  methods: {
    ...mapActions(['login']),
    loginF: function() {
      const msg = JSON.stringify({username: this.username, password: this.password});
      console.log(msg)
      //const { error, value } = timoviSema.validate({ime_tima: this.ime_tima, osvojeni_poeni: parseInt(this.osvojeni_poeni)});
      const {error, value} = userSema.validate({username: this.username, password: this.password})
      if(error){
        alert(error);
      }else{
        this.login(msg);
      }


    }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>