// OTra continucacion de ciclos for


for (var i = 0; i < 10+1; i++) {
    console.log(`Numero de iteraciones: ${i}`)
}

// Iterando en objetos de una lista
console.log("\n\tPrimeras letras del abecedario")

var list = ["A", "B", "C", "D"]

list.forEach(function(element) {
    console.log(element);
});