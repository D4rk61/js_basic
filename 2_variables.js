//! Uso y creacion de las variables dentro de js

/* Son "cajas" que almacenan datos, son similares a las que creamos en python */

var variable1

variable1 = 10;

console.log(variable1);

variable1 = "Hola";
console.log(variable1) //! Tipado debil como en python


/* Variables en una lista */

var elementos = ["Computadora", "Celular"];
console.log("Creando una variable en forma de lista: \n", elementos)


var persona = {
    nombre: "Jose",
    edad: 17,
    lenguaje: "Python"
}

console.log("Creacion de variable como un objeto: \n", persona)