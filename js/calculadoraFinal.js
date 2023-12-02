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

    document.getElementById('pantalla').innerText = '';

}

function obtener(valor) {
    document.getElementById("pantalla").innerText =
    document.getElementById("pantalla").innerText + valor;
}

function operacion(simbolo) {
    numeros.push(parseInt(document.getElementById("pantalla").innerText));

    document.getElementById("pantalla").innerText = '';
    op = simbolo;
}

function calcular() {

    numeros.push(parseInt(document.getElementById("pantalla").innerText));
    if (op === "+") {
        document.getElementById("pantalla").innerHTML =
            "Resultado: " + sumar(numeros[0], numeros[1]);
    } else if (op === "-") {
        document.getElementById("pantalla").innerHTML =
            "Resultado: " + restar(numeros[0], numeros[1]);
    } else if (op === "*") {
        document.getElementById("pantalla").innerHTML =
            "Resultado: " + multiplicar(numeros[0], numeros[1]);
    } else if (op === "/") {
        document.getElementById("pantalla").innerHTML =
            "Resultado: " + dividir(numeros[0], numeros[1]);
    }
    numeros = [];
    op = "";
}