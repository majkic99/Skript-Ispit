<template>
  <div id="app">
    <div><router-link to="/login">Login</router-link></div>
    <div><router-link to="/register">Register</router-link></div>
    <div> <router-link to="/">Home</router-link></div>
    <b-row>
      <b-col sm="2">
        <label for="user">IME:</label>
      </b-col>
      <b-col sm="10">
        <p id="user" style="text-align: left">{{ user.username }}</p>
      </b-col>
    </b-row>

    <router-view/>

  </div>
</template>
<script>
import router from "@/router";
import { mapState, mapActions } from 'vuex';
export default {

  computed: {
    ...mapState(['user'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
