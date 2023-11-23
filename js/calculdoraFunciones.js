function sumarNumerosCompleto(){

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumeros');
    var resultado = n1 + n2;
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;

}

function restarNumeros(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumeros');
    var resultado = n1 - n2;
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}


function multiplicacionNumeros(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumeros');
    var resultado = n1 * n2;
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}


function dividirNumeros(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumeros');
    var resultado = n1 / n2;
    console.log(resultado);
    document.getElementById('idresultado2').innerText = resultado;
}

function cambiarImagen(){

    document.getElementById('idimagen').src='https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/08/the-international-torneo-de-dota-2.jpg?resize=1500%2C893&quality=50&strip=all&ssl=1';


}

