import React from 'react';
import Dugme from "./Dugme";

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
                        <Dugme  film={film} tekst='Kupi kartu' funkcija={kupiKartu}/>
                        {film.brojKarata <= 0 ? <></>
                            :
                            <Dugme film={film} tekst='Obrisi kartu' funkcija={obrisiKartu}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Film;
