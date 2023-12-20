const estudiantes = [];
console.table(estudiantes);
const app = Vue.createApp({
    methods: {
        agregarEstudiante() {
            console.log('agregando estudiante');
            //const estu = { nombre: this.nombre, apellido: this.apellido };
            //this.lista.unshift(estu);
            //this.lista.push(estu);
            this.lista.push({ nombre: this.nombre, apellido: this.apellido, hobby:this.hobby, genero: this.genero, pais: this.pais})
        }

    },
    watch: {

    },
    data(){

        return{
            lista: estudiantes,
            nombre: null, //undefined
            apellido: null,//undefined
            hobby: null, //undefined
            genero: null,//undefined
            pais: null, //undefined
            

        }

    }

});

app.mount('#myApp');