import React from 'react';
import {Link} from "react-router-dom";

function LinkStrana({tekst,putanja}){
    const style={color:'rgb(255,255,255)'}
    return(
       <li className='nav-item'>
           <Link style={style} className='nav-link active' aria-current="page" to={putanja} >{tekst}</Link>
       </li>
    )
}

export default LinkStrana;