let gastos = [
    [10,20,30,40,50,60,70],
    [5,15,25,35,45,55,65],
    [8,18,28,38,48,58,68],
    [12,22,32,42,52,62,72],
]

function gastoSemanal(matriz,numSemana) {
    let sumaDeGastos = 0
    for (let i = 0; i < matriz[numSemana].length; i++) {
        sumaDeGastos += matriz[numSemana - 1][i]
    }
    return sumaDeGastos
}

let sumaSemanal = gastoSemanal(gastos, 2)
// console.log("los gastos de la semana 2 fueron: "+ sumaSemanal)

function gastoDiaSemana(matriz, numDeDia) {
    let gastoDeUnDia = 0
    for (let i = 0; i < matriz.length; i++) {
        gastoDeUnDia += matriz[i][numDeDia - 1]
    }
    return gastoDeUnDia
}

let gastosTotales = gastoDiaSemana(gastos,1)
// console.log("los gastos de todos los lunes fueron: " + gastosTotales)

function gastoMensualTotal(matriz) {
    let gastoTotal = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[1].length; ++j){
            gastoTotal += matriz[i][j]
        }
    }
    return gastoTotal
}

let sumaMensualTotal = gastoMensualTotal(gastos)
// console.log("el gasto de el mes fueron: " + sumaMensualTotal)

function calcularTotalDeGastoPorSemana(matriz, callback) {
    let gastoPorSemana = []
    let gastoSemanales = 0
    matriz.forEach(function(semana){
        gastoSemanales = semana.reduce(function(total, dia){
            return total + dia
        })
        gastoPorSemana.push(gastoSemanales)
    });
    callback(gastoPorSemana)
}

function mostrarResultado(resultados) {
    console.log("total de gastos por semana: " + resultados)

}

calcularTotalDeGastoPorSemana(gastos, mostrarResultado)