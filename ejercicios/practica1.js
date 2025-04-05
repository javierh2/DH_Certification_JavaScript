// ej 1 - validador de contraseña //

// let contraseña = "miContraseña"

// function validador(contraseñaRecibida) {
//     if (contraseña === contraseñaRecibida) {
//         return "Contraseña correcta"
//     }else{
//         return "contraseña inválida"
//     }
// }

// let test = validador("miContraseña")
// console.log(test)

// ej 2 - calculadora IMC //

// function calcularIMC(peso, altura) {
//     let imc =  peso / (altura * altura)

//     if (imc < 18.5) {
//         console.log("bajo peso")
//     }else if(imc < 24.9){
//         console.log("peso normal")
//     }else if(imc < 29.9){
//         console.log("sobrepeso")
//     }else{
//         console.log("obesidad")
//     }
// }

// calcularIMC(88,1.70)

// ej 3 - convertidor de monedas //

// opcion 1 //
// function convertirMoneda(cantidad, tipoCambio) {
//     let resultado = cantidad * tipoCambio
//     return resultado
// }

// let pesos = convertirMoneda(100, 1300)
// console.log(pesos)

// opcion 2 //
// function convertirDinero(cantidad, monedaCambio) {
//     let cambio

//     switch (monedaCambio) {
//         case "dolar":
//             cambio = 1300
//             break;
//         case "real":
//             cambio = 7
//             break
//         case "euro":
//             cambio = 1220
//             break
//         default:
//             console.log("Moneda no tasada")
//             return -1;
//             break;
//     }

//     let resultado = cantidad * cambio
//     console.log("cantidad de dinero convertido a " + monedaCambio + ": $" + resultado )
// }

// convertirDinero(100, "peruano")