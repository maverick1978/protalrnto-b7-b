// URL de la API de Pokémon
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Obtener el contenedor donde se mostrará la información
const infoContainer = document.getElementById('pokemon-info');

// Función para obtener información de un Pokémon por su ID
async function getPokemonById(id) {
  try {
    // Realizar una solicitud GET a la API de Pokémon
    const response = await fetch(apiUrl + id);
    const pokemonData = await response.json();

    // Crear elementos HTML para mostrar los datos del Pokémon
    const nameElement = document.createElement('p');
    nameElement.textContent = 'Nombre: ' + pokemonData.name;

    const heightElement = document.createElement('p');
    heightElement.textContent = 'Altura: ' + pokemonData.height;

    const weightElement = document.createElement('p');
    weightElement.textContent = 'Peso: ' + pokemonData.weight;

    // Limpiar el contenedor antes de mostrar los nuevos datos
    infoContainer.innerHTML = '';

    // Agregar los elementos al contenedor
    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(heightElement);
    infoContainer.appendChild(weightElement);

  } catch (error) {
    console.error('Error al obtener información del Pokémon:', error.message);
  }
}

// Llamar a la función para obtener información del Pokémon con ID 1
getPokemonById(1);
