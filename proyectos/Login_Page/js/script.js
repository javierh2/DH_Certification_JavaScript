document.addEventListener('DOMContentLoaded', function(){ // escucha el documento apenas se carga la página
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideButton = document.getElementById('show-hide')

    loginForm.addEventListener('submit', function(event){
        event.preventDefault()
        validateForm()
    })

    emailInput.addEventListener('blur',function(){  // blur cuando sale del formulario escucha el evento email
        validateEmail()
    })

    emailInput.addEventListener('change',function(){  // change cualquier cambio, limpia el error
        clearError(emailError)
    })

    passwordInput.addEventListener('change',function(){  // change cualquier cambio, limpia el error
        clearError(passwordError)
    })

    confirmPasswordInput.addEventListener('change',function(){  // change cualquier cambio, limpia el error
        clearError(confirmPasswordError)
    })

    // valida el formulario en su estado true
    function validateForm() {
        const isValidEmail = validateEmail()
        const isValidPassword = validatePassword()
        const passwordMatch = validateMatch()

        if (isValidEmail && isValidPassword && passwordMatch){ // guardo email en localStorage y genero un JSON en consola con los datos
            saveLocalStorage()  // se llama a la funcion de localStore + JSON
            alert('Haz ingresado con éxito')
        }
    }

    // accion del botón mostrar / ocultar
    showHideButton.addEventListener('click',function(){
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
            confirmPasswordInput.type = 'text'
        }else{
            passwordInput.type = 'password'
            confirmPasswordInput.type = 'password'
        }
    })

    //callbacks
    function validateEmail() {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        const emailValue = emailInput.value.trim()  // limpia espacios vacios al inicio y fin del input
        if (!emailRegex.test(emailValue)){
            showError(emailError,'Ingresa un email válido')
            return false
        }
        return true
    }

    function validatePassword(){
        const passwordValue = passwordInput.value.trim()
        if(passwordValue.length < 6){
            showError(passwordError,'Ingresa una contraseña de 6 o más caracteres')
            return false
        }
        return true
    }

    function validateMatch() {
        const passwordValue = passwordInput.value.trim()
        const confirmPasswordValue = confirmPasswordInput.value.trim()
        if(passwordValue != confirmPasswordValue){
            showError(confirmPasswordError,'Las contraseñas no coinciden')
            return false
        }
        return true
    }

    // mensajes de error
    function showError(errorElement, message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    // guardado en localStorage y genera un JSON
    function saveLocalStorage(){
        const emailValue = emailInput.value.trim()
        localStorage.setItem('email', emailValue)  //guarda en el localStorage el email
        const body = bodyBuilderJSON()             // se genera un console log del body con el json creado
        console.log(body)
    }

    function bodyBuilderJSON(){
        return {
            "email":emailInput.value,
            "password":passwordInput.value
        }
    }

})