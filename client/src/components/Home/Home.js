
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes } from '../../redux/actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Paginado } from '../Pagination/Pagination.js';
import { filterByType } from '../../redux/actions';
import { Nav } from '../Nav/Nav'



export const Home = function () {
  const dispatch = useDispatch();
  const AllPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(13);
  const [order, setOrder] = useState("");
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = AllPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginado = (pageNumber) => { setCurrentPage(pageNumber) }

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());

  }, [dispatch]);

  return (
    <div>
      <Paginado
        currentPage={currentPage}
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={AllPokemons.length}
        paginado={paginado}
      />
      <Nav types={allTypes} setOrder={setOrder} setCurrentPage={setCurrentPage} />
      
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
      {/* <select>
                    <option value='attackAsc'>Ascending by Attack</option>
                    <option value='attackDesc'>Descending by Attack</option>
                </select>
                <select>
                    <option value='alfabethicalAsc'>Alfabethical Ascending</option>
                    <option value='alfabethicalDesc'>Alfabethical Descending</option>
                </select>
                <select onChange={e => handleFilterStatus(e)}>
                    <option value='all'>All</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='phychic'>Phychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='dark'>Dark</option>
                    <option value='fairy'>Fairy</option>
                    <option value='unknown'>Unknown</option>
                    <option value='shadow'>Shadow</option>
                </select>
                <select>
                    <option value='all'>All</option>
                    <option value='api'>Original Pokemons</option>
                    <option value='created'>Created by yourself</option>
                  </select> */}

    </div>
  )
}

