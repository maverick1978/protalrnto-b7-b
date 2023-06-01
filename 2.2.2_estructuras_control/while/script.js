gastos = 2000000;
salario = 1160000;

do {
    let comida = 40000;
    gastos = gastos + comida;
    // gastos += comida;
    alert(`Uy, has gastado ${comida} en comida y ahora tu gastos son: ${gastos}`);
} while (gastos < salario);

const alumnosMali = ['Willinton', 'Laura', 'Jorge', 'Luis', 'Ricardo', 'Camila', 'Sandra', 'Moris'];

const alumnosAlfredo = [];

// index -> contador porque cuenta cuantas veces ejecutamos
for (let index = 0; index < alumnosMali.length; index++) {
    console.log(`Valor de index ${index}`);
    const element = array[index];
    console.log(element);
    alumnosAlfredo.push(element);
}

console.log(alumnosAlfredo);