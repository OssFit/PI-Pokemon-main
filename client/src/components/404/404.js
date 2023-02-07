import React from 'react'
import { NavLink } from 'react-router-dom';

import video from "../Imagenes/paginaNoEncontrada.mp4";

const NotFound = () => {
    return(
        <div >
             <video src={video} autoPlay={true} muted={true} loop={true} />
            <NavLink to={'/home'}>
                <div >
                <h1>Page Not Found</h1>
                </div>
                <div >
                <h1>Back Home!</h1>
                </div>
            </NavLink> 
        </div>
  )
}

export default NotFound