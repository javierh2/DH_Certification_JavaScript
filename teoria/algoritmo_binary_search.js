// algoritmo de busqueda binaria, si se necesita encontrar un valor especifico en donde si se encuentra se nombrea su indice //

let arreglo = [1, 2, 3, 4, 5, 6, 7]
let nroBuscar = 3

function busquedaBinaria(arreglo, buscar) {
    let limiteBusqueda = arreglo.length -1
    let indiceInicio = 0

    while (indiceInicio <= limiteBusqueda) {
        const INDICEMITAD = Math.round((indiceInicio + limiteBusqueda) / 2)
        const ELEMENTOMEDIO = arreglo[INDICEMITAD]
        if (ELEMENTOMEDIO == buscar) {
            return INDICEMITAD;
        }
        if(ELEMENTOMEDIO > buscar){
            limiteBusqueda = INDICEMITAD - 1
        }else{
            indiceInicio = INDICEMITAD + 1
        }
    }
    return null;
}

let juegoBuscar = busquedaBinaria(arreglo,nroBuscar)
console.log(juegoBuscar)