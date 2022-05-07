import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Korpa from "./pages/Korpa";
import Kontakt from "./pages/Kontakt";

function App() {

    const [repertoar, setRepertoar] = useState([
        {
            id: 1,
            naziv: 'Film 1',
            opis: 'opis filma 1',
            zanr: 'komedija',
            trajanje: '120 min',
            brojKarata: 0
        },
        {
            id: 2,
            naziv: 'Film 2',
            opis: 'opis filma 2',
            zanr: 'horor',
            trajanje: '50 min',
            brojKarata: 0
        },
        {
            id: 3,
            naziv: 'Film 3',
            opis: 'opis filma 3',
            zanr: 'komedija',
            trajanje: '100 min',
            brojKarata: 0
        },
        {
            id: 4,
            naziv: 'Film 4',
            opis: 'opis filma 4',
            zanr: 'drama',
            trajanje: '70 min',
            brojKarata: 0
        },
    ]);

    const [repertoarPrikaz, setRepertoarPrikaz] = useState(repertoar);

    const [korpa, setKorpa]=useState([]);
    const [brojKupljenihKarata,setBrojKupljenihKarata]=useState(0);

    function kupiKartu(id){

    }

    return (
        <div className="App">

            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Pocetna repertoar={repertoar} kupiKartu={kupiKartu}/>} />
                    <Route path='/korpa' element={<Korpa/>}/>
                    <Route path='/kontakt' element={<Kontakt/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
