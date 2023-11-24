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
    console.log("let: " + var1);
    console.log("let: " + varTexto1);

    /* var es un tipo de dato que esta en desuso*/
    var var2 = 10;
    var varTexto2 = 'Texto';
    console.log("var: " + var2);
    console.log("var: " + varTexto2);

    const cons1 = 10;
    const constTexto1 = 'Texto';
    console.log("cons: " + cons1);
    console.log("cons: " + constTexto1);

    //declaracion de arreglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    console.log("arreglo: " + diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[4]);
    diasSemana[5] = "Sabado";
    diasSemana.push("Domingo");
    console.log("completo: " + diasSemana);
    diasSemana.unshift("Feriado");
    console.log("Aregado al inicio feriado: " + diasSemana);

    const edades = [2, 3, 4, 5];
    console.log("arreglo numeros: " + edades);

    const edades2 = [6, 7, 8];

    const edadesFinales = edades.concat(edades2);
    console.log("arreglo numeros concatenado: " + edadesFinales);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === "Martes") {
            console.log("Martes 2x1");
        }
    }

    //declaración de objetos
    const estudiante = {
        nombre: "Fernando",
        apellido: "Mosquera",
        edad: 25,
        sexo: "M",
        ciudad: "Quito"
    };

    console.log(estudiante);
    console.log(estudiante.nombre);
    estudiante.nombre = "Pedro";
    console.log(estudiante);
    console.log(estudiante.nombre);

    const persona = {
        nombre: "Fernando",
        apellido: "Mosquera",
        edad: 25,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Rumipamba",
            numeracion: "Oe3-80",
            barrio: "Mariana de Jesus"
        }
    };

    console.log(persona);
    console.log(persona.direccion);
    console.log(persona.direccion.barrio);

    const p1 = {
        nombre: "ALvaro",
        apellido: "Gonzales",
        edad: 25
    };
    const p2 = {
        nombre: "Ximena",
        apellido: "Troya",
        edad: 20
    };
    const p3 = {
        nombre: "Angelica",
        apellido: "Reyes",
        edad: 30
    };
    const p4 = {
        nombre: "Joaquin",
        apellido: "Tello",
        edad: 30
    };

    const arregloPacientes = [p1, p2, p3];
    console.log(arregloPacientes);
    arregloPacientes.push(p4);
    console.log(arregloPacientes);

    const pacientes = [{
        nombre: "Fernando",
        apellido: "Mosquera",
        edad: 25
    }, {
        nombre: "Vilma",
        apellido: "Romero",
        edad: 25
    }, {
        nombre: "Adrian",
        apellido: "Lequerique",
        edad: 25,
    }];

    console.table(pacientes);
    //va eliminando un elemento de la lista
    const pop = pacientes.pop();
    console.log(pop);
    console.table(pacientes);

    //Desestructuración de arreglos

    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2;
    console.log(dia2);
    console.log(diasSemana2);

    const [d1, d2, d3, d4, d5, d6] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(d4);

    //Desestructuración de objetos

    const vehiculo = {
        marca: "KIA",
        modelo: "Niro",
        anio: "2023"
    };

    const { marca, modelo, anio } = vehiculo;

    console.log(marca);
    console.log(modelo);
    /*
        const carro = {
            ma: "Hyndai",
            model: "Elantra",
            an: "2024",
            multimedia: {
                radio: "tactil",
                mandos: "volante",
                conectividad: "AndroidAuto"
            }
        };
    
        const { ma, model, an, multimedia } = carroigual;
    
        const { radio, mandos, conectividad } = carro.multimedia;
    
        console.log(multimedia);
    
        console.log(conectividad);
    
    */
    const { ma, tipo, multimedia: { radio, mandos, conectividad } } = { ma: 'Hyndai', tipo: 'Elantra', multimedia: { radio: "tactil", mandos: "volante", conectividad: "android" } };

    console.log(conectividad);
    

}
