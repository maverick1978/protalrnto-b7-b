// 1. Pregunta "¿Eres bellisimo/a?"

let respuesta = prompt("¿Eres bellisimo/a?");

if (respuesta.toLowerCase() === "si") {
    alert("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
    alert("No te creo");
} else {
    alert("Respuesta inválida");
}

// 2. Número divisible entre 2

let numero = parseInt(prompt("Ingresa un número:"));

if (isNaN(numero)) {
    alert("No has ingresado un número válido");
} else {
    if (numero % 2 === 0) {
        alert(numero + " es divisible entre 2");
    } else {
        alert(numero + " no es divisible entre 2");
    }
}

// 3. Par o impar
let numeroS = parseInt(prompt("Ingresa un número:"));
if (numeroS % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}

// 4. Número de cliente
let numeroCliente = parseInt(prompt("Ingresa un número de cliente:"));
if (numeroCliente === 1000) {
    alert("Ganaste un premio");
} else {
    alert("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
}

// 5. Número menor
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
if (numero1 < numero2) {
    alert(numero1 + " es menor que " + numero2);
} else {
    alert(numero2 + " es menor que " + numero1);
}

// 6. Número mayor
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));
let mayor = num1;
if (num2 > mayor) {
    mayor = num2;
}
if (num3 > mayor) {
    mayor = num3;
}
alert("El número mayor es: " + mayor);

// 7. Día de la semana
let dia = prompt("Ingresa un día de la semana:").toLowerCase();
if (dia === "lunes") {
    alert("Hoy es lunes.");
} else if (dia === "viernes") {
    alert("Hoy es viernes.");
} else if (dia === "sábado" || dia === "domingo") {
    alert("Hoy es fin de semana.");
} else {
    alert("Hoy no es ni lunes, ni viernes, ni fin de semana.");
}

// 8. Calificación
let calificacion = parseInt(prompt("Ingresa tu calificación (1-10):"));
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

// 9. Precio del helado con topping
let precioBase = 50;
let topping = prompt("Elige un topping: oreo, KitKat, brownie");
let precioTotal;
switch (topping) {
    case "oreo":
        precioTotal = precioBase + 10;
        break;
    case "kitkat":
        precioTotal = precioBase + 15;
        break;
    case "brownie":
        precioTotal = precioBase + 20;
        break;
    default:
        alert("No tenemos ese topping, lo sentimos.");
        precioTotal = precioBase;
}
alert("El precio del helado es: " + precioTotal + " MXN.");

// 10. Precio del programa educativo
let opcion = prompt("Elige una opción: Course, Carrera o Master").toLowerCase();
let costoMensual;
let duracion;
switch (opcion) {
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
        alert("Opción inválida.");
        break;
}

let beca = prompt("¿Tienes alguna beca? Facebook, Google o Jesua").toLowerCase();
let descuento = 0;
switch (beca) {
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

let precioFinal = costoMensual * (1 - descuento);
let precioTotalCurso = precioFinal * duracion;
alert("El precio mensual con descuento es: " + precioFinal + " MXN.");
alert("El precio total del curso es: " + precioTotalCurso + " MXN.");

// 11. Cálculo del total a pagar por un vehículo
let vehiculo = prompt("Ingresa el tipo de vehículo: coche, moto o autobús").toLowerCase();
let precioKilometro;
switch (vehiculo) {
    case "coche":
        precioKilometro = 0.20;
        break;
    case "moto":
        precioKilometro = 0.10;
        break;
    case "autobús":
        precioKilometro = 0.5;
        break;
    default:
        alert("Vehículo inválido.");
        break;
}

let kmsRecorridos = parseInt(prompt("Ingresa la distancia recorrida en kilómetros:"));
let litrosConsumidos = parseInt(prompt("Ingresa la cantidad de litros consumidos:"));
let costoTotal = precioKilometro * kmsRecorridos;
if (litrosConsumidos > 100) {
    costoTotal += 10;
} else {
    costoTotal += 5;
}
alert("El total a pagar es: " + costoTotal + " MXN.");
