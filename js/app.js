console.log("elementos Vue");

console.log(Vue);

const estudiantes = [{nombre:'Fernando', apellido:'Mosquera'},
{nombre:'Alberto', apellido:'Perez'},
{nombre:'Juan', apellido:'Chacón'},
{nombre:'Damian', apellido:'Teran'},
{nombre:'Mario', apellido:'Castillo'}];

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
        cambiarMensaje(){
            console.log("cambiar mensaje");
            console.log(this.mensaje);
            this.mensaje='valor cambiado';
        
        },
        cambiarNumero(){
            console.log("cambiar valor");
            console.log(this.valor);
            this.valor++;
            

        }, agregarEstudiante() {
            console.log('agregando estudiante');
            const estu={nombre:this.nombre, apellido:this.apellido};
            //this.lista.unshift(estu);
            //this.lista.push(estu);
            this.lista.push({nombre:this.nombre, apellido:this.apellido})
        },
        presionandoTecla(event){

            console.log('Presionando');
            console.log(event);

            if(event.charCode=== 13){
                this.agregarEstudiante();

            }
        }


    },
    watch: {

    },

    data() {

        return {
            mensaje: 'Hola mundo desde VUE.JS',
            valor: 100,
            lista: estudiantes,  
            nombre: null,
            apellido:null,  

        }
    }

});


// crear un identificador,
app.mount('#myApp');