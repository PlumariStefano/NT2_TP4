
export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
      formState : {},
      formData: this.getInicialData(),
      nombreMinLength : 5,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax: 120,
      datos:[]
    }
  },
  computed: {

  },
  mounted () {
   
  },
  methods: {
    getInicialData(){
      return{
        nombre:'',
        edad:'',
        email:''
      }
    },
    enviar() {
      let dato = {...this.formData}

      console.log(dato)
      this.datos.push(dato)

      this.formData = this.getInicialData()
      this.formState._reset()
    }

   
  }
}


