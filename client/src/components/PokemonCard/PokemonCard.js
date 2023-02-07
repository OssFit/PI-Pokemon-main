import style from "./PokemonCard.module.css"
import { NavLink } from 'react-router-dom'



export function PokemonCard({ name, image, type, id}) {

  


  return (
    <div className={style.divPrincipal}key={id}>
     <div className={style.section}>
     
        <div className={style.container}>
      <NavLink  className={style.navLink}to={`/home/${id}`}>
        <div className={style.idContainer}>
        <p className={style.idId}>{id}</p>
        </div>
        <div className={style.nameContainer}>
        <span className={style.name}>{name}</span>
        </div>

        <div className={style.idContainer2}>
        <p className={style.idId2}>{id}</p>
        </div>
       

        <div className={style.divImg}>
        <img className={style.img}src={image} alt={name} width="150px" height="190px" />
        </div>

       

        <div className={style.typeContainer}>      
          {type.map((e) => {
            return (<li className={style.type}key={e.name}>{e.name}</li>);
          })}
      </div>  

        </NavLink>
        </div>
        </div>
        
    </div>
  );
}

