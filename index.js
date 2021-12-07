const Axios = require("axios");
// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => 
{
  // Starter code on how to use axios to get types
  let pokemonTypes
  let arrayOfTypes
  try
  {
     pokemonTypes = await Axios.get("https://pokeapi.co/api/v2/type")
     arrayOfTypes = pokemonTypes.data.results
     for(let i = 0; i < arrayOfTypes.length; i++)
        console.log(`${arrayOfTypes[i].name}`)
  }
  catch
  {
    console.log("Error: cannot retrieve Pokemon types from the given link")
  }
  // NOTE: don't forget to use a try-catch block
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => 
{   
    try 
    {
        Axios.get("https://pokeapi.co/api/v2/type/").then(
            (returnValue) =>
            {
                let arrayOfTypes
                arrayOfTypes = returnValue.data.results
                for(let i = 0; i < arrayOfTypes.length; i++)
                    console.log(`${arrayOfTypes[i].name}`)
            }
        )
    }
    catch
    {
        console.log("Error: cannot retrieve Pokemon types from the given link")
    }
};

// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async (id) => {
  // Starter code on how to use axios to get pokemon
    let pokemonInfo
    try
    {
        pokemonInfo = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(`${pokemonInfo.data.moves[0].move.name}`)
    }
    catch
    {
        console.log("Error: cannot retrieve Pokemon info from the given link")
    }

};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = (id) => {

    try 
    {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
            (returnValue) =>
            {
                console.log(`${returnValue.data.moves[0].move.name}`)
            }
        )
    }
    catch
    {
        console.log("Error: cannot retrieve Pokemon info from the given link")
    }

};
