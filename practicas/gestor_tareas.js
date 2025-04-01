const prompt = require("prompt-sync")({sigint: true });
let tareas = [];
let categoriasnombres = [
    "Trabajo",
    "Personal",
    // agregado de categorias
];

// funcion de categorias
function mostrarcategorias(){
    console.log("Categorias existentes: ");
    categoriasnombres.forEach(function(categoria, indice){
        console.log(indice + ": " + categoria);
    });
}

// funcion de carga nuevas categorias
function agregarcategoria(nombrecategoria){
    categoriasnombres.push(nombrecategoria);
    console.log("categoria " + nombrecategoria + " agregado correctamente");
}

//funcion para agregar una nueva tarea al array
function agregartarea(nombrerecibido, fechalimiterecibida = null){
    tareas.push({nombre : nombrerecibido , completada : false , fechalimite : fechalimiterecibida });
    console.log("tarea agregada");
}

//funcion para eliminar tarea
function eliminartarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice, 1);
        console.log("tarea eliminada");
    }else{
        console.log("index wrong, please enter a correct one");
    }
}

//funcion para marcar tarea completada
function completartarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("task done");
    }else{
        console.log("index wrong");
    }
}

//afuncion para modificar una tarea
function modtarea(indice, nuevonombre, nuevafechalimite = null){
    if(indice >= 0 && indice < tasks.length){
        tareas[indice].nombre = nuevonombre;
        if(nuevafechalimite !== null){
            tareas[indice].fechalimite = nuevafechalimite;
        }
        console.log("Task modified");
    }else{
        console.log("index wrong, please enter a correct one");
    }

}

//funcion para mostrar el menu
function showMenu(){
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
        showMenu();
        opcion = parseInt(prompt("Ingrese la opción deseada: "));

        switch (opcion){
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregartarea(nombreTareaNueva);
                break;

            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminartarea(indiceAEliminar);
                break;

            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea completada: "));
                completartarea(indiceACompletar);
                break;

            case 4:
                let indice = parseInt(prompt("Ingrese el indice a modificar: "));
                let nuevonombre = prompt("Ingrese el nuevo nombre de la tarea: ");
                modtarea(indice, nuevonombre);
                break;

            case 5:
                console.log(" Tareas ");
                console.log(tareas);
                break;

            case 6:
                mostrarcategorias();
                break;

            case 7:
                let nuevacategoria = prompt("Ingrese el nombre de la nueva categoria: ");
                agregarcategoria(nuevacategoria);
                break;

            default:
                console.log("opcion inválida");
                break;
        }
    }
}

UserApp();