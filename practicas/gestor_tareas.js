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
    console.log("categoria " + nombreCategoria + " agregado correctamente");
}

// funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){
    tareas.push({nombre : nombreRecibido , completada : false , fechaLimite : fechaLimiteRecibida });
    console.log("tarea agregada");
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

// funcion para modificar una tarea específica
function modTarea(indice, nuevoNombre, nuevaFechaLimite = null){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre;
        if(nuevaFechaLimite !== null){
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        console.log("tarea modificada exitosamente");
    }else{
        console.log("indice erroneo, ingrese un indice de tarea existente");
    }
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
                let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");
                modTarea(indice, nuevoNombre);
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

            default:
                console.log("App de notas se despide");
                break;
        }
    }
}

UserApp();