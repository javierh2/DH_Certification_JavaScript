const prompt = require("prompt-sync")({ sigint: true });
// estructuras repetitivas //
//variable contadora//
// let contar = 0
// while (contar <= 5) {
//     console.log("el contador es", contar)
//     contar++
// }

let control = "si"
let nota
let sumaNotas = 0
let cantidad = 0
console.log("bienvenido a notas")

while(control == "si"){
    console.log("ingrese una nota a sumar")
    nota = parseInt(prompt("nota alumno: "))

    sumaNotas = sumaNotas + nota
    cantidad++

    control = prompt("ingrese 'si' para cargar notas o 'no' para finalizar el script: ")
}

let promedio = sumaNotas / cantidad
console.log(promedio)