const {default: axios} = require("axios");

// TODO: async-await form of getPokemonTypes()
const getPokemonTypesAsync = async() => {
  // Starter code on how to use axios to get types
  let pTypesObj
  let pTypes
  try{
    pTypesObj = await axios.get("https://pokeapi.co/api/v2/type/")
    pTypes = pTypesObj.data.results
    for(i = 0; i<pTypes.length; i++)
      console.log(pTypes[i].name)
  }catch{
    console.log("Error retrieving Pokemon Types");
  }
  // NOTE: don't forget to use a try-catch block
};

// TODO: promise-then form of getPokemonTypes()
const getPokemonTypesPromise = () => {
  let pTypesObj
  try{
    axios.get("https://pokeapi.co/api/v2/type/").then(
      (retVal)=>
      {
        pTypesObj = retVal.data.results
        for(i = 0; i<pTypesObj.length; i++)
          console.log(pTypesObj[i].name)
      }
    )
  }catch{
    console.log("Error retrieving Pokemon Types");
  }
};

// TODO: async-await form of getPokemonInfo()
const getPokemonInfoAsync = async() => {
  // Starter code on how to use axios to get pokemon
  let pokeInfoObj
  let pokeInfo
  try{
    pokeInfoObj = await axios.get("https://pokeapi.co/api/v2/pokemon/arceus")
    pokeInfo = pokeInfoObj.data.moves
    for(i = 0; i<pokeInfo.length; i++)
      console.log(pokeInfo[i].move.name)
  }catch{
    console.log("Error retrieving Pokemon info");
  }
};

// TODO: promise-then form of getPokemonInfo()
const getPokemonInfoPromise = () => {
  let pokeInfoObj
  try{
    axios.get("https://pokeapi.co/api/v2/pokemon/arceus").then(
      (retVal)=>
      {
        pokeInfoObj = retVal.data.moves
        for(i = 0; i<pokeInfoObj.length; i++)
          console.log(pokeInfoObj[i].move.name)
      }
    )
  }catch{
    console.log("Error retrieving Pokemon Info");
  }
};