import style from './Pagination.module.css';

import React from "react";

export function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <span className="number" key={number}>
                        <button className={style.pagina} onClick={()=> paginado(number)}> {number} </button>
                    </span>
                ))}
            </ul>
        </div>
    )
}