const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  try{
    const {data} = await axios.get("https://pokeapi.co/api/v2/type/");    // get data property from response
    const pokemonData = data.results;                                     // get results property from data
    console.log("\nPOKEMON TYPES USING ASYNC-AWAIT");
    pokemonData.forEach((pokemonType) => {                                // loop through each result
      console.log(` - ${pokemonType.name}`);                                      // print value of 'name' key in result
    });
  }
  catch(error){                                                           // catch errors
    console.log(error);                                                   // print error details
  }
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  axios.get("https://pokeapi.co/api/v2/type/")
	.then((res) => {
		const pokemonData = res.data.results;                 // get results property from response
		console.log("\n POKEMON TYPES USING PROMISE-THEN");
    pokemonData.forEach((pokemonType) => {                // loop through each result
      console.log(` - ${pokemonType.name}`);              // print value of 'name' key in result
    });
	})
	.catch((err) => {                                       // catches the errors
		console.log(err);                                     // print error details
	});
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