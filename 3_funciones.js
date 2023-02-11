/* Uso y creacion de una variable en js */

//! Declarativas

function miFuncion() {
    console.log("[1] Soy la funcion numero1");
}

//! Expresion, lo usaremos por medio de variable
var mifuncion2 = function () {
    console.log("[2] Soy una funcion creada por variable")  // -> Funciones anonimas
}


//* Llamar o invocar a las funciones
miFuncion();

mifuncion2()

//! Creacion de una funcion usando parametros

function funcionParametros(var1, var2) {
    result = var1 + var2
    console.log("La suma de estos dos valores es:", result)
}

funcionParametros(20, 10)