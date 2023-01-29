const axios=require('axios');
const{ Pokemon, Type }= require('../db')


// const getPokemons = async () => {
//    const pokemons = await axios('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
//     const pokeMap= pokemons.data.results.map((e)=>{return {name:e.name,
//       url:e.url }})
//    return pokeMap
   
// }

const getApiData=async()=>{
   let pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150');
   let pokeApiUrl = pokeApi.data.results.map((el) => axios.get(el.url));
     
   let pokeDB= await Pokemon.findAll({include:Type})

   let dataFromDB = pokeDB?.map((element) => {
    return {
       id: element.id,
       name:
       element.name.trim().toLowerCase().charAt(0).toUpperCase() +
       element.name.substring(1), //me traigo su name con el fin de que quede asi = EJEMPLO: "andres" -> "Andres"
       hp: element.hp,
       attack: element.attack,
       defense: element.defense,
       speed: element.speed,
       height: element.height,
       weight: element.weight,
       Types: element.Types.map((index) => {
        return {name:index.name};
      }), //Aqui pido que me traiga los nombres de sus type de la db
       image: element.image,
       createdInDb: true,
    }
  });
   
   
   console.log(dataFromDB)
   
   let pokeApiInfo = await axios.all(pokeApiUrl);
   
   let apiData = pokeApiInfo.map((el) => {
       let pokemon = el.data
       let obj = {
         id: pokemon.id.toString(),
         name: pokemon.name.toLowerCase(),
         life: pokemon.stats[0].base_stat,
         attack: pokemon.stats[1].base_stat,
         defense: pokemon.stats[2].base_stat,
         speed: pokemon.stats[5].base_stat,
         height: pokemon.height,
         weight: pokemon.weight,
         image: pokemon.sprites.other['dream_world'].front_default,
         image2: pokemon.sprites.other['official-artwork'].front_default,
         image3: pokemon.sprites.other['home'].front_default,
         Types: pokemon.types.map((t) => {
             return { name: t.type.name };
           }),
         create: false
       }
      return obj
       
     })
     
     const allPokemons=apiData.concat(dataFromDB);
     return allPokemons;
   }
  


module.exports={getApiData}