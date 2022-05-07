import React from 'react';
import LinkStrana from "./LinkStrana";

function NavMenu({brojKupljenihKarata, pretraga}) {
    const style = {backgroundColor: 'rgba(1,3,84,0.8)', color: 'rgb(255,255,255)'}
    const boja = {color: 'rgb(255,255,255)'}
    return (
        <nav className="navbar navbar-expand-xl navbar-light " style={style}>
            <div className="container-fluid">
                <p className="navbar-brand" style={boja}>Bioskop</p>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <LinkStrana putanja="/" tekst="Početna"/>
                        <LinkStrana putanja="/korpa" tekst="Vidi sve kupljene karte"/>
                        <LinkStrana putanja="/kontakt" tekst="Kontakt"/>
                        <li>
                            {brojKupljenihKarata}

                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" onInput={pretraga}
                               placeholder="Pronadji film"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;