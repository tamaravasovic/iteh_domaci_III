import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Korpa from "./pages/Korpa";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Pocetna />}/>
          <Route path='/korpa' element={<Korpa />}/>
          <Route path='/kontakt' element={<Kontakt />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
