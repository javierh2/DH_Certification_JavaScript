// es un tipo de datos que es un arreglo que contiene arreglos en formato fila - columna //
// crar una matriz //
let ejemplo = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// visualizar una matriz //
console.table(ejemplo)
// opcion 2 //
// let arrayMatriz = []
// let fila1 = ["a","b","c"]
// let fila2 = ["d","f","g"]
// arrayMatriz[0] = fila1
// arrayMatriz[1] = fila2
// console.table(arrayMatriz)

// acceder a un elemento especifico //

// console.log(ejemplo[1][2])

// modificar un elemento especifico //

// ejemplo[1][2] = 666
// console.table(ejemplo)

// recorrer una columna //
// for (let i = 0; i < ejemplo.length; i++){
//     console.log(ejemplo[i][0])
// }

// recorrer una fila //
// for (let i = 0; i < ejemplo[0].length; i++){
//     console.log(ejemplo[0][i])
// }


// recorrer la totalidad de datos de la matris filas + columnas //

for (let i = 0; i < ejemplo.length; i++) {   //este for recorre las filas //
    for (let j = 0; j <ejemplo.length; j++){
        console.log(ejemplo[i][j])          //recorre las columnas //
    }
}

// filtrar dentro de matrices //

for (let i = 0; i < ejemplo.length; i++) {
    for (let j = 0; j <ejemplo.length ; j++){
        if(ejemplo[i][j] % 2 == 0){
            console.log(ejemplo[i][j])
        }
    }
}