import React, { useEffect, useState } from "react";
import{useSelector} from 'react-redux';
import { useParams,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById,deletePokemon, updatePokemon, getAllPokemons, getTypes } from "../../redux/actions";
import style from "./DetailCard.module.css"

export default function DetailCard(){
    const { id } = useParams();
    const history=useHistory();
    const dispatch=useDispatch();
    const pokemon=useSelector((state)=>state.pokemonDetail);
    const types=useSelector((state)=>state.types)
    const allPokemons=useSelector((state)=>state.pokemons)
    const {name,life,attack,defense,speed,weight,height,image,Types,create}=pokemon;
    const[input,setInput]=useState({
      name:"",
      life:0,
      attack:0,
      defense:0,
      speed:0,
      weight:0,
      height:0,
      image:"",
      type1:"",
      type2:""
    })

    const [error, setError] = useState({});

    useEffect(() => {
        dispatch(getPokemonById(id));
      dispatch(getAllPokemons());
    dispatch(getTypes())},[dispatch,id]);


  
    const handlerClickDelete=()=>{
       dispatch(deletePokemon(id))
       history.push('/Home');
       alert("Pokemon was Eliminated!")   
    }


    let symbols = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let decimals = /^\d*\.\d+$/;
    let accents = /^[a-zA-Z]+$/;
    //Funciones controladoras
    function formValidate(input) {
      let error = {};
      if (!input.name.trim()) {
        error.name = "Name require. can't be empty";
      } else if (!symbols.test(input.name.trim())) {
        error.name = "Name only can be letters";
      } else if (!accents.test(input.name)) {
        error.name = "Name must not have any Accents or Spaces";
      }
      if (decimals.test(input.life)) {
        error.name = "Health Points may not have a decimal number";
      }
      if (decimals.test(input.attack)) {
        error.name = "Attack may not have decimal numbers";
      }
      if (decimals.test(input.defense)) {
        error.name = "Defense may not have decimal numbers";
      }
      if (decimals.test(input.height)) {
        error.name = "Height may not have decimal numbers";
      }
      if (decimals.test(input.weight)) {
        error.name = "Weight may not have decimal numbers";
      }
      return error;
    }
   
    const handlerChange = (e) => {
      const { name, value } = e.target;
  
      setInput({
        ...input,
        [name]: value,
      });
  
      setError(
        formValidate({
          ...input,
          [name]: value,
        })
      );
    };
  
    // const handlerType1 = (e) => {
    //   const { value } = e.target;
    //   setInput({
    //     ...input,
    //     type1: value,
    //   });
    // };
  
    // const handlerType2 = (e) => {
    //   const { value } = e.target;
    //   setInput({
    //     ...input,
    //     type2: value,
    //   });
    // };
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      if (!error.name) {
        if (allPokemons.find((p) => p.name === input.name)) {
          alert("There's already a pokemon with that name");
          setInput({
            name: "",
            life: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            image: "",
            type1: "",
            type2: ""
          });
        } else {
          dispatch(updatePokemon(id, input));
          setInput({});
          alert("Pokemon Updated!");
         window.location.reload()
         
        }
      } else if (error.name) {
        alert("Error. Please try again");
        setInput({});
      }
    };

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
            <ul className={style.info}>
            <li className={style.life} key='life'><b>Life: </b>{life}</li>
           
            <li key='attack'><b>Attack: </b>{attack}</li>
            <li key='defense'><b>Defense: </b>{defense}</li>
            <li key='slieed'><b>Speed: </b>{speed}</li>
            <li key='weight'><b>Weight: </b>{weight}</li>
            <li key='height'><b>Height: </b>{height}</li>

            {Types && Types.map((e) => {
            return (
            <li key = {e.name}><b>Type{Types.length>1&&" ".concat(Types.indexOf(e)+1)}: </b> {e.name}</li>
            );
            })}
             </ul> 
           
            {create===true?(<button onClick={(e)=>handlerClickDelete(e)}key="delete">Delete</button>):false}
            {create===true?(<button onClick={()=>{document.getElementById("form").style.display = "block"}}key="update">Update</button>):false}
            
            <div id='form' hidden className={style.divForm}>
            <form className={style.form} onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="name">Name:  </label>
        <input
          type="text"
          name="name"
          placeholder={name}
          onChange={(e)=>handlerChange(e)}
        />
        <br></br>
        <label htmlFor="life">Life:  </label>
        <input
          type="number"
          name="life"
          min="0"
          max="99"
          onChange={(e)=>handlerChange(e)}
        />
        <br></br>
        <label htmlFor="attack">Attack:  </label>
        <input
          type="number"
          name="attack"
          min="0"
          max="99"
          onChange={handlerChange}
        />
        <br></br>
        <label htmlFor="defense">Defense:  </label>
        <input
          type="number"
          name="defense"
          min="0"
          max="99"
          onChange={handlerChange}
        />
        <br></br>
        <label htmlFor="height">Height:  </label>
        <input
          type="number"
          name="height"
          min="0"
          max="99"
          onChange={handlerChange}
        />
        <br></br>
        <label htmlFor="weight">Weight:  </label>
        <input
          type="number"
          name="weight"
          min="0"
          max="99"
          onChange={handlerChange}
        /><br></br>
        <label htmlFor="speed">Speed:  </label>
        <input
          type="number"
          name="speed"
          min="0"
          max="99"
          onChange={handlerChange}
        />
        <br></br>
        <label>First Type </label>
         <select name="type1" onChange={handlerChange}>
          <option hidden htmlFor='type1'>Type 1</option>
          {types &&
            types.map((type) => {
              return (
                <option key={type.id} name="type1" value={type.name}>
                  {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
                  </option>)})}     
        </select>
        <br></br>
        <label>Second Type </label>
        <select name="type2" onChange={handlerChange}>
          <option hidden>Type2</option>
           {types &&
            types
              .filter((inp) => inp.name !== input.type1)
              .map((t) => {
                return (
                  <option key={t.id} onChange={handlerChange} name= "type2" value={t.name} >
                    {t.name.charAt(0).toUpperCase() + t.name.substring(1)} 
                    </option>)})}
             
        </select>
        <br></br>
        <label htmlFor='image'>Image</label>
        <input type="text"
          name="image"
          placeholder="Paste your URL!"
          onChange={handlerChange}
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