// submit del formulario
const submitFunction = (event) =>{
    event.preventDefault() //condicion-se preventa la act de la web //
    validarFormulario() // ejecuta la funcion //
}
document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el envio del form //

function validarFormulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]') //selecciona todos los query con campos inputs de tipo texto //
    let validacionCorrecta = true

    camposTexto.forEach(campo =>{ // recorre los querys //
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera mayus (para tener el id correcto del input) //
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'este campo es requerido')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'este campo debe tener más caracteres')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })
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