import React, { useEffect } from "react";
import{useSelector} from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import style from "./Detail.module.css"
import DetailCard from "./DetailCard";
import { CleanType } from "../../redux/actions";

export default function Detail(){
    const dispatch=useDispatch()
    const history=useHistory();
    const pokemon=useSelector(state=>state.pokemonDetail)
    const goHome=()=>{
        history.push("/home")
        dispatch(CleanType())
    }
    return (
        <div className={style.divPrincipal}>
            <div className={style.button}>
            <button className={style.back} onClick={goHome}>Back Home</button>
            </div>
            <DetailCard className={style.DetailCard}></DetailCard>
        </div>
        
    )
}