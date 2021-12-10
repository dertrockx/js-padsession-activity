const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  // Starter code on how to use axios to get types
  // axios.get("https://pokeapi.co/api/v2/type/")
  // NOTE: don't forget to use a try-catch block

  try {
    let types = await axios.get("https://pokeapi.co/api/v2/type/")
    let get_data = types.data.results

    for (let index in get_data) {
      console.log(get_data[index].name)
    }

  } catch (err) {
    console.log(err)
  }

};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {};


// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = () => {
  // Starter code on how to use axios to get pokemon
  // axios.get("https://pokeapi.co/api/v2/pokemon/{id or name}")
};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {};

getPokemonTypesAsync();
