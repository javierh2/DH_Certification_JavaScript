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



// Async/Await example
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    document.getElementById('async-text').innerHTML = data.title;
}

fetchData()