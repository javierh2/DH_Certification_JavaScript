// try intentar, catch atrapar, finally finalmentem, throw lanzar

// try{
//     alert('hola')
// }
// catch(error){
//     document.getElementById('error').innerHTML = error.message
// }

const myFun = () =>{
    const message = document.getElementById('res') //selecciono el p
    message.innerHTML = '' // se vacia el p

    let num = document.getElementById('input').value // seleccion contenido del input
    try {
        if(num.trim() == '') throw 'vacio'
        if(isNaN(num)) throw 'no es un numero'
        num = Number(num)
        if(num < 1) throw 'muy bajo'
        if(num > 10) throw 'muy alto'
        message.innerHTML = 'el dato ingreasado es: ' + num
    } catch (error) {
        message.innerHTML = 'el dato ingreaso es: ' + error
    }
}