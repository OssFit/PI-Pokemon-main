import React from 'react';
import {useDispatch} from 'react-redux';
import { filterByType,  orderAlphabetically, orderByAttack } from '../../redux/actions'
import { useHistory } from "react-router-dom";


export function Nav ({types, setOrder, setCurrentPage}) {
       
    const dispatch = useDispatch();
    const history = useHistory();
    
    function handleOrderByAbc(e){
        e.preventDefault();
        dispatch(orderAlphabetically(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

    function handleOrderByPower(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

     function handleFilterType (e){
        e.preventDefault();
        dispatch(filterByType(e.target.value));
       
        setCurrentPage(1);
        setOrder(`Filter by ${e.target.value}`)
    }

    return <div className='filters'>
        <select className='filterAbc' onChange={(e) => handleOrderByAbc(e)}>
            <option className='option0' value="all">Alphabetical Order</option>
            <option className='option' value="asc">A to Z</option>
            <option className='option' value="desc">Z to A</option>
        </select>
        
        <select className='filterType' onChange={(e) => handleFilterType(e)}>
            <option className='option0' value="All">Type Filter</option>
            {
                types?.map( pt => {
                    return <option className='option' value={pt.name} key={pt.id}>{pt.name}</option>
                })
            }
        </select>
    
         <select className='filterStrength' onChange={(e) => handleOrderByPower(e)}> 
            <option className='option0' value="all">Strength Order</option>
            <option className='option' value="AttackAsc">Powerfull</option>
            <option className='option' value="AttackDesc">Weak</option>
        </select>
        <div>
        <button onClick={() => history.push("/create")}>
          <header>CREATE</header>
        </button>
      </div>
    
       
    </div>
    
}