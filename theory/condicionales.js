// let contraseña = "javier"

// function validacion(data){
//     if (data === contraseña) {
//         console.log("contraseña valida")
//     }
//     else{
//         console.log("contraseña incorrecta")
//         }
//     }

// validacion("javier")

// let clima = "soleado"
// let temperatura = 28
// let mensaje = ""

// if (clima === "soleado" && temperatura > 29) {
//     console.log("El día está caluroso")
// }
// else{
//     console.log("el dia no está caluroso")
// }

// function imc(peso, altura) {
//     if (peso % altura == 1) {
//         console.log("sobrepeso");
//     }
//     else if(peso + altura == 5){
//         console.log("peso normal");
//     }
//     else{
//         console.log("bajo peso")
//     }
// }

// imc(11, 2)


// IF ternario //

// let num = 10;

// (num >= 0) ? console.log("el numero es positivo") : console.log("el numero es negativo")

// let edad = 18;
// let mensaje = "";

// mensaje = (edad >= 18) ? "es mayor" : "es menor";
// console.log(mensaje)


// SWITCH //
// let diaSemana = 4;
// let mensaje = "";

// switch (diaSemana) {
//     case 1:
//         mensaje = "hoy es lunes"
//         break
//     case 2:
//         mensaje = "hoy es martes"
//         break
//     case 3:
//         mensaje = "hoy es miercoles"
//         break
//     default:
//         mensaje = "numero incorrecto"
// }

// console.log(mensaje)

let fruta = "pera"
let msjFruta = ""

switch (fruta) {
    case "caca":
        msjFruta = "es una caca"
        break
    case "carne":
        msjFruta = "es carne de vaca"
        break
    case "pera":
        msjFruta = "es una deliciosa pera, la fruta"
        break
    default:
        msjFruta = "PROBÁ, CACA, CARNE O PERA"
}

console.log(msjFruta)