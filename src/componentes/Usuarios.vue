<template>

  <section class="src-componentes-api-rest-ful">
    <div class="jumbotron">
      <h2>Datos de Usuarios</h2>
      <hr>
      <br>

      <!-- <pre>{{ usuarios }}</pre> -->

      <button class="btn btn-success mr-3" @click="getUsuarios()">GET</button>

      <div class="media alert alert-warning mt-3" v-for="(usuario, index) in usuarios" :key="index">
        <div class="media-body">
          <h4><b> {{ usuario.nombre }} - ID: {{ usuario.id }}</b></h4>
          <br>
          <p><b>Email: </b><i>{{ usuario.email }}</i></p>
          <p><b>Teléfono: </b>{{ usuario.telefono }}</p>
          <br>

        </div>
      </div>      
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
    },
    data () {
      return {
        urlUsuarios : 'https://61797e56aa7f340017404b02.mockapi.io/usuarios',
        usuarios : []
      }
    },
    methods: {
      async getUsuarios() {
        try {
          let respuesta = await this.axios(this.urlUsuarios)
          let usuarios = respuesta.data
          console.log('AXIOS GET USUARIOS', usuarios)
          this.usuarios = usuarios
        }
        catch(error) {
          console.error('ERROR AXIOS GET USUARIOS', error)
        }
      },
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-api-rest-ful {

  }

.jumbotron {
    background-color: rgb(154, 125, 182);
    color: white;
  }  

  hr {
    background-color: #bbb;
  }  

  pre {
    color: white;
  }

  p{
    font: 1em sans-serif;
  }
  b{
    color:black;
    font-weight: 900;
  }
</style>
