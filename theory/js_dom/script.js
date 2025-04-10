// function changeThisElement(element) {
//     element.innerHTML = 'hola desde una funct declarativa '
// }

// const changeThisElement = element => element.innerHTML = 'hola desde una funct flecha'

// const displayDate = () => document.getElementById('test').innerHTML = Date()

// document.getElementById('btn').onclick = displayDate


// const checkCookies = () => {
//     let text = navigator.cookieEnabled ? 'Las cookies estan On' : 'Las cookies están Off'
//     document.getElementById('test').innerHTML = text
// }

// const upperCase = () =>{
//     const input = document.getElementById('name');
//     input.value = input.value.toUpperCase()
// }

// const over = element => {
//     element.innerHTML = 'estas sobre el div'

// }
// const out = element => {
//     element.innerHTML = 'saliste del div'
// }
// let key

// const keydown = ($event) =>{
//     key = $event.altKey
//     console.log(key)
//     document.getElementById("alt").innerHTML = key ? 'estas tocando la letra "alt"' : 'no estas tocando la letra "alt"'
// }

// const paragraph = document.createElement('p')
// const node = document.createTextNode('esto es texto nuevo de js')
// paragraph.appendChild(node)

// const container = document.getElementById('div1')
// const p1 = document.getElementById('p1')
// container.insertBefore(paragraph, p1)

// const p2 = document.getElementById('p2')
// p2.remove()
// container.removeChild(p1)

// const p3 = document.getElementById('p3')
// container.replaceChild(paragraph,p3)

// const addClass = () => {
//     const divClassList = document.getElementById('div').classList
//     divClassList.add('red-background')
// }

// const removeClass = () => {
//     document.getElementById('div').classList.remove('red-background')
// }

// const toggleClass = () => {
//     document.getElementById('div').classList.toggle('red-background')

// }

// const para1 = document.getElementById('para1')
// const para2 = document.getElementById('para2')
// para1.setAttribute('class','red-background')
// let text = para1.getAttribute('class') // ? para1.getAttribute('class') : para2.getAttribute('class')
// document.getElementById('atribute').innerHTML = text

// const color = document.getElementById('styles').style.color = 'red'
// const background = document.getElementById('styles').style.backgroundColor = 'black'

// console.log(color)
// console.log(background)

// const container = document.getElementById('div')
// container.querySelector('p.style').innerHTML = 'TEXTO JS'

// console.log(window)
// const clickMe = () => {
//     const height = window.innerHeight
//     const width = window.innerHeight
//     console.log(height, width)
// }

// const clickMe = () =>{
//     console.log(window.history)
// }


// document.cookie = 'username=javier'
// const user = document.cookie
// confirm(`este es su nombre de usuaurio? ${user}`)

// const geoLocation = document.getElementById('ubicacion')

// const showPosition = position =>{
//     geoLocation.innerHTML = 'la latitud es: ' + position.coords.latitude + '<br>la longitud es: ' + position.coords.longitude
// }

// const getLocation = () =>{
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         geoLocation.innerHTML = 'la geolocalizacion está apagada o no está soportada por este navegador'
//     }
// }


// const doValidation = () =>{
//     const number = document.getElementById('number')
    // if (!number.checkValidity()){
    //     document.getElementById('error').innerHTML = number.validationMessage
    // }else{
    //     document.getElementById('error').innerHTML = 'el numero está correcto'
    // }

//     document.getElementById('error').innerHTML = number.checkValidity()
//         ? 'el numero está correcto'
//         : number.validationMessage
// }

// const doValidation = () =>{
//     const name = document.getElementById('name')
//     document.getElementById('error').innerHTML = name.checkValidity()
//         ? 'el nombre está correcto'
//         : 'el nombre es requerido, debes completar este campo'
// }



// const goBack = () => window.history.back()
// const goForward = () => window.history.forward()
// const goBackx2 = () => window.history.go(-2)
// const goForwardx2 = () => window.history.go(2)

// const firstname = document.getElementById('firstname')

// const lastname = document.getElementById('lastname')

// const job = document.getElementById('job')

// document.getElementById('welcome').innerHTML = localStorage.getItem('userName') == null ? '' : 'bienvenido ' + localStorage.getItem('userName')

// const save = () =>{
//     localStorage.setItem('userName', firsname.value + ' ' + lastname.value)
//     localStorage.setItem('job', job.value)
// }

// const save = () =>{
//     sessionStorage.setItem('userName', firstname.value + ' ' + lastname.value)
//     sessionStorage.setItem('job', job.value)
//     document.getElementById('welcome').innerHTML = sessionStorage.getItem('userName') == null ? '' : 'bienvenido ' + sessionStorage.getItem('userName')
// }


console.log(text)