import React from 'react'

import gif from "../Imagenes/pokemon-1.gif";

const Loading = () => {
  return (
    <diV>
     
    <figure >
    <img src={gif} alt="Cargando" position='absolute'/>
    <figcaption >
      Cargando Pokemons ...
    </figcaption>
  </figure>
  </diV>
  )
}

export default Loading