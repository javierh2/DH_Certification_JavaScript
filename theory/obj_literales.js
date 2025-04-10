// crear objeto //
let persona = {
    nombre : "Javier",
    apelido : "MoraBaiz",
    edad : 31,
    gustos : ["bjj", "code"],
    saludar : function(){
        return "hola, estoy con JS y soy " + this.nombre;
    }
};
persona.nombre = "Juan";
// acceder a las propiedades de un obj //
console.log(persona.nombre,persona.apelido, "tiene",persona.edad,"años y le gusta",persona.gustos[0],"y hacer",persona.gustos[1])

// cargar una nueva propiedad y modificar otra //
persona.moto = "Honda"
persona.edad = 30
// console.log(persona)

// eliminar una nueva propiedad //
delete persona.edad
// console.log(persona)

// acceder a un metodo de un obj //
let saludo = persona.saludar()
// console.log(saludo)

// this .ayuda en acceder a propiedades//
console.log(saludo)
// console.log(saludo)
