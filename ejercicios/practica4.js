// ej 1 - crear funcion y ordene mediante ordenamiento burbuja //
let numero = [2,4,1,5,7,3,9,44, 4, 155,5123413,1234,4]

function ordenarNumeros(arreglo){
    for (let j = 0; j < arreglo.length; j++) {
        for (let i = 0; i < arreglo.length; i++){
            if (arreglo[i] > arreglo[i+1]){
                let numGuardado = arreglo[i]
                arreglo[i] = arreglo[i+1]
                arreglo[i + 1] = numGuardado
            }
        }
    }
    return arreglo
}

// let metodoPrueba = ordenarNumeros(numero)
// console.log(metodoPrueba)

// ej 2 - indicar ordenamiento //

function indicarOrdenamiento(arreglo){
    let ordenado = true
    for (let j = 0; j < arreglo.length; j++) {
        for (let i = 0; i < arreglo.length; i++){
            if (arreglo[i] > arreglo[i+1]){
                ordenado = false
            }
        }
    }
    return ordenado
}


// ordenarNumeros(numero)
let metodoPrueba2 = indicarOrdenamiento(numero)
// console.log(metodoPrueba2)


// ej 3 - contar la cantidad de veces que aparece un numero en un array //
function contarIguales(arreglo, num) {
    let cantidad = 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === num){
            cantidad++
        }
    }
    return cantidad
}

let conteo = contarIguales(numero, 4)
// console.log(conteo)


// ej 4 - Obtener votos en un array //

let canciones = [
    {
        nombre : "canta",
        cantidaVotos: 230
    },
    {
        nombre : "azul",
        cantidaVotos : 1200
    },
    {
        nombre : "vuela",
        cantidaVotos: 20000
    },
    {
        nombre : "hola",
        cantidaVotos : 500
    },
]

// busqueda lineal //
function busquedaLineal(array, cancion) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nombre === cancion) {
            return array[i].cantidaVotos
        }
    }
    return "La cancion solicitada no se encuntra en la lista"
}
let votos = busquedaLineal(canciones,"caca")
// console.log(votos)


// busqueda binaria //
function busquedaBinaria(array, cancion) {
    let inicio = o
    let fin = array.length -1

    while (inicio <= fin) {
        let posMedio = Math.round((inicio + fin)/2)
        let medio = array[posMedio]
        if (medio.nombre === cancion) {
            return medio.cantidaVotos
        }
        if (medio.nombre > cancion) {
            fin = posMedio -1
        }else{
            inicio = posMedio + 1
        }
    }
    return -1
}

