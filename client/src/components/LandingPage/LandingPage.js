import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
             <video className={style.video} src="https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/tcg/sun-moon-team-up.mp4" autoPlay={true} muted={true} loop={true} />
            <NavLink to={'/home'} >
                <div className={style.ready}>
                <h1>Are You Ready for Know the Pokemon World?</h1>
                </div>

                {/* <img className={style.img}src='https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Download-Image.png' alt='pikachu' width='100px' /> */}
                <div className={style.home}>
                <button className={style.goHome}>Go Home!</button>
                </div>
            </NavLink> 
        </div>
    )
}
