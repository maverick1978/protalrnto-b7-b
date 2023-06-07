// Datos de productos y vendedores
var productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
];

var vendedores = [
    { nombre: "Juana", ventas: [] },
    { nombre: "Pedro", ventas: [] }
];

// Función para registrar una venta
function registrarVenta() {
    var productoSeleccionado = document.getElementById("producto").value;
    var cantidad = document.getElementById("cantidad").value;

    // Validar que se ingrese un valor numérico
    if (!esNumeroValido(cantidad)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    var vendedor = obtenerVendedorAleatorio();
    var producto = obtenerProductoPorNombre(productoSeleccionado);
    var venta = {
        producto: producto.nombre,
        cantidad: parseInt(cantidad),
        total: producto.precio * parseInt(cantidad)
    };

    vendedor.ventas.push(venta);

    actualizarVentasPorVendedor();
    actualizarEmpleadoDelMes();
}

// Función para verificar si un número es válido
function esNumeroValido(numero) {
    return !isNaN(numero) && numero !== "" && numero !== null;
}

// Función para obtener un vendedor aleatorio
function obtenerVendedorAleatorio() {
    var indice = Math.floor(Math.random() * vendedores.length);
    return vendedores[indice];
}

// Función para obtener un producto por nombre
function obtenerProductoPorNombre(nombre) {
    return productos.find(function (producto) {
        return producto.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

// Función para calcular la suma total de dinero recolectada por un vendedor
function calcularTotalVentas(vendedor) {
    var total = 0;
    vendedor.ventas.forEach(function (venta) {
        total += venta.total;
    });
    return total;
}

// Función para encontrar el vendedor con la mayor cantidad de ventas
function encontrarEmpleadoDelMes() {
    var vendedorDelMes = null;
    var maxVentas = 0;

    vendedores.forEach(function (vendedor) {
        var totalVentas = calcularTotalVentas(vendedor);
        if (totalVentas > maxVentas) {
            vendedorDelMes = vendedor;
            maxVentas = totalVentas;
        } else if (totalVentas === maxVentas) {
            vendedorDelMes = null; // Empate si hay más de un vendedor con la misma cantidad de ventas
        }
    });

    return vendedorDelMes;
}

// Función para actualizar la sección de ventas por vendedor en el HTML
function actualizarVentasPorVendedor() {
    var ventasPorVendedorHTML = "";

    vendedores.forEach(function (vendedor) {
        ventasPorVendedorHTML += "<h3>Vendedor: " + vendedor.nombre + "</h3>";
        ventasPorVendedorHTML += "<ul>";
        vendedor.ventas.forEach(function (venta) {
            ventasPorVendedorHTML += "<li>" + venta.producto + ": " + venta.cantidad + " unidades</li>";
        });
        ventasPorVendedorHTML += "</ul>";
        ventasPorVendedorHTML += "<p>Total: $" + calcularTotalVentas(vendedor) + "</p>";
    });

    document.getElementById("ventasPorVendedor").innerHTML = ventasPorVendedorHTML;
}

// Función para actualizar la sección de empleado del mes en el HTML
function actualizarEmpleadoDelMes() {
    var empleadoDelMes = encontrarEmpleadoDelMes();

    if (empleadoDelMes) {
        document.getElementById("empleadoDelMes").innerHTML = "<p>Empleado del Mes: " + empleadoDelMes.nombre + "</p>";
    } else {
        document.getElementById("empleadoDelMes").innerHTML = "<p>No hay un empleado del mes debido a un empate.</p>";
    }
}

