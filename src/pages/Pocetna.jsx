import React from 'react';
import Film from "../components/Film";

function Pocetna({repertoar,kupiKartu,obrisiKartu}) {
    return (
        <div className='pocetna'>
            <h2 className='naslovStrane'>Bioskop</h2>
            <div className=' row row-cols-1 row-cols-sm-2 g-3'>
                {repertoar.map((film) => (
                    <Film key={film.id} film={film} kupiKartu={kupiKartu} obrisiKartu={obrisiKartu} />
                ))}
            </div>
        </div>
    );
}

export default Pocetna;