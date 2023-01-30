import { useState }from 'react';
import { getPokemonByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css'

export default function SearchBar({setCurrentPage}){
const dispatch=useDispatch();
const[name, setName]=useState("");



const handlerChange=(event)=>{
    
    setName(event.target.value);

}

const handlerSubmit=(event)=>{
    event.preventDefault()
    setCurrentPage(1);
dispatch(getPokemonByName(name));
setName("");
}

    return (
        <div>
        <button className={style.button} onClick={(e)=>handlerSubmit(e)}> Search </button>
        <div className={style.lights}>
        <button className={style.btn1}></button>
        <button className={style.btn2}></button>
        <button className={style.btn3}></button>
        </div>
        <div className={style.inputContainer}>
        <input className={style.input} value={name}type='text' onChange={(e)=>handlerChange(e)}></input>
        </div>
        </div>
     
        
    )
}
