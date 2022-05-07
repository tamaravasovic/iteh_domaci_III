import React from 'react';

function Dugme({tekst,funkcija,film}){

    return(
        <button type='button' onClick={() => funkcija(film.id)}
                className="btn btn-secondary" style={{marginRight:'20px'}}>{tekst}
        </button>
    )

}

export default Dugme;