//! Funcion constructora en js, creacion de objetos mas automatizada, en resumen crearemos un molde y de alli sacaremos los objetos especificos

//* Creacion de una funcion constructora

function auto(marca, modelo, año, color="") {
    this.marca = marca
    this.modelo = modelo
    this.año = año
    this.color = color  // Parametros que pasare a un futuro
}


// Creacion del primer auto despues del molde

var autoNuevo = new auto("Toyota", "Corolla", 2005, "Negro") // Generacion de una instancia con la palabtra "new"

console.log(autoNuevo)

console.log("\n")
var auto2 = new auto("Audi", "Max", 2019, "Rojo")
console.log(auto2)

var auto3 = new auto("fgfg", "fdfd", 1002)
console.log(auto3) 