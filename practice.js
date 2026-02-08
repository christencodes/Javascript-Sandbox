`use strict`;

//*fetch is a function that reutnrs a promise - it's creating a promise under the hood, which permits the use of await

//input.value property is the input information
const input = document.getElementById("pokemon-name");
const submit = document.getElementById("submit");

const pokemonImage = document.getElementById("pokemon-image");
const pokemonID = document.getElementById("poke-id");
const pokemonName = document.getElementById("poke-name");
const pokemonType = document.getElementById("poke-type");
const pokemonHeight = document.getElementById("poke-height");
const heightValue = document.getElementById("height-value");
const pokemonWeight = document.getElementById("poke-weight");
const weightValue = document.getElementById("weight-value");
const pokemonDescription = document.getElementById("poke-description");

//POKemon details
//name
//order

const getPokemon = async (inputName) => {
  //make the call and wait
  //then we parse the data and wait

  try {
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`);

    const pokemonSpecies = fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${inputName}/`,
    );

    const [responsePoke, responseSpecies] = await Promise.all([
      pokemon,
      pokemonSpecies,
    ]);

    const [pokeData, speciesData] = await Promise.all([
      responsePoke.json(),
      responseSpecies.json(),
    ]);
    console.log(pokeData);
    //? Fill in data here
    console.log(speciesData);
    pokemonImage.src = pokeData.sprites.front_default;
    pokemonType.textContent = speciesData.genera.at(7).genus.split(" ").at(0);
    pokemonID.textContent = "No. " + pokeData.id;
    pokemonName.textContent = pokeData.name;
    weightValue.textContent = pokeData.weight + " lb";
    heightValue.textContent = pokeData.height;
    pokemonDescription.textContent = speciesData.flavor_text_entries
      .at(0)
      .flavor_text.replace(/\f/g, " ");
    console.log(pokemonDescription.textContent);
  } catch (error) {
    console.log(error);
    console.log("OH NOOOOOOO!");
  }
};

submit.addEventListener("click", () => {
  console.log("click");
  const userInput = input.value;
  getPokemon(userInput);
});

getPokemon("bulbasaur");
