//! Ciclos o bucles en js
var estudiantes = ["Jose", "Miguel", "Maria", "Cindy"]

// Tarea

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`)
}

for (var i = 0; i < estudiantes.length; i++) { // Mientras i sera menor a la longitud de la longitud del "array"
    console.log(estudiantes[i])
}