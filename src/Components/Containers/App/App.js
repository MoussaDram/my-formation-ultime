
import './App.css';
import React, { useState, useEffect } from 'react';
import Eleve from '../../Eleve/Eleve';

function App() {

  const  [eleves, setEleves] = useState([
    {
      nom: "Issa Dramé",
      moyenne: 25,
      citation: "Allah is one !"
    },

    {
      nom: "Malick Sagnan",
      moyenne: 20,
      citation: null
    }
  ]);

  // Etats
  useEffect(() =>{
    console.log("[App.js] useEffect");

    return() =>{
      console.log("[App.js] useEffect (didUnmount)");

    }
  },[]);

  useEffect(() => {
    console.log("[App.js] useEffect (didUpdate)");
  });

  // Méthodes
  const buttonClickHandler = nouveauNom => {
    const nouveauEleves = [...eleves];
    nouveauEleves[0].nom = nouveauNom;

    setEleves(nouveauEleves);
  }
    return(
      <div className="App">
        <h1>Bienvenu dans la classe React js !</h1>
        <button onClick={buttonClickHandler.bind(this, "Mariam Dramé Cissé")}>Change name</button>
        <Eleve
          nom={eleves[0].nom}
          moyenne={eleves[0].moyenne}
          clic={() => buttonClickHandler('Inna')}
        >
          {eleves[0].citation}
        </Eleve>

        <Eleve
          nom={eleves[1].nom}
          moyenne={eleves[1].moyenne}
          clic={() => buttonClickHandler('Fafa')}
        >
          {eleves[1].citation}
        </Eleve>
      </div>
    );
  }

export default App;
