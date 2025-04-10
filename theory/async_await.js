// funcion sincrona
function myFun() {
    return 'hola'
}
//funcion asincronica usando promise
function myFun() {
    return Promise.resolve('hola')
}
//funcion asincrona usando asyn
async function myFun() {
    return 'hola'
}

//LAMDA sincrona
const myFun = () => 'hola'
// lamda asincrona usando promesa
const myFun1 = () => Promise.resolve('hola')
// lamda asincrona usando async  y usar luego AWAIT
const myFun2 = async() => 'hola'