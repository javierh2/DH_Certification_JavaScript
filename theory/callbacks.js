// funciones que se envian con parametros a otras funciones y se ejecutan cuando finaliza una tarea asincrónica //
function proceso(array, callbacks) {
    for (let i = 0; i < array.length; i++) {
        callbacks(array[i]);
    }
}

// funcion de callbacks //

function muestra(elementos){
    console.log(elementos)
}

function multDos(elemento) {
    console.log(elemento *2)
}

function cuadrado(elemento) {
    console.log(elemento * elemento)
}

let arreglo = [1,2,3,4,5]

proceso(arreglo,multDos)
