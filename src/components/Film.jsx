import React from 'react';

function Film({film,kupiKartu}) {
    const stil = {backgroundColor: 'rgba(0,0,0,0.84)', color: '#ffffff'}
    return (
        <div className='col filmCard'>
            <div className=" card" style={stil}>
                <div className="card-body">
                    <h5 className="card-title">{film.naziv}</h5>
                    <p className="card-text">Opis: {film.opis}</p>
                    <p className="card-text">Zanr: {film.zanr}</p>
                    <p className="card-text">Trajanje filma: {film.trajanje}</p>
                    <button type='button' onClick={()=>kupiKartu(film.id)}
                            className="btn btn-secondary">Kupi
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Film;
