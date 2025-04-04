// .map() recibe una funcion por parametro   un callbacks recorre el arreglo y devuelve uno nuevo con las mod segun la func //

// let num = [2,5,6,7]
// let newNum = num.map( function(numeros) {
//     return numeros * 2
// })

// console.log(newNum)


// .filter() recorre la totalidad del array y filtra segun una condicion indicada en un callback //

// let edades = [22, 8, 15, 17 ,30]

// let edadesFilter = edades.filter(function(ages) {
//     return ages >= 17
// })

// console.log(edadesFilter)

// .reduce() recorre la totalidad del arreglo y devuelve un unico valor //

let nums = [2,4,6,8,0,,15,654,4566,432432432]
let suma = nums.reduce(function (acumulador,num) {
    return acumulador + num
})

console.log(suma)