// strings y accesos unicos //
// let saludo = "hola!"
// console.log(saludo[4])

// .length  es una propiedad y devuelve total cantidad de caracteres de un string //
// let miSerie = "Dexter"
// console.log(miSerie.length)

// .indexOf() //
// let saludo = "hola! estamos codeando"
// console.log(saludo.indexOf("o"))
// console.log(saludo.indexOf("estamos"))

// .slice() //
// let frase = "hola! chau."
//  opcion 1 //
// console.log(frase.slice(6,10))
//  opcion 2 //
// console.log(frase.slice(6))
//  opcion 3 //
// console.log(frase.slice(-8))

// .trim() elimina espacios al principio y final //
// let nomCompleto = "    javi er        "
// console.log(nomCompleto)
// console.log(nomCompleto.trim())

// .split() divide un string en partes y responde como un array //
// let saludo = "hola, chau"
// console.log(saludo.split(" "))
// let arrayNew = saludo.split("pe")
// console.log(arrayNew)


// .replace() remplaza una parte del string por otra //
let frase = "me encanta Java"
let fraseNew = frase.replace("Java", "Python")
console.log(fraseNew)