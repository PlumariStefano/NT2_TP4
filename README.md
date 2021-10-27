# NT2 Trabajo Práctico N°4

Realizar un desarrollo web front-ed empleando Vue CLI que presente las siguientes vistas manejadas por un router, seleccionadas desde una barra de navegación:

### Consignas:
- 1.- Un formulario basado en vue-form que contenga 3 campos:
  * nombre
  * edad
  * email
  Este debe tener validaciones mediante carteles de:
  * campos requeridos,
  * nombre entre 5 y 15 caracteres,
  * edad entre 18 y 120 años
  * email válido (formato @mail.com)
  Los datos válidos ingresados por el formulario, se deben representar en una tabla por debajo del mismo, en el mismo momento del ingreso.

- 2.- Realizar un componente que pida los objetos almacenados en un recurso de mockapi.io llamado usuarios, que contenga datos aleatorios con las claves:
    * nombre
    * email
    * número de teléfono

Para la comunicación con mockapi.io utilizar XMLHttpRequest, fetch y axios.
Utilizar Bootstrap 4 como framework css del sitio.

## Requirements
Creating node_modules
```
npm install
```
### VueJS

[VueJs](https://vuejs.org/v2/guide/installation.html)
```
npm install vue
```
### VGC

[Vue Generate Component](https://www.npmjs.com/package/vue-generate-component)

#### Global:
```
npm install -g vue-generate-component
```
#### Local:
```
npm install vue-generate-component
```

### Vue Router
[VueJs Router](https://router.vuejs.org/)
```
$ npm install vue-router
```

### Vue Form
For validate forms.
#### Local
[Vue-Form](https://www.npmjs.com/package/vue-form)
```
$ npm install vue-form
```

### Vue Axios
For HTTP conections
[Vue Axios](https://www.npmjs.com/package/vue-axios)
```
$ npm install --save axios vue-axios
```

## Usage
### VGC
#### Global
Generate component, place yourselft on root:
```
$ vgc scr/{component_folder}/{component_name}
```
#### Local
Generate component, place yourselft on root:
```
$ node_modules\.bin\vgc.cmd src\{component_folder}\{component_name}
```
### RUN Project

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```


## License
[MIT](https://choosealicense.com/licenses/mit/)