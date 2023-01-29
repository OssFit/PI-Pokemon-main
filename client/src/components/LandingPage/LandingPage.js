import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';
import ReactPlayer from 'react-player'

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
            <ReactPlayer className={style.video} url="https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Pokemon-Where-Are-You.mp4" autoplay={true}  loop={true} />
            <NavLink to={'/home'}>
                <h1>Go home</h1>
            </NavLink>
        </div>
    )
}
