/* Scope dentro de variables en js */


var global = "Soy una variable global!"


function prueba() {
    var local = "Soy una variable local :(" //! Si me llaman fuera de la funcion no funciono :(
}


console.log("Imprimiendo la primera variable:\n", global)

//console.log("Imprimiendo la var local:\n", local) //! Nos dara error al descomentar esto