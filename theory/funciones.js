// declarando funcion //
function saludar(){
    console.log("Hola Javier")
}

// llamado de funcion y haciendlo codigo reutilizable //
saludar()
saludar()
saludar()

// parametros en una funcion //
function suma(num1, num2){
    let resultado = num1 + num2
    console.log("el resultado es:",resultado)
}

suma(10,10)
suma(3,3)

// scope y retornos //
//para que el resultado persista en la variable para a futuro usarlo //

function suma(nota1, nota2, nota3){
    let resultado = nota1+nota2+nota3;
    return resultado;
}

function promedio(){
    let rdoSuma = suma(7,9,8);
    let rdoPromedio = rdoSuma / 3;
    return rdoPromedio;
}

let promedioObtenido = promedio();
console.log("El promedio de numeros es:", promedioObtenido)