const prompt = require("prompt-sync")({ sigint: true });
// de esta forma se pueden realizar INPUTS desde terminal  previamente ejecuté en terminal "npm i prompt-sync"//

/* todos los inputs van a ser en formato string
para formatearlo a integer :
let numero = parseInt(prompt("coloque un numero:"))

let numero = parseInt(prompt("coloque un numero: "))
console.log("el numero ingresado por input es:",numero)

let numero1 = prompt("coloque un numero1: ")
console.log("el numero1 ingresado por input es:",numero1)
*/

function suma(num1, num2){
    let resultado = num1 + num2
    return resultado
}

function resta(num1, num2){
    let resultado = num1 - num2
    return resultado
}

function mult(num1, num2){
    let resultado = num1 * num2
    return resultado
}

function div(num1, num2){
    if (num2 == 0) {
        return "No se puede dividir por 0, debe elegir otro número"
    }
    else{
        return num1/num2
    }
}

console.log("Bienvenido a su calculadora en JS!")
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Division")
console.log("4. Multiplicacion")
let opcion = parseInt(prompt("Indique que operacion desea realizar: "))

let num1
let num2
let resultado


switch (opcion) {
    case 1:
        num1 = parseInt(prompt("Indique el 1er numero a sumar: "))
        num2 = parseInt(prompt("Indique el 2do numero a sumar: "))
        resultado = suma(num1, num2)
        console.log("el resultado de la suma es: ", resultado)
        break;

    case 2:
        num1 = parseInt(prompt("Indique el 1er numero a restar: "))
        num2 = parseInt(prompt("Indique el 2do numero a restar: "))
        resultado = resta(num1, num2)
        console.log("el resultado de la resta es: ", resultado)
        break;

    case 3:
        num1 = parseInt(prompt("Indique el 1er numero a dividir: "))
        num2 = parseInt(prompt("Indique el 2do numero a dividir: "))
        resultado = div(num1, num2)
        if(typeof resultado == "string"){
            console.log(resultado)
        }
        else{
            console.log("el resultado de la division es: ", resultado)
        }
        break;

    case 4:
        num1 = parseInt(prompt("Indique el 1er numero a multiplicar: "))
        num2 = parseInt(prompt("Indique el 2do numero a multiplicar: "))
        resultado = mult(num1, num2)
        console.log("el resultado de la multiplicacion es: ", resultado)
        break;

    default:
        console.log("Ingresó una opción no valida")
        break;
}
