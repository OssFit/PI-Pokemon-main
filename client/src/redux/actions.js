
import axios from 'axios';
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON ";
export const ERROR = "ERROR";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const UPDATE_POKEMON= "UPDATE_POKEMON";

//probando nuevo servicio para el back

export function getAllPokemons(){
  return async function(dispatch){
      try {
        
        const json = await axios.get("/pokemons");
        return dispatch({
          type: GET_ALL_POKEMONS,
          payload: json.data,
        });
        
      } catch (error) {
        return dispatch({
          type:ERROR,
          payload:"Can't load Pokemons"
        })
        
      }
    }
}

export function getPokemonById(id){
  return async function(dispatch){
    try {
      const json= await axios.get(`/pokemons/${id}`);
      console.log(json.data)
      return dispatch({
        type:GET_POKEMON_BY_ID,
        payload:json.data,
    
      })

    } catch (error) {
      return dispatch({
        type:ERROR,
        payload:"Id was not found"
      })
      
    }
   
  }
}

export function getPokemonByName(name){
  return async function(dispatch){
    try {
      const json=await axios.get(`/pokemons?name=${name}`);
      return dispatch({
        type:GET_POKEMON_BY_NAME,
        payload:json.data
      })
      
     } catch (error) {
     return dispatch({
     type:ERROR,
     payload:"Name was not found"
     })      
    }
  }
}

export function getTypes(){
  return async function(dispatch){
    try {
      const json=await axios.get('/types');
      return (dispatch)({
        type:GET_TYPES,
        payload:json.data
      })
     
    } catch (error) {
      
    }
  }
}

export function CleanType(payload) {
  return {
    type: GET_POKEMON_BY_ID,
    payload:{}
  };
}
export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function orderAlphabetically (name) {
  return {
      type: ORDER_ALPHABETICALLY,
      payload: name,
  };
};

export function orderByAttack(order) {
  return {
      type: ORDER_BY_ATTACK,
      payload: order,
  };
}; 
export function createPokemon(data) {
  return async function (dispatch) {
    const json = await axios.post("/pokemons", data);
    return json;
  };
}

export function filterCreated(payload){
  return{
  type:FILTER_CREATED,
  payload
  }}

export function deletePokemon(id){
  return async function(dispatch){
    try {
     await axios.delete(`/pokemons/${id}`);
      return dispatch({
        type:DELETE_POKEMON,
        payload:"Pokemon was eliminated"
      })

    } catch (error) {
      return dispatch({
        type:ERROR,
        payload:"Pokemon was not found"
      })
      
    }
   
  }
}

export function updatePokemon(id, params) {
  return async function (dispatch) {
    const edited = await axios.put(`/pokemons/${id}`, params);
    return dispatch({
      type:UPDATE_POKEMON,
      payload:edited,})
  };
}