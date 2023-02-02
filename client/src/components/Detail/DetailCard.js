import React, { useEffect } from "react";
import{useSelector} from 'react-redux';
import { useParams,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById,deletePokemon } from "../../redux/actions";
import style from "./DetailCard.module.css"

export default function DetailCard(){
    const { id } = useParams();
    const history=useHistory();
    const dispatch=useDispatch();
    const pokemon=useSelector((state)=>state.pokemonDetail);
    const {name,life,attack,defense,speed,weight,height,image,Types,create}=pokemon;
    useEffect(() => {
        dispatch(getPokemonById(id));},[dispatch,id]);
  
    const handlerClickDelete=()=>{
       dispatch(deletePokemon(id))
       history.push('/Home');
       alert("Pokemon was Eliminated!")   
    }

    return (
        <div className={style.divPrincipal}key={id}>
          <div className={style.idContainer}>
            <p className={style.id}>ID:{id.length>3?id.slice(0,4)+"...":id}</p>
            </div>
            <div className={style.imgContainer}>
            <img className={style.img} src={image} alt={name} />
             </div> 
            <div className={style.nameContainer}>
            <h2 className={style.name}>{name}</h2>
            </div>
            <div className={style.info}>
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
           
            {create===true?(<button onClick={(e)=>handlerClickDelete(e)}key="delete">Delete</button>):false}
            {create===true?(<button onClick={()=>{document.getElementById("form").style.display = "block"}}key="update">Update</button>):false}
            
            <div id='form' hidden className={style.divForm}>
            <form className={style.form}>
        <label htmlFor="name">Name:  </label>
        <input
          type="text"
          name="name"
          placeholder={name}
        />
        <br></br>
        <label htmlFor="life">Life:  </label>
        <input
          type="number"
          name="life"
          min="0"
          max="99"
        />
        <br></br>
        <label htmlFor="attack">Attack:  </label>
        <input
          type="number"
          name="attack"
          min="0"
          max="99"
        />
        <br></br>
        <label htmlFor="defense">Defense:  </label>
        <input
          type="number"
          name="defense"
          min="0"
          max="99"
        />
        <br></br>
        <label htmlFor="height">Height:  </label>
        <input
          type="number"
          name="height"
          min="0"
          max="99"
        />
        <br></br>
        <label htmlFor="weight">Weight:  </label>
        <input
          type="number"
          name="weight"
          min="0"
          max="99"
        /><br></br>
        <label htmlFor="speed">Speed:  </label>
        <input
          type="number"
          name="speed"
          min="0"
          max="99"
        />
        <br></br>
        <label>First Type </label>
         <select>
          <option hidden htmlFor='type1'>Type 1</option>
          {/* {types &&
            types.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name.charAt(0).toUpperCase() + type.name.substring(1)} */}
                
        </select>
        <br></br>
        <label>Second Type </label>
        <select >
          <option hidden>Type2</option>
          {/* {types &&
            types
              .filter((inp) => inp.name !== input.type1)
              .map((t) => {
                return (
                  <option key={t.id} value={t.name}>
                    {t.name.charAt(0).toUpperCase() + t.name.substring(1)} */}
             
        </select>
        <br></br>
        <label htmlFor='image'>Image</label>
        <input type="text"
          name="image"
          placeholder="Paste your URL!"
          />
          <br></br>
        <button
          type="submit"
        //   disabled={!input.name ? true : false}

        >
          <span>Create</span>
        </button>
        <button onClick={()=>  {document.getElementById("element").style.display = "none"}}>Ocultar</button>
      </form>
            </div>
           
        </div>
    )
}