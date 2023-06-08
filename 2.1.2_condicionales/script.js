// Ejercicio 1
function ejercicio1() {
    let respuesta = prompt('¿Eres bellisimo/a?');
    if (respuesta === 'si') {
        alert('Ciertamente');
    } else if (respuesta === 'no') {
        alert('No te creo');
    } else {
        alert('Respuesta inválida');
    }
}

// Ejercicio 2
function ejercicio2() {
    let numero = parseInt(prompt('Ingresa un número'));
    if (numero % 2 === 0) {
        alert(numero + ' es divisible entre 2');
    } else {
        alert(numero + ' no es divisible entre 2');
    }
}

// Ejercicio 3
function ejercicio3() {
    let numero = parseInt(prompt('Ingresa un número'));
    if (numero % 2 === 0) {
        alert('El número es par');
    } else {
        alert('El número es impar');
    }
}

// Ejercicio 4
function ejercicio4() {
    let numeroCliente = parseInt(prompt('Ingresa el número de cliente'));
    if (numeroCliente === 1000) {
        alert('Ganaste un premio');
    } else {
        alert('Lo sentimos, sigue participando');
    }
}

// Ejercicio 5
function ejercicio5() {
    let numero1 = parseFloat(prompt('Ingresa el primer número'));
    let numero2 = parseFloat(prompt('Ingresa el segundo número'));
    if (numero1 < numero2) {
        alert(numero1 + ' es menor que ' + numero2);
    } else if (numero1 > numero2) {
        alert(numero2 + ' es menor que ' + numero1);
    } else {
        alert('Los números son iguales');
    }
}

// Ejercicio 6
function ejercicio6() {
    let numero1 = parseFloat(prompt('Ingresa el primer número'));
    let numero2 = parseFloat(prompt('Ingresa el segundo número'));
    let numero3 = parseFloat(prompt('Ingresa el tercer número'));
    if (numero1 > numero2 && numero1 > numero3) {
        alert(numero1 + ' es el número mayor');
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert(numero2 + ' es el número mayor');
    } else if (numero3 > numero1 && numero3 > numero2) {
        alert(numero3 + ' es el número mayor');
    } else {
        alert('Hay números iguales');
    }
}

// Ejercicio 7
function ejercicio7() {
    let dia = prompt('Ingresa un día de la semana');
    if (dia === 'lunes') {
        alert('Hoy es lunes');
    } else if (dia === 'viernes') {
        alert('Hoy es viernes');
    } else if (dia === 'sábado' || dia === 'domingo') {
        alert('Es fin de semana');
    } else {
        alert('No es un día válido');
    }
}

// Ejercicio 8
function ejercicio8() {
    let calificacion = parseInt(prompt('Ingresa una calificación (entre 1 y 10)'));
    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert('Reprobado');
        } else if (calificacion >= 6 && calificacion <= 8) {
            alert('Regular');
        } else if (calificacion === 9) {
            alert('Bien');
        } else {
            alert('Excelente');
        }
    } else {
        alert('Calificación inválida');
    }
}

// Ejercicio 9
function ejercicio9() {
    let heladoBase = 50;
    let topping = prompt('Elige un topping: oreo, KitKat, brownie');
    let precioTopping = 0;
    switch (topping) {
        case 'oreo':
            precioTopping = 10;
            break;
        case 'KitKat':
            precioTopping = 15;
            break;
        case 'brownie':
            precioTopping = 20;
            break;
        default:
            alert('No tenemos este topping, lo sentimos.');
            break;
    }
    let precioTotal = heladoBase + precioTopping;
    alert('El precio del helado es ' + precioTotal + ' MXN');
}

// Ejercicio 10
function ejercicio10() {
    let nivel = prompt('Elige un nivel: Course, Carrera, Master');
    let costoMensual = 0;
    switch (nivel) {
        case 'Course':
            costoMensual = 4999;
            break;
        case 'Carrera':
            costoMensual = 3999;
            break;
        case 'Master':
            costoMensual = 2999;
            break;
        default:
            alert('Nivel inválido');
            break;
    }
    let beca = prompt('¿Cuentas con alguna beca? (Facebook, Google, Jesua)');
    let descuento = 0;
    switch (beca) {
        case 'Facebook':
            descuento = 0.2;
            break;
        case 'Google':
            descuento = 0.15;
            break;
        case 'Jesua':
            descuento = 0.5;
            break;
        default:
            alert('Beca inválida');
            break;
    }
    let precioMensualDescuento = costoMensual * (1 - descuento);
    let duracion = 0;
    switch (nivel) {
        case 'Course':
            duracion = 2;
            break;
        case 'Carrera':
            duracion = 6;
            break;
        case 'Master':
            duracion = 12;
            break;
    }
    let precioTotal = precioMensualDescuento * duracion;
    alert('El precio mensual con descuento es ' + precioMensualDescuento + ' MXN');
    alert('El precio total del curso es ' + precioTotal + ' MXN');
}

// Ejercicio 11
function ejercicio11() {
    let nivel = prompt('Elige un nivel: Course, Carrera, Master');
    let costoMensual = 0;
    switch (nivel) {
        case 'Course':
            costoMensual = 4999;
            break;
        case 'Carrera':
            costoMensual = 3999;
            break;
        case 'Master':
            costoMensual = 2999;
            break;
        default:
            alert('Nivel inválido');
            break;
    }
    let beca = prompt('¿Cuentas con alguna beca? (Facebook, Google, Jesua)');
    let descuento = 0;
    switch (beca) {
        case 'Facebook':
            descuento = 0.2;
            break;
        case 'Google':
            descuento = 0.15;
            break;
        case 'Jesua':
            descuento = 0.5;
            break;
        default:
            alert('Beca inválida');
            break;
    }
    let precioMensualDescuento = costoMensual * (1 - descuento);
    let duracion = 0;
    switch (nivel) {
        case 'Course':
            duracion = 2;
            break;
        case 'Carrera':
            duracion = 6;
            break;
        case 'Master':
            duracion = 12;
            break;
    }
    let precioTotal = precioMensualDescuento * duracion;
    alert('El precio mensual con descuento es ' + precioMensualDescuento + ' MXN');
    alert('El precio total del curso es ' + precioTotal + ' MXN');
}

// Ejercicio 12
function ejercicio12() {
    let vehiculo = prompt('Elige un vehículo: coche, moto, autobús');
    let precioKilometro = 0;
    switch (vehiculo) {
        case 'coche':
            precioKilometro = 0.2;
            break;
        case 'moto':
            precioKilometro = 0.1;
            break;
        case 'autobús':
            precioKilometro = 0.5;
            break;
        default:
            alert('Vehículo inválido');
            break;
    }
    let distancia = parseFloat(prompt('Ingresa la distancia recorrida (en kilómetros)'));
    let litrosConsumidos = parseFloat(prompt('Ingresa los litros de combustible consumidos'));
    let extra = 0;
    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
        extra = 5;
    } else if (litrosConsumidos > 100) {
        extra = 10;
    }
    let totalPagar = precioKilometro * distancia + extra;
    alert('El total a pagar es ' + totalPagar);
}
