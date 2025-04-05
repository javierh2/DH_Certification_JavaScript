// ej 1 - validador de contraseña //

let contraseña = "miContraseña"

function validador(contraseñaRecibida) {
    if (contraseña === contraseñaRecibida) {
        return "Contraseña correcta"
    }
    else{
        return "contraseña inválida"
    }
}

let test = validador("miContraseña")
console.log(test)