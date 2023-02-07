
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes } from '../../redux/actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Paginado } from '../Pagination/Pagination.js';
import { filterByType } from '../../redux/actions';
import { Nav } from '../Nav/Nav'
import style from './Home.module.css'



export const Home = function () {
  const dispatch = useDispatch();
  let AllPokemons = useSelector((state) => state.pokemons);
  const copyPokemons=useSelector((state)=>state.pokemonsForFilter)
  const allTypes = useSelector((state) => state.types)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState("");
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = AllPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginado = (pageNumber) => { setCurrentPage(pageNumber) }
  

  useEffect(() => {
    dispatch(getAllPokemons())
    {alert("If you're from PC:Hover the cursor to open the pokeball and Click to Open Details.")};
    {alert("If you're from Mobile:Tap for one second to open the pokeball and tap again to Open Datils")}
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());

  }, [dispatch]);

  return (
    <div>
      
      
      <Nav types={allTypes} setOrder={setOrder} setCurrentPage={setCurrentPage} />
      <Paginado
        currentPage={currentPage}
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={AllPokemons.length}
        paginado={paginado}
      />
      
      {currentPokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.Types}

          />
        );
      })}
     <p className={style.pElab}>Proyecto Elaborado por Oscar Alatrista - 2023</p>
    </div>
  )
}

