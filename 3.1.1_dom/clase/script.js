//alert intro dom

//let miTitulo = document.getElementById("miTitulo");
//console.log(miTitulo);
//let body = getElementBytagName("body");
function mostrarmensa() {
    let hiTitulo = document.getElementById("miTitulo");
    hiTitulo.innerHTML = "Texto Modificado o:";
    hiTitulo.setAttribute("class", "texto-modificado");
}

function mostrarmensaje() {
    let hiTitulo = document.getElementById("miTitulo");
    hiTitulo.setAttribute("class", "otro-modificado");
    hiTitulo.innerHTML = "Texto Modificado otra vez";
}

function crearImagen() {
    let divpadre = document.getElementById("contenedorImagenes");
    let nuevoNodoImagen = document.createElement("img");
    nuevoNodoImagen.setAttribute("src", "imagenes/imagen1.jpg");
    divpadre.appendChild(nuevoNodoImagen);
}
console.log("");