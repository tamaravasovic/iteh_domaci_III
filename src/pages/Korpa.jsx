import React from 'react';
import Karta from "../components/Karta";

function Korpa({korpa,obrisiKartu}){
    return (
        <div className='korpa'>
            {korpa.map((film) => (
                <Karta film={film} obrisiKartu={obrisiKartu} />
            ))}

        </div>
    );
}

export default Korpa;