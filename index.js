/**
 *    BRYLLE THEODURE S. FELIZARDO
 */

const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  try{
    const {data} = await axios.get("https://pokeapi.co/api/v2/type/");    // get data property from response
    const pokemonData = data.results;                                     // get results property from data
    console.log("\nPOKEMON TYPES USING ASYNC-AWAIT");
    pokemonData.forEach((pokemonType) => {                                // loop through each result
      console.log(` - ${pokemonType.name}`);                              // print value of 'name' key in result
    });
  }
  catch(error){                                                           // catch errors
    console.log(`${error.name}: ${error.message}`);                       // print error details
  }
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  axios.get("https://pokeapi.co/api/v2/type/")
	.then((res) => {
		const pokemonData = res.data.results;                   // get results property from response
		console.log("\n POKEMON TYPES USING PROMISE-THEN");
    pokemonData.forEach((pokemonType) => {                  // loop through each result
      console.log(` - ${pokemonType.name}`);                // print value of 'name' key in result
    });
	})
	.catch((error) => {                                       // catches the errors
		console.log(`${error.name}: ${error.message}`);         // print error details
	});
};

// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async () => {
  try{
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");    // get data property from response
    const pokemonMoves = data.moves;                                                // get moves property from data
    console.log("\n PIKACHU MOVES USING ASYNC-AWAIT");
    pokemonMoves.forEach((move)=>{                                                  // loop through each move
      console.log(` - ${move.move.name}`);                                          // print name of move
    });
  }
  catch(error){                                                                     // catch error
    console.log(`${error.name}: ${error.message}`);                                 // print error details
  }  
};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
	.then((res) => {
		const pokemonMoves = res.data.moves;                    // get moves property from response
		console.log("\n PIKACHU MOVES USING PROMISE-THEN");
    pokemonMoves.forEach((move)=>{                          // loop through each move
      console.log(` - ${move.move.name}`);                  // print name of move
    });
	})
	.catch((error) => {                                       // catches the errors
		console.log(`${error.name}: ${error.message}`);         // print error details
	});
};


getPokemonTypesAsync();
getPokemonTypesPromise();
getPokemonInfoAsync();
getPokemonInfoPromise();