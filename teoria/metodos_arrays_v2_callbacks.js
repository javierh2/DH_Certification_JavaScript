// .map() recibe una funcion por parametro   un callbacks recorre el arreglo y devuelve uno nuevo con las mod segun la func //

let num = [2,5,6,7]
let newNum = num.map( function(num) {
    return num * 2
})

console.log(newNum)