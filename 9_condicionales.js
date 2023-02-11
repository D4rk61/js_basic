// Condicionales en js, para que nuestro programa tenga logica

var user = 17

if (user <= 17) {
    console.log("El usuario por su edad aun no puede votar")
} else if (user == 18) {
    console.log("Es tu primera vez que votas!!")
} else {
    console.log("Puede ingresar!")
}

// Operador "terneario"

var condicion1 = user == 18 ? true : false;
console.log(condicion1)