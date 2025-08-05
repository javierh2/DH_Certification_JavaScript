// definicion de una clase
class Person {
    constructor(name,age) { // constructor para inicializar instancias de la clase
        this.name = name;
        this.age = age
    }
    // metodo de la clase para obt informacion de la persona cuando se creen instancias
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

// creacion de instancias(objetos) de la clase
const person1 = new Person("juan",25)
const person2 = new Person("javier",20)

console.log(person1.getInfo())
console.log(person2.getInfo())