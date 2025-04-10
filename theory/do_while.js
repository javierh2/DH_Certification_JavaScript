const prompt = require("prompt-sync")({ sigint: true });

// let i = 1

// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let i = 15

// do {
//     console.log(i)
//     i++
// } while (i <= 10);
// console.log(i)


let numAdivinar = 4
let intento = 0
let numero

do {
    numero = parseInt(prompt("ingresa un numero del 1 al 10: "))
    if (numero < numAdivinar) {
        console.log("es menor!, intenta nuevamente")
    } else if (numero > numAdivinar){
        console.log("es mayor, intente nuevamente")
    }else{
        console.log("Haz adivinado")
    }
    intento ++
} while (numero != numAdivinar);

console.log("adivinaste el numero en el",intento,"intento")