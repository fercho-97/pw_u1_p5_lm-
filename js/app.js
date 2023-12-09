console.log("elementos Vue");

console.log(Vue);

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
            

        }

    },
    watch: {

    },

    data() {

        return {
            mensaje: 'Hola mundo desde VUe.JS',
            valor: 100

        }
    }

});


// crear un identificador,
app.mount('#myApp');