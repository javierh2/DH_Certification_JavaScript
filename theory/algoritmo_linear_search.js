// encuentra un valor especifico dentro de un array e indica su posicion //
let array = [14, 3, 51, 7, 92, 110, 5, 17, 13, 48]
let elementoBuscado = 110

// let posicion = -1

for (let i = 0; i < array.length; i++) {
    if (array[i] === elementoBuscado){
        posicion = i
    }
}

// console.log(posicion)

function busquedaLineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento){
            return i
        }
    }
    return -1
}

let indiceEncontrado = busquedaLineal(array, 666)
if (indiceEncontrado == -1){
    console.log("el elemento a buscar no se encuentra en el array")
}else{
    console.log("el elemento se encuentra en el indice " + indiceEncontrado)
}






