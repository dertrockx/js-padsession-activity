//Adrian Cueto
const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  // Starter code on how to use axios to get types
  // axios.get("https://pokeapi.co/api/v2/type/")
  // NOTE: don't forget to use a try-catch block
  try {
    let pokemonType = await axios.get("https://pokeapi.co/api/v2/type/") // waits for the data to be gathered
    let pokemonTypeResults = pokemonType.data.results // stores the array of the pokemon types
    console.log("---Print pokemon types (async-await)---")
    for (let i = 0; i < pokemonType.data.count; i++) { // for loop for printing
      console.log(pokemonTypeResults[i].name)
    }
  } catch (error) { //catches the error
    console.log(error.message) //prints the error message
  }
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  try {
    axios.get("https://pokeapi.co/api/v2/type/").then((pokemonType) => { // promise.then() function
      let pokemonTypeResults = pokemonType.data.results
      console.log("---Print pokemon types (Promise-then)---")
      for (let i = 0; i < pokemonType.data.count; i++) { // for loop for printing
        console.log(pokemonTypeResults[i].name)
      }
    })
  } catch (error) {
    console.log(error.message)
  }
};

// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async () => {
  // Starter code on how to use axios to get pokemon
  // axios.get("https://pokeapi.co/api/v2/pokemon/{id or name}")
  try {
    let pokemonInfo = await axios.get("https://pokeapi.co/api/v2/pokemon/rayquaza") // waits for the data to be gathered
    console.log("---Print the moves of the pokemon 'Rayquaza' (async-await)---")
    let pokemonMoveArray = pokemonInfo.data.moves  // stores the array of Rayqauza's moves
    for (let i = 0; i < pokemonMoveArray.length; i++) { // for loop for printing
      console.log(pokemonMoveArray[i].move.name)
    }
  } catch (error) {
    console.log(error.message)
  }

};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {
  try {
    axios.get("https://pokeapi.co/api/v2/pokemon/rayquaza").then((pokemonInfo) => { // promise.then() function
      let pokemonInfoMoveArray = pokemonInfo.data.moves
      console.log("---Print the moves of the pokemon 'Rayquaza' (Promise-then)---")
      for (let i = 0; i < pokemonInfoMoveArray.length; i++) { // for loop for printing
        console.log(pokemonInfoMoveArray[i].move.name)
      }
    })
  } catch (error) {
    console.log(error.message)
  }
};

// function calls
getPokemonTypesAsync();
getPokemonTypesPromise();
getPokemonInfoAsync();
getPokemonInfoPromise();
