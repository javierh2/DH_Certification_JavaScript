const myPromise = new Promise((resolve, reject) => {
    // llamadas a servicios
    // lectura o escritura de archivos
    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        resolve(random)
    }, 500);
})


const isEven = number =>{
    const even = number % 2 == 1 ? 'es impar' : 'es par'
}
// uso de la promesa
// myPromise.then(isEven,{
//     console.log(even)
// }).catch(error =>{
//     console.error(error)
// }).finally(
//     console.log('esto siempre se ejecuta')
// )