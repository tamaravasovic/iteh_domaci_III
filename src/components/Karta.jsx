import React from 'react';

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
                    <button type='button' onClick={() => obrisiKartu(film.id)}
                            className="btn btn-secondary">Obrisi kartu
                    </button>
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