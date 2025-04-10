let miPromesa = new Promise(function(resolve, reject){
    // simulacion de tarea asincronica
    setTimeout(function() {
        let exito = true //cambia a faltse para simular el fallo
        if(exito){
            resolve('exito') // se cumple
        }else{
            reject('fallo') // se rechaza
        }
    }, 2000);
});

miPromesa.then(function(valor){
    console.log(valor) // se ejecuta cuando la promesa cumple
}).catch(function(razon){
    console.log(razon) //se  ejecunta cuando la promesa se rechaza
})