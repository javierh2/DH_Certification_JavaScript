// ej 1 - unir dos arrays //
// function unirArrays(array1, array2){
//     return array1.concat(array2)
// }

// let arreglo = [4,5,6]
// let unionFinal = unirArrays([1,2,3], arreglo)
// console.log(unionFinal)

// ej 2 - eliminar primer elemento //
// function eliminarPrimerElemento(array) {
//     let primerElemento = array.shift()
//     return primerElemento
// }

// let arrayNuevo = [1,2,3]
// let elementoEliminado = eliminarPrimerElemento(arrayNuevo)
// console.log(arrayNuevo)
// console.log(elementoEliminado)

// ej 3 - convertir texto //
// function convertirTexto(texto) {
//     let textoMayuscula = texto.toUpperCase()
//     let textoMinuscula = texto.toLowerCase()
//     console.log("Texto en Mayuscula: " + textoMayuscula)
//     console.log("Texto en Minuscula: " + textoMinuscula)
// }

// convertirTexto("Hola soy un TEXTO y me voy a leer DOS veces")

// ej 4 - manipulando objetos //
let persona = {
    nombre : "Javier",
    edad : 32,
    ocupacion : "Developer"
}

function verObjeto(objeto) {
    console.log("Nombre: " + persona.nombre)
    console.log("Edad: " + persona.edad)
    console.log("Ocupacion: " + persona.ocupacion)
}

verObjeto(persona)
persona.ocupacion = "Aws Master"
persona.hobby = "Judo y BJJ"
console.log(persona)

// ej 5 - agregar propiedades a un objeto  //

persona.ubicacion = {
    codigoPosta : 5000,
    ciudad : "Cordoba",
    barrio : "Alto Alberdi"
}

function eliminarPropiedad(objeto, propiedad) {
    switch (propiedad) {
        case "nombre":
            delete objeto.nombre

            break;
        case "edad":
            delete objeto.edad

            break;
        case "ocupacion":
            delete objeto.ocupacion

            break;
        case "hobby":
            delete objeto.hobby

            break;
        case "ubicacion":
            delete objeto.ubicacion
            break;

        default:
            console.log("esa propiedad no se encuentra en el objeto")
            break;
    }
}

eliminarPropiedad(persona, "ocupacion")
console.log(persona)