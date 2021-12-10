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
    console.log(err)
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
      console.log(err)
    })
};


// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = () => {
  // Starter code on how to use axios to get pokemon
  // axios.get("https://pokeapi.co/api/v2/pokemon/{id or name}")
};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {};

getPokemonTypesAsync();
getPokemonTypesPromise();
