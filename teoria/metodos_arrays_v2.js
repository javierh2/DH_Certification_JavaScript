// .slice() retorna una copia superficial de una porcion de una array existente desde un inicio y cierre //
// sintaxis: let arrayNew = arrayOriginal.slice(inicio,fin) //

// .splice() combina el contenido de una array, eliminando o reemplazando elementos existentes y o agregando nuevos
// elementos en su lugar//
// sintax: arrayOriginal.splice(inicio,cantidadEliminar,elemento1,elemento2,...)  //
// let meses = ["enero", "febrero", "marzo", "abril", "mayo"]
// meses.splice(1,2,"nuevoMes1","nuevoMes2")
// console.log(meses)
// meses.splice(2,0,"quehacesacárey")
// console.log(meses)


// .sort()  ordena elementos de un array y lo retorna ordenado ya sea, int o strings//
// arrayOriginal.sort() //

// let num = [2,4,6,8,5,7,1]
// num.sort()
// console.log(num)

// let palabras = ["auto", "moto", "barco", "lancha"]
// palabras.sort()
// console.log(palabras)

// .find()  devuelve el primer elemnto que cumple con una condicion dada en una funcion //
// let resultado = arrayOriginal.find(funcionDePrueba(elementos))//

let edades = [26,36,56,15,50,12]
let mayorEdad = edades.find(edad => edad >= 18)
console.log(mayorEdad)

let primeraEdadMayor = edades.find(edad => edad > 30)
console.log(primeraEdadMayor)