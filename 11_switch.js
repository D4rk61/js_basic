//! Sentencia "switch" en js
console.clear()
var validar = 1

// Esta sentecia funciona por casos.

switch (validar) {
    case 1:
        console.log("Soy el numero 1") 
        break       //! Importante a agregar para que no pase al siguiente caso 
    
    case 2:
        console.log("Soy el numero 2")
        break
    
    case 3:
        console.log("Soy el numero 3")
        break
    
    default:
        console.log("\nEn caso de que no se cumpla ninguna condicion")
}