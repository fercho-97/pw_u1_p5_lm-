const sumar = (n1, n2) => n1 + n2;

const sumarCompletoLambda = () => {

    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;

}

const restarNumeros = () => {
    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}


const multiplicacionNumeros = () => {
    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}


const dividirNumeros = () => {
    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}

const cambiarImagen = () => document.getElementById('idimagen').src = 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/08/the-international-torneo-de-dota-2.jpg?resize=1500%2C893&quality=50&strip=all&ssl=1';


const parsear = (id) => parseInt(document.getElementById(id).value);

function conceptosJS() {

    let var1 = 10;
    let varTexto1 = 'Texto';
    console.log("let: "+var1);
    console.log("let: "+varTexto1);

/* var es un tipo de dato que esta en desuso*/
    var var2 = 10;
    var varTexto2 = 'Texto';
    console.log("var: "+var2);
    console.log("var: "+varTexto2);

    const cons1 = 10;
    const constTexto1 = 'Texto';
    console.log("cons: "+cons1);
    console.log("cons: "+constTexto1);

    //declaracion de arreglos
const diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];

console.log("arreglo: "+ diasSemana);
}
