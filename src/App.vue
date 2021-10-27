<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP 4: Vue CLI - Router / Formularios</h1>
      <br>

      <Navbar />
      <router-view></router-view>

    </div>

  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar

  }
}
</script>

<style>

h1 {
  color: rgb(9, 9, 53);
}
#app {

}
</style>