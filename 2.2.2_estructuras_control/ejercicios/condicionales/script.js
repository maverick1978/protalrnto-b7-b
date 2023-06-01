// Ejercicio 1: Verificar belleza
function verificarBelleza() {
    var respuesta = prompt("¿Eres bellisimo/a?");
    if (respuesta.toLowerCase() === "sí") {
        alert("Ciertamente");
    } else if (respuesta.toLowerCase() === "no") {
        alert("No te creo");
    }
}

// Ejercicio 2: Verificar divisibilidad entre 2
function verificarDivisibilidad() {
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
        alert(numero + " es divisible entre 2");
    } else {
        alert(numero + " no es divisible entre 2");
    }
}

// Ejercicio 3: Verificar paridad
function verificarParidad() {
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
        alert(numero + " es un número par");
    } else {
        alert(numero + " es un número impar");
    }
}

// Ejercicio 4: Verificar número de cliente
function verificarNumeroCliente() {
    var numeroCliente = parseInt(prompt("Ingresa un número de cliente:"));
    if (numeroCliente === 1000) {
        alert("Ganaste un premio");
    } else {
        alert("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
    }
}

// Ejercicio 5: Determinar el número menor
function determinarNumeroMenor() {
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (numero1 < numero2) {
        alert(numero1 + " es menor que " + numero2);
    } else {
        alert(numero2 + " es menor que " + numero1);
    }
}

// Ejercicio 6: Determinar el número mayor
function determinarNumeroMayor() {
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    var numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    if (numero1 > numero2 && numero1 > numero3) {
        alert(numero1 + " es el número mayor");
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert(numero2 + " es el número mayor");
    } else {
        alert(numero3 + " es el número mayor");
    }
}

// Ejercicio 7: Imprimir mensaje según el día de la semana
function imprimirMensajeDiaSemana() {
    var diaSemana = prompt("Ingresa un día de la semana:").toLowerCase();
    if (diaSemana === "lunes") {
        alert("¡Es lunes!");
    } else if (diaSemana === "viernes") {
        alert("¡Es viernes!");
    } else if (diaSemana === "sábado" || diaSemana === "domingo") {
        alert("¡Es fin de semana!");
    } else {
        alert("Es otro día de la semana");
    }
}

// Ejercicio 8: Verificar calificación
function verificarCalificacion() {
    var calificacion = parseFloat(prompt("Ingresa tu calificación (entre 1 y 10):"));
    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert("Reprobado");
        } else if (calificacion >= 6 && calificacion <= 8) {
            alert("Regular");
        } else if (calificacion === 9) {
            alert("Bien");
        } else {
            alert("Excelente");
        }
    } else {
        alert("La calificación ingresada no está en el rango válido (1-10).");
    }
}

// Ejercicio 9: Calcular precio del helado con topping
function calcularPrecioHelado() {
    var costoBase = 50;
    var topping = prompt("Elige un topping: oreo, KitKat, brownie");
    var precioTopping = 0;
    switch (topping.toLowerCase()) {
        case "oreo":
            precioTopping = 10;
            break;
        case "kitkat":
            precioTopping = 15;
            break;
        case "brownie":
            precioTopping = 20;
            break;
        default:
            alert("No tenemos ese topping, lo sentimos.");
            break;
    }
    var precioTotal = costoBase + precioTopping;
    alert("El precio del helado con " + topping + " es de $" + precioTotal);
}

// Ejercicio 10: Calcular costo y total del curso
function calcularCostoCurso() {
    var nivel = prompt("Elige un nivel de curso: course, carrera, master");
    var costoMensual = 0;
    var duracion = 0;
    switch (nivel.toLowerCase()) {
        case "course":
            costoMensual = 4999;
            duracion = 2;
            break;
        case "carrera":
            costoMensual = 3999;
            duracion = 6;
            break;
        case "master":
            costoMensual = 2999;
            duracion = 12;
            break;
        default:
            alert("Nivel de curso no válido.");
            return;
    }
    var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)");
    var descuento = 0;
    switch (beca.toLowerCase()) {
        case "facebook":
            descuento = 0.2;
            break;
        case "google":
            descuento = 0.15;
            break;
        case "jesua":
            descuento = 0.5;
            break;
    }
    var costoDescuento = costoMensual - (costoMensual * descuento);
    var costoTotal = costoDescuento * duracion;
    alert("El costo mensual con descuento es de $" + costoDescuento.toFixed(2));
    alert("El costo total del curso es de $" + costoTotal.toFixed(2));
}

// Ejercicio 11: Calcular costo y total del curso (versión simplificada)
function calcularCostoCursoSimplificado() {
    var nivel = prompt("Elige un nivel de curso: course, carrera, master");
    var costoMensual = 0;
    var duracion = 0;
    switch (nivel.toLowerCase()) {
        case "course":
            costoMensual = 4999;
            duracion = 2;
            break;
        case "carrera":
            costoMensual = 3999;
            duracion = 6;
            break;
        case "master":
            costoMensual = 2999;
            duracion = 12;
            break;
        default:
            alert("Nivel de curso no válido.");
            return;
    }
    var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)");
    var descuento = 0;
    switch (beca.toLowerCase()) {
        case "facebook":
            descuento = 0.2;
            break;
        case "google":
            descuento = 0.15;
            break;
        case "jesua":
            descuento = 0.5;
            break;
    }
    var costoDescuento = costoMensual - (costoMensual * descuento);
    var costoTotal = costoDescuento * duracion;
    alert("El costo mensual con descuento es de $" + costoDescuento.toFixed(2));
    alert("El costo total del curso es de $" + costoTotal.toFixed(2));
}

// Ejercicio 12: Calcular total a pagar por distancia recorrida en un vehículo
function calcularTotalAPagar() {
    var vehiculo = prompt("Ingresa el tipo de vehículo (coche, moto, autobús)");
    var precioKilometro = 0;
    switch (vehiculo.toLowerCase()) {
        case "coche":
            precioKilometro = 0.20;
            break;
        case "moto":
            precioKilometro = 0.10;
            break;
        case "autobús":
            precioKilometro = 0.50;
            break;
        default:
            alert("Tipo de vehículo no válido.");
            return;
    }
    var kmsRecorridos = parseFloat(prompt("Ingresa los kilómetros recorridos:"));
    var litrosConsumidos = parseFloat(prompt("Ingresa los litros consumidos:"));
    var extra = litrosConsumidos <= 100 ? 5 : 10;
    var totalAPagar = (precioKilometro * kmsRecorridos) + extra;
    alert("El total a pagar es de $" + totalAPagar.toFixed(2));
}
