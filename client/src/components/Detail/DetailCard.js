import React, { useEffect } from "react";
import{useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import style from "./DetailCard.module.css"

export default function DetailCard(){
    const { id } = useParams();
    const dispatch=useDispatch();
    const pokemon=useSelector((state)=>state.pokemonDetail);
    const {name,life,attack,defense,speed,weight,height,image,Types}=pokemon;
    useEffect(() => {
        dispatch(getPokemonById(id));},[dispatch,id])
  
    
    return (
        <div className={style.divPrincipal}key={id}>
          
            <div className={style.imgContainer}>
            <img className={style.img} src={image} alt={name} />
             </div> 
         
            <div className={style.info}>
            <h2 className={style.name}>{name}</h2>
            <p key='life'><b>Life: </b>{life}</p>
           
            <p key='attack'><b>Attack: </b>{attack}</p>
            <p key='defense'><b>Defense: </b>{defense}</p>
            <p key='speed'><b>Speed: </b>{speed}</p>
            <p key='weight'><b>Weight: </b>{weight}</p>
            <p key='height'><b>Height: </b>{height}</p>

            {Types && Types.map((e) => {
            return (
            <p key = {e.name}><b>Type{Types.length>1&&" ".concat(Types.indexOf(e)+1)}: </b> {e.name}</p>
            );
            })}
             </div> 
            
            
           
        </div>
    )
}