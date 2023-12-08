console.log("elementos Vue");

console.log(Vue);

const app=Vue.createApp({
   /* template: `
    <h1>  Hola Mundo </h1>
    <p> Desde App.js </p>

    <h6>{{1+1}}</h6>

    <p>  {{[1,2,3,4,5,6,7,8]}} </p>

    <p> {{true? 'Verdadero': 'Falso'}}  </p>
    <p> {{false? 'Verdadero': 'Falso'}}  </p>
    `
*/

});


// crear un identificador,
app.mount('#myApp');