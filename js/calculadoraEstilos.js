const sumar = (num1, num2) => {
    return num1 + num2;
}
const restar = (num1, num2) => {
    return num1 - num2;
}
const multiplicar = (num1, num2) => {
    return num1 * num2;
}
const dividir = (num1, num2) => {
    return num1 / num2;
}


let op = "";
let numeros = [];





const limpiar = () => {

    document.getElementById('idrespuesta').innerText = '';

}

function obtener(valor) {
    document.getElementById("pantalla").value =
        document.getElementById("pantalla").value + valor;
}

function operacion(simbolo) {
    numeros.push(parseInt(document.getElementById("pantalla").value));

    document.getElementById("pantalla").value = '';
    op = simbolo;
}

function calcular() {

    numeros.push(parseInt(document.getElementById("pantalla").value));
    if (op == "+") {
        document.getElementById("idrespuesta").innerHTML =
            "Resultado: " + sumar(numeros[0], numeros[1]);
    } else if (op == "-") {
        document.getElementById("idrespuesta").innerHTML =
            "Resultado: " + restar(numeros[0], numeros[1]);
    } else if (op == "*") {
        document.getElementById("idrespuesta").innerHTML =
            "Resultado: " + multiplicar(numeros[0], numeros[1]);
    } else if (op == "/") {
        document.getElementById("idrespuesta").innerHTML =
            "Resultado: " + dividir(numeros[0], numeros[1]);
    }
    numeros = [];
    op = "";
    document.getElementById("pantalla").value = "";
}