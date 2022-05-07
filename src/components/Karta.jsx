import React from 'react';
import Dugme from "./Dugme";

 function Karta({film,obrisiKartu}){
    return(
        <div className="cardWrap">
            <div className="karta cardLeft">
                <h1>Bioskop</h1>
                <div className="title">
                    <h2>{film.naziv}</h2>
                    <span>film</span>
                </div>
                <div className="name">
                    <h2>{film.zanr}</h2>
                    <span>zanr</span>
                </div>
                <div className="name">
                    <h2>{film.trajanje}</h2>
                    <span>trajanje</span>
                </div>
                <div className="name">
                    <Dugme tekst='Obrisi kartu' funkcija={obrisiKartu} film={film}/>
                </div>


            </div>
            <div className="karta cardRight">
              <div>
                  <div className="number">
                      <h3>{film.brojKarata}</h3>
                      <span>broj karata</span>
                  </div>
              </div>

            </div>

        </div>
    );
 }

 export default Karta;