console.log("elementos Vue");


console.log(Vue);

const estudiantes = [{ nombre: 'Fernando', apellido: 'Mosquera' },
{ nombre: 'Alberto', apellido: 'Perez' },
{ nombre: 'Juan', apellido: 'Chacón' },
{ nombre: 'Damian', apellido: 'Teran' },
{ nombre: 'Darien', apellido: 'Castillo' }];

console.log(estudiantes[4].nombre);

console.log(estudiantes);
console.table(estudiantes);
const app = Vue.createApp({
    /* template: `
     <h1>  Hola Mundo </h1>
     <p> Desde App.js </p>
 
     <h6>{{1+1}}</h6>
 
     <p>  {{[1,2,3,4,5,6,7,8]}} </p>
 
     <p> {{true? 'Verdadero': 'Falso'}}  </p>
     <p> {{false? 'Verdadero': 'Falso'}}  </p>
     `
 */
    methods: {
        cambiarMensaje() {
            console.log("cambiar mensaje");
            console.log(this.mensaje);
            this.mensaje = 'valor cambiado';

        },
        cambiarNumero() {
            console.log("cambiar valor");
            console.log(this.valor);
            this.valor++;


        }, agregarEstudiante() {
            console.log('agregando estudiante');
            const estu = { nombre: this.nombre, apellido: this.apellido };
            //this.lista.unshift(estu);
            //this.lista.push(estu);
            this.lista.push({ nombre: this.nombre, apellido: this.apellido })
        },
        presionandoTecla({ charCode }) {

            console.log('Presionando');
            console.log(charCode);

            if (charCode === 13) {
                this.agregarEstudiante();

            }
        },
        agregarEstudianteMod({ charCode }) {

            console.log('Presionando 2..');
            console.log(this.nombre);
        }


    },
    watch: {

    },

    data() {

        return {
            mensaje: 'Hola mundo desde VUE.JS',
            valor: 100,
            lista: estudiantes,
            nombre: null, //undefined
            apellido: null,//undefined

        }
    }

});


// crear un identificador,
app.mount('#myApp');