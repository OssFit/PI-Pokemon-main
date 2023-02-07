import React from 'react'

import gif from "../Imagenes/pokemon-1.gif";

const Loading = () => {
  return (
    <div>
     
    <figure >
    <img src={gif} alt="Cargando" position='absolute'/>
    <figcaption >
      Cargando Pokemons ...
    </figcaption>
  </figure>
  </div>
  )
}

export default Loading