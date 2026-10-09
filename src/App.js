import "./App.css"
import React, { useState } from 'react';


export default function App() {

  const [Wort, setWort] = useState("Banane");
  const [Groesse, setGroesse] = useState(50);

  return (
    <div>
      <div className="App">
        <div className="flex-item">Anzeigetafel</div>
        <button className="flex-item" onClick={() => setWort("Banane")} >Banane</button>
        <input type="range" min="10" max="1000" className="flex-item" onChange={(e) => setGroesse(e.target.value)}></input>
        <input type="text" className="flex-item" onChange={(a) => setWort(a.target.value)}></input>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30LX1Mltqo00614W3mb-ie_rottQE4jBClAsJ4QuIkuoc8E7GnoxEMFU&s=10"
          alt="Banane"
          className="flex-item"
          style={{ height: "80px", objectFit: "contain" }}
        />

      </div>
      <div className="Anzeige">
        <p id="Anzeige" style={{ fontSize: `${Groesse}px` }}>{Wort}</p>
      </div>
    </div>


  );
}

