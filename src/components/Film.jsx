import React from 'react';

function Film({film, kupiKartu, obrisiKartu}) {
    const stil = {backgroundColor: 'rgba(0,0,0,0.84)', color: '#ffffff'}
    return (
        <div className='col filmCard'>
            <div className=" card" style={stil}>
                <div className="card-body">
                    <h5 className="card-title">{film.naziv}</h5>
                    <p className="card-text">Opis: {film.opis}</p>
                    <p className="card-text">Zanr: {film.zanr}</p>
                    <p className="card-text">Trajanje filma: {film.trajanje}</p>
                    <div className='d-flex justify-content-start' >
                        <button type='button' onClick={() => kupiKartu(film.id)}
                                className="btn btn-secondary" style={{marginRight:'20px'}}>Kupi
                        </button>
                        {film.brojKarata <= 0 ? <></>
                            :
                            <button type='button' onClick={() => obrisiKartu(film.id)}
                                    className="btn btn-secondary">Obrisi kartu
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Film;
