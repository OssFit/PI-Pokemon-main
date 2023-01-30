import React, { Component } from 'react';
import {useDispatch} from 'react-redux';
import { getAllPokemons,filterByType,  orderAlphabetically, orderByAttack, filterCreated} from '../../redux/actions'
import { useHistory } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export function Nav ({types, setOrder, setCurrentPage}) {
       
    const dispatch = useDispatch();
    const history = useHistory();
    
    function handleOrderByAbc(e){
        //e.preventDefault();
        dispatch(orderAlphabetically(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`);
        e.target.value='all'
    }

    function handleOrderByPower(e){
        //e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`);
        e.target.value='all'
    }

     function handleFilterType (e){
        //e.preventDefault();
        dispatch(filterByType(e.target.value));
       
        setCurrentPage(1);
        setOrder(`Filter by ${e.target.value}`);
        e.target.value='all';
    }

    const handleCreated = (e) => {
        // e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
        history.push("/home");
        e.target.value='all';
      };

      const resetFilters = () => {
        dispatch(getAllPokemons());
        setCurrentPage(1);
        history.push("/home");
      };

     

    return <div className={style.divPrincipal}>
        <select className={style.filterAbc} onChange={(e) => handleOrderByAbc(e)}>
            <option hidden  value="all">Alphabetical Order</option>
            <option  value="asc">A to Z</option>
            <option  value="desc">Z to A</option>
        </select>
        
        <select className={style.filterType} onChange={(e) => handleFilterType(e)}>
            <option hidden value="all">Types Filter</option>
            {
                types?.map( pt => {
                    return <option value={pt.name} key={pt.id}>{pt.name}</option>
                })
            }
        </select>
    
         <select className={style.filterStrength} onChange={(e) => handleOrderByPower(e)}> 
            <option hidden value="all">Strength Order</option>
            <option value="AttackAsc">Powerfull</option>
            <option value="AttackDesc">Weak</option>
        </select>

        <select className={style.created}onChange={(e) => handleCreated(e)}>
          <option hidden value='all'>Create/Old</option>
          <option value="created">Created</option>
          <option value="api">Old</option>
        </select>
        <div className={style.back}>
        
        <button className={style.button2} onClick={() => resetFilters()}>
        BACK
      </button>
      </div>
      <div className={style.create}>
      <button className={style.button1}onClick={() => history.push("/create")}>
          <header>CREATE</header>
        </button>
        </div>
    <div className={style.contenedorSearch}>
<SearchBar className={style.SearchBar} setCurrentPage={setCurrentPage}/>
</div>
       
    </div>
    
}