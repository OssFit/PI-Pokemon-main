
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPokemons, createPokemon, getTypes } from '../../redux/actions';
import style from './CreatePokemon.module.css'


const CreateForm = function () {
  const [input, setInput] = useState({
    name: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type1: "",
    type2: "",
    image: "",
  });

  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);


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


  const handleChange = (e) => {
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

  const handleType1 = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      type1: value,
    });
  };

  const handleType2 = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      type2: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error.name) {
      if (pokemons.find((p) => p.name === input.name)) {
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
        dispatch(createPokemon(input));
        setInput({});
        alert("Let's check out our Pokemons!");
        history.push("/home");
      }
    } else if (error.name) {
      alert("Error. Please try again");
      setInput({});
    }
  };

  return (
    <div className={style.divPrincipal}>
      <div className={style.backHome}>
      <Link to={"/home"}>
        <button className={style.button}> Back Home</button><br></br>
      </Link>
      </div>
      <label className={style.error} hidden={!error.name ? true : false} >
        {error.name}
        <img className={style.errorImg} src="https://www.pngmart.com/files/16/Angry-Cartoon-PNG-File.png"/>
      </label>
      <div className={style.own}>
      <h1 className={style.h1}>CREATE YOUR OWN POKEMON</h1>
      </div>
      <div className={style.imgContainer}>
      <img className={style.img}src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8dda48c-9773-45af-904d-5f1de124edfb/dexx1us-63b16964-fa4b-4784-bce9-6e4daab6ac0c.png/v1/fill/w_894,h_894,strp/artist_pikachu_by_lili_nyklova_dexx1us-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2U4ZGRhNDhjLTk3NzMtNDVhZi05MDRkLTVmMWRlMTI0ZWRmYlwvZGV4eDF1cy02M2IxNjk2NC1mYTRiLTQ3ODQtYmNlOS02ZTRkYWFiNmFjMGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kSd4sYUsyNgRA21-nb3ch43268xnkqewBm7Pd9bnIRE"/>
      </div>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:  </label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          value={input.name}
          placeholder="Your Pokemon Name"
        />
        <br></br>
        <label htmlFor="life">Life:  </label>
        <input
          type="number"
          name="life"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.life}
        />
        <br></br>
        <label htmlFor="attack">Attack:  </label>
        <input
          type="number"
          name="attack"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.attack}
        />
        <br></br>
        <label htmlFor="defense">Defense:  </label>
        <input
          type="number"
          name="defense"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.defense}
        />
        <br></br>
        <label htmlFor="height">Height:  </label>
        <input
          type="number"
          name="height"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.height}
        />
        <br></br>
        <label htmlFor="weight">Weight:  </label>
        <input
          type="number"
          name="weight"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.weight}
        /><br></br>
        <label htmlFor="speed">Speed:  </label>
        <input
          type="number"
          name="speed"
          min="0"
          max="99"
          onChange={(e) => handleChange(e)}
          value={input.speed}
        />
        <br></br>
        <label>First Type </label>
         <select onChange={(e) => handleType1(e)}>
          <option hidden htmlFor='type1'>Type 1</option>
          {types &&
            types.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
                </option>
              );
            })}
        </select>
        <br></br>
        <label>Second Type </label>
        <select onChange={(e) => handleType2(e)}>
          <option hidden>Type2</option>
          {types &&
            types
              .filter((inp) => inp.name !== input.type1)
              .map((t) => {
                return (
                  <option key={t.id} value={t.name}>
                    {t.name.charAt(0).toUpperCase() + t.name.substring(1)}
                  </option>
                );
              })}
        </select>
        <br></br>
        <label htmlFor='image'>Image</label>
        <input type="text"
          name="image"
          placeholder="Paste your URL!"
          value={input.image}
          onChange={(e) => handleChange(e)} />
          <br></br>
        <button
          type="submit"
          disabled={!input.name ? true : false}

        >
          <span>Create</span>
        </button>
      </form>
    </div>
  );
};

export default CreateForm;


