// submit del formulario
const submitFunction = (event) =>{
    if(!validarFormulario()){
        event.preventDefault()
    }else{
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
    // event.preventDefault() condicion-se previene la act de la web //
    // validarFormulario()  ejecuta la funcion //
}
document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el envio del form //

function validarFormulario() {
    // CAMPOS TEXTOS //
    let camposTexto = document.querySelectorAll('input[type="text"]') //selecciona todos los query con campos inputs de tipo texto   uso const para la variable porque no se va a mod//
    let validacionCorrecta = true   // uso de let porque va a ser modificado su valor  //

    camposTexto.forEach(campo =>{ // recorre los querys //
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera mayus (para tener el id correcto del input) //
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener más caracteres')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    // CAMPO EMAIL //
    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')
    // expresion regular para tener el formato del email//
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // este regex valida que el formato del email se válido
        ocultarError(errorEmail)
    } else {
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido')
    }

    // CAMPO EDAD //
    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')
    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de edad para registrarte')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    // CAMPO ACTIVIDAD //
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')
    if (actividad.value == '') {
        mostrarError(errorActividad, 'Selecciona una actividad')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)
    }

    // CAMPO ESTUDIO //
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')
    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Selecciona una opción académica')
        validacionCorrecta = false
    }else{
        ocultarError(errorNivelEstudio)
    }

    // CAMPO TERMINOS Y CONDICIONES //
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones para continuar')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta // este return valida si el formulario es true o false //
}


//mostrar error si el contenido no corresponde //
const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje
    elemento.style.display = "block"
}
//oculta error si el contenido corresponde //
const ocultarError = (elemento) =>{
    elemento.textContent = ''
    elemento.style.display = "none"
}