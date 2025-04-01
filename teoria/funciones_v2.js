// funciones declaradas se pueden invocar previo a su creación
function name(params) {
    return none
}

// funciones expresadas se asignan a una variable y no se pueden hacer como las declaradas
let resta = function(num1,num2){
    return num1 - num2
}

// funciones flechas / arrow functions para codigo simple no se puede usar en objetos
let mult = (num1,num2) => {
    return num1 * num2
}
console.log(mult(4,2))
