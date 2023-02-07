import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';
import fondo from '../Imagenes/fondoLanding.mp4'

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
             <video className={style.video} src={fondo} autoPlay={true} muted={true} loop={true} />
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
