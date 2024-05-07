let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


//validar usuario ingresado en el input
function verificarIntento () {
    //coloco parseInt para convertir el valor en un numero
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numerodeUsuario === numeroSecreto) {
        asignarTextoElemento('h1' , `¡TE FELICITO! Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
    
        // Obtiene la imagen inicial y la oculta
        let imagenInicial = document.querySelector('.container__imagen-persona');
        imagenInicial.style.display = 'none';
    
        // Creo una nueva imagen y la añade al documento
        let img = document.createElement('img');
        img.src = "./img/toy_todos.jpg"; // Asigna la ruta de la imagen 
        img.width = 50; // Ajusto esto al tamaño que prefieras
        img.className = "container__imagen-persona"; // nueva imagen, misma clase que la imagen inicial
        document.querySelector('.container__contenido').appendChild(img);
    
        document.getElementById('reiniciar').removeAttribute('disabled');
      
    } else {
        if (numerodeUsuario > numeroSecreto){
            asignarTextoElemento('h5' , 'El numero secreto es menor');
        } else{
            asignarTextoElemento('h5' , 'El numero secreto es mayor');
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
//funcion condiciones iniciales

function condicionesIniciales () {
    asignarTextoElemento('h1' ,'Adivina el nùmero secreto');
    asignarTextoElemento('h5' , 'Ingrese un nùmero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//funcion para reiniciar y borrar juego

function reiniciarJuego () {
    limpiarCampo();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales()

