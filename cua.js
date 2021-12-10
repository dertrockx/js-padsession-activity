const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  // Starter code on how to use axios to get types
  // axios.get("https://pokeapi.co/api/v2/type/")
  // NOTE: don't forget to use a try-catch block

  try {
    const types = await axios.get("https://pokeapi.co/api/v2/type/")
    const get_data = types.data.results

    console.log("----- TASK 1: async-await -----")

    for (let index in get_data) {
      console.log(get_data[index].name)
    }

  } catch (err) {
    console.log("ERROR")
  }

};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  const promise = new Promise(function (resolve, reject) {
    resolve(axios.get("https://pokeapi.co/api/v2/type/"))
  })

  promise
    .then(types => {
      const get_data = types.data.results

      console.log("----- TASK 1: promise-then -----")

      for (let index in get_data) {
        console.log(get_data[index].name)
      }

    })

    .catch(err => {
      console.log("ERROR")
    })
};


// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async () => {
  // Starter code on how to use axios to get pokemon
  // axios.get("https://pokeapi.co/api/v2/pokemon/{id or name}")
  try {
    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/rayquaza")
    const get_data = pokemon.data.moves

    console.log("----- TASK 2: async-await -----")

    for (let index in get_data) {
      console.log(get_data[index].move.name)
    }

  } catch (err) {
    console.log("ERROR")
  }

};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {
  const promise = new Promise(function (resolve, reject) {
    resolve(axios.get("https://pokeapi.co/api/v2/pokemon/rayquaza"))
  })

  promise
    .then(pokemon => {
      const get_data = pokemon.data.moves

      console.log("----- TASK 2: promise-then -----")

      for (let index in get_data) {
        console.log(get_data[index].move.name)
      }

    })

    .catch(err => {
      console.log("ERROR")
    })

};

getPokemonTypesAsync();
getPokemonTypesPromise();
getPokemonInfoAsync();
getPokemonInfoPromise();
