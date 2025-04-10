const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('respuesta de la promesa 1')
    },5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('respuesta de la promesa 2')
    },2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('respuesta de la promesa 3')
    },3000);
})

// promise1.then(res => {
//     console.log(res)
// })
// promise2.then(res => {
//     console.log(res)
// })
// promise3.then(res => {
//     console.log(res)
// })

Promise.all([promise1,promise2,promise3]) // array de promesas
.then(resolve =>{
    console.log(resolve[0])
    console.log(resolve[1])
    console.log(resolve[2])
})
.catch(error =>{
    console.error(error)
})