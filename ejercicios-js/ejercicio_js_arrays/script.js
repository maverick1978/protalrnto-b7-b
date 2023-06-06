function generarNumerosAleatorios() {
    var numeros = [];

    for (var i = 0; i < 10; i++) {
        var numero = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 100
        numeros.push(numero); // Agrega el número al array
    }

    console.log(numeros);
}

function convertirStringAArray() {
    var str = prompt("Ingrese varias palabras separadas por coma:"); // Abre un cuadro de diálogo para que el usuario ingrese el string
    var palabras = str.split(","); // Divide el string en un array utilizando la coma como separador

    console.log(palabras);
}

function ordenarYMostrarMinMax() {
    var numeros = [10, 40, 30, 20, 15, 5];

    // Ordena el arreglo de menor a mayor
    var numerosOrdenados = numeros.sort(function (a, b) {
        return a - b;
    });

    console.log("Arreglo ordenado:", numerosOrdenados);
    console.log("Número menor:", numerosOrdenados[0]);
    console.log("Número mayor:", numerosOrdenados[numerosOrdenados.length - 1]);
}
