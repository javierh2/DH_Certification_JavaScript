const prompt = require("prompt-sync")({sigint: true });

// arrays de tareas creadas //
let tareas = [];

// agregado de categorias
let categoriasNombres = [
    "Trabajo",
    "Personal",
];

// funcion de categorias
function mostrarCategorias(){
    console.log("Categorias existentes: ");
    categoriasNombres.forEach(function(categoria, indice){
        console.log(indice + ": " + categoria);
    });
}

// funcion de carga nuevas categorias
function agregarCategoria(nombreCategoria){
    categoriasNombres.push(nombreCategoria);
    console.log("categoria " + nombreCategoria + " agregada correctamente");
}

// funcion para agregar una nueva tarea al array y luego vincular una tarea a una categoria
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){
    mostrarCategorias()
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria que se vincula con la tarea: "))
    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) {
        tareas.push({nombre : nombreRecibido , completada : false , fechaLimite : fechaLimiteRecibida, categorias : numeroCategoria });
        console.log("tarea agregada");
    }else{
        console.log("Numero de categoria incorrecto!")
    }
}

// funcion para eliminar tarea
function eliminarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice, 1);
        console.log("tarea eliminada");
    }else{
        console.log("indice erroneo, ingrese un indice de tarea existente");
    }
}

// funcion para marcar tarea completada
function completarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("tarea completada");
    }else{
        console.log("indice erroneo, ingrese un indice de tarea existente");
    }
}

// funcion para modificar una tarea específica y modificar la categoria
function modTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumCategoria){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
        tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite
        tareas[indice].categoria = nuevoNumCategoria !== undefined ? nuevoNumCategoria : tareas[indice].categoria
        console.log("tarea modificada exitosamente");
    }else{
        console.log("indice erroneo, ingrese un indice de tarea existente");
    }
}

// funcion que muestra todas la tareas no completadas
function mostrarTareasNoCompletadas(){
    console.log("Tareas no completadas: ")
    tareas.forEach(function(tarea){
        if (!tarea.completada){
            console.log("Nombre: " + tarea.nombre + "Categoria: " + categoriasNombres[tarea.categoria])
        }
    });
}

//funcion que filtra tareas por categoria
function filtrarTareasPorCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria
    })
    return tareasFiltradas
}

// funcion que muestra cantidad de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasCategorias = filtrarTareasPorCategoria(numeroCategoria)
    let tareasCompletadas = tareasCategorias.reduce(function(contador, tarea){
        return tarea.completada ? contador +1 : contador
    },0 )
    let tareasEnTotal = tareasCategorias.length
    console.log("Tareas completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + "tareas!")
}



//funcion para mostrar el menu
function mostrarMenu(){
    console.log("-- Menu --");
    console.log("1- Agregar tarea");
    console.log("2- Eliminar tarea");
    console.log("3- Marcar tarea completada");
    console.log("4- Modificar tarea");
    console.log("5- Mostrar las tareas");
    console.log("6- Ver las categorias");
    console.log("7- Agregar nueva categoria");
    console.log("8- Filtrar tareas por categoria");
    console.log("9- Visualizar cantidad de tareas completadas por categorias");
    console.log("10- Visualizar cantidad de tareas NO completadas");
    console.log("0- Salir");
}


//funcion del usuario
function UserApp(){
    let opcion = -1;

    while(opcion != 0){
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opción deseada: "));

        switch (opcion){
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;

            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea completada: "));
                completarTarea(indiceACompletar);
                break;

            case 4:
                let indice = parseInt(prompt("Ingrese el indice a modificar: "));
                if (indice >= 0 && indice < tareas.length) {
                    let opcion = parseInt(prompt("que propiedad desea modificar?: 1.Nombre, 2.Fecha límite, 3.Numero de categoria"))
                    switch (opcion) {
                        case 1:
                            let = nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea")
                            modTarea(indice,nuevoNombre)
                            break;
                        case 2:
                            let nuevaFecha = prompt("Ingrese la nueva fecha límite para su tarea: ")
                            modTarea(indice,undefined,nuevaFecha)
                            break;
                        case 3:
                            let nuevoLugarCategoria = parseInt(prompt("Ingrese nuevo numero de categoria para mover la tarea: "))
                            if (nuevoLugarCategoria >= 0 && nuevoLugarCategoria < categoriasNombres.length) {
                                modTarea(indice,undefined,undefined,nuevoLugarCategoria)
                            }
                            break;
                        default:
                            break;
                    }
                }else{
                    console.log("Indice de tarea incorrecto")
                }
                break;

            case 5:
                console.log(" Tareas ");
                console.log(tareas);
                break;

            case 6:
                mostrarCategorias();
                break;

            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria: ");
                agregarCategoria(nuevaCategoria);
                break;

            case 8 :
                mostrarCategorias()
                let nroCategoria = parseInt(prompt("Ingrese el numero de categoria a filtrar"))
                let tareasFiltradas = filtrarTareasPorCategoria(nroCategoria)
                console.log("Tareas de la categoria: ")
                console.log(tareasFiltradas)
                break;

            case 9 :
                mostrarCategorias()
                let nroCateg = parseInt(prompt("Ingrese el numero de la categoria a visualizar: "))
                contarTareasCompletadasPorCategoria(nroCateg)
                break;

            case 10 :
                mostrarTareasNoCompletadas()
                break;

            default:
                console.log("App de notas se despide");
                break;
        }
    }
}

UserApp();