import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
             <video className={style.video} src="https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Pokemon.mp4" autoPlay={true} muted={true} loop={true} />
            <NavLink to={'/home'}>
                <h1 className={style.ready}>Are You Ready for Know the Pokemon World?</h1>
                <img src='https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Download-Image.png' alt='pikachu' width='100px' />
                <div className={style.home}>
                <h1 className={style.goHome}>Go Home!</h1>
                </div>
            </NavLink> 
        </div>
    )
}
