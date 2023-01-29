import React, { useEffect } from "react";
import{useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../redux/actions";

export default function Detail(){
    const { id } = useParams();
    const dispatch=useDispatch();
    const pokemon=useSelector((state)=>state.pokemonDetail);
    const {name,life,attack,defense,speed,weight,height,image,Types}=pokemon;
    useEffect(() => {
        dispatch(getPokemonById(id));},[dispatch,id])
    return (
        <div key={id}>
            
            <h2>{name}</h2>
            <p>Life:{life}</p>
            <p key='attack'>Attack:{attack}</p>
            <p key='defense'>Defense:{defense}</p>
            <p key='speed'>Speed:{speed}</p>
            {Types && Types.map((e) => {
            return (
            <p key = {e.name}>Type{Types.length>1&&" ".concat(Types.indexOf(e)+1)}: {e.name}</p>
            );
            })}
            <img src={image} alt={name} width="200px" height="250px"/>
         
            
           
        </div>
    )
}