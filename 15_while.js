
var data = ["Jose", "Miguel", "Maria", "Cindy"]

function saludar(esudiante) {
    console.log(`Hola ${esudiante}`);
}

while(data.length > 0) {
    var esudiante = data.shift()
    saludar(esudiante)
}