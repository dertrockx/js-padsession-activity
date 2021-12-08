const { default: axios } = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/type/")
    const pokemon_types = response.data;
    for (i in pokemon_types["results"]){
      console.log(pokemon_types["results"][i]["name"]);
    }
  }
  catch(errors){
    console.error(errors)
  }
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(axios.get("https://pokeapi.co/api/v2/type/"));
  });
};

getPokemonTypesPromise()

.then( response => {
  const pokemon_types = response.data;
  for (i in pokemon_types["results"]){
    console.log(pokemon_types["results"][i]["name"])
  }
});

// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/lucario");
    const pokemon_info = response.data;
    for (i in pokemon_info["moves"]){
      console.log(pokemon_info["moves"][i]["move"]["name"]);
    }
  }
  catch(error){
  }
};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {
  return new Promise((resolve, reject)=>{
    resolve(axios.get("https://pokeapi.co/api/v2/pokemon/lucario"));
  })
};

getPokemonInfoPromise()

.then(response => {
  pokemon_info = response.data;
  for (i in pokemon_info["moves"]){
    console.log(pokemon_info["moves"][i]["move"]["name"]);
  }
})