// Otro uso de while en js

contador = 0
while (true) {
    console.log(contador)
    contador++
    if (contador == 10+1) {
        console.log("\nContador llego a 10")
        break
    }
}

console.log("\nUso de un ciclo \"while\"")
var list = [1, 2, 3, 4, 5]
list.forEach(function (i) {
    console.log(i)
})