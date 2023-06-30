// function precalentarHorno(precalentar) {
//   console.log("se ha encendido el horno.......");
//   setTimeout(function() {
//     console.log("El horno empezo a precalentarse");
//     precalentar();
//   }, 10000);
// }

// function mezclarIngredientes(mezclar) {
//   console.log("Mezclando los ingredientes...");
//   setTimeout(function() {
//     console.log("Ingredientes mezclados.");
//     mezclar();
//   }, 5000);
// }

// function mostrarIngredientes(ingredientes, listaIngredientes) {
//   console.log("Listos para el pastel?, comencemos");
//   precalentarHorno(function() {
//     var tiempo = 0;
//     console.log("cargando ingredientes...");
//     ingredientes.forEach(function(ingrediente) {
//       setTimeout(function() {
//         console.log(ingrediente);
//       }, tiempo);
//       tiempo += 1000;
//     });
//     setTimeout(listaIngredientes, tiempo);
//   });
// }

// function hornearPastel(horno) {
//   console.log("Metiendo el pastel al horno...");
//   setTimeout(function() {
//     console.log("¡Haz creado un pastel!");
//     horno();
//   }, 10000);
// }

// var ingredientes = ["Harina", "Azúcar", "Huevos", "Leche", "Mantequilla"];

// mostrarIngredientes(ingredientes, function() {
//   hornearPastel(function() {
//     console.log("El pastel está listo para ser servido.");
//   });
// });


function precalentarHorno() {
  return new Promise((resolve) => {
    let porcentajeCalor = 0;
    console.log("Se ha encendido el horno.......");
    const interval = setInterval(() => {
      porcentajeCalor += 20;
    }, 10);

    setTimeout(function() {
      clearInterval(interval);
      console.log("Alista tus ingredientes.");
      resolve();
    }, 100);
  });
}

function mezclarIngredientes() {
  return new Promise((resolve) => {
    console.log("Mezclando los ingredientes...");
    setTimeout(function() {
      console.log("ten paciencia , ya casi esta listo");
      resolve();
    }, 5000);
  });
}

function mostrarIngredientes(ingredientes) {
  return new Promise((resolve) => {
    console.log("Listos para el pastel?, comencemos");
    precalentarHorno().then(() => {
      let porcentajeCalor = 0;
      let tiempo = 0;
      console.log("Cargando ingredientes...");
      mezclarIngredientes();
      ingredientes.forEach(function(ingrediente, index) {
        setTimeout(function() {
          console.log(ingrediente);
          porcentajeCalor = (index + 1) * 20;
          console.log(`El horno está al ${porcentajeCalor}% de calentamiento.`);
          if (index === ingredientes.length - 1) {
            resolve();
          }
        }, tiempo);
        tiempo += 1000;
      });
    });
  });
}

function hornearPastel() {
  return new Promise((resolve) => {
    console.log("Metiendo el pastel al horno...");
    setTimeout(function() {
      console.log("¡Haz creado un pastel!");
      resolve();
    }, 10000);
  });
}

async function hacerPastel() {
  var ingredientes = ["Harina", "Azúcar", "Huevos", "Leche", "Mantequilla"];

  await mostrarIngredientes(ingredientes);
  await hornearPastel();
  console.log("El pastel está listo para ser servido.");
}

hacerPastel();
