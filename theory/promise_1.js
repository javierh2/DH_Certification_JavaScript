// creacion de la promesa
const myPromise = new Promise((resolve, reject) => {
    // llamadas a servicios
    // lectura o escritura de archivos
    setTimeout(() => {
        const succes = false
        if (succes) {
            resolve('op exitosa')
        }else{
            reject('op fallida')
        }
    }, 5000);
})


// uso de la promesa
myPromise.then(res => {
    console.log(res)
}).catch(error =>{
    console.error(error)
}).finally(
    console.log('esto siempre se ejecuta')
)