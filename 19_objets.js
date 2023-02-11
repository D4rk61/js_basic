// Programacion orientada a objetos POO

//! Sintaxis y creacion de un objeto

var miAuto = {
    marca: "Toyota",   
    color: "Negro",
    modelo: "Corolla",
    año: 2005,
    usado: true,
    
    resumen: function () {
        console.log(`\n\tResumen del carro[${this.marca}]: \nModelo: ${this.modelo} \nAño: ${this.año} \nCarro usado: ${this.usado}`)
    }

}; //* Le informamos que su valor es un objeto

console.log(miAuto) //! Imprimir la clase completa

// Traer un dato especifico de los objetos

console.log(`\nÈl año de mi auto es: ${miAuto.año}`) // -> Simplemente lo llamamos con un punto y el dato a solicitar

function solicitarResumen() {
    console.clear()
    console.log(miAuto.resumen())
}

solicitarResumen()