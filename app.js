let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


//validar usuario ingresado en el input
function verificarIntento () {
    //colocar parseInt para convertir el valor en un numero
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    if (numerodeUsuario === numeroSecreto) {
        asignarTextoElemento('h2' , `¡Te felicito! Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerodeUsuario > numeroSecreto){
            asignarTextoElemento('p' , 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p' , 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo(){
    document.querySelector('#valorUsuario').value = '';
}

// agrego paramentros
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

//funcion para generar un numero aleatorio
function generarNumeroSecreto (){
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;

}
console.log(numeroSecreto);

function condicionesIniciales () {
    asignarTextoElemento('h2' ,'Adivina el nùmero secreto');
    asignarTextoElemento('p' , 'Ingrese un nùmero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    limpiarCampo();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales()

