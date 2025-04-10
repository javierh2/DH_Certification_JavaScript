// ordenamiento burbuja los elementos más grandes se mueven gradualmente hasta el final de la lista //
let numeros = [5, 4, 1, 6, 3, 2]

for (let j = 0; j < numeros.length; j++) {
        for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > numeros[i+1]){
            let numTemporal = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i + 1] = numTemporal
        }
    }
}
// console.log(numeros)

// ordenacion de string y objetos //

let array = ["zapato", "auto", "torta", "almendra"]

for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]){
            let numTemporal = array[i]
            array[i] = array[i+1]
            array[i + 1] = numTemporal
        }
    }
}
// console.log(array)


let objeto = [
    {
        nombre : "Javier",
        edad : 32,
    },
    {
        nombre : "Juan",
        edad : 38,
    },
    {
        nombre : "Pepe",
        edad : 25,
    },
]

for (let j = 0; j < objeto.length ; j++) {
        for (let i = 0; i < objeto.length - 1; i++) {
        if(objeto[i].edad > objeto[i+1].edad){
            let numTemporal = objeto[i]
            objeto[i] = objeto[i+1]
            objeto[i + 1] = numTemporal
        }
    }
}
console.log(objeto)