import React, {useEffect} from "react";
import "./Eleve.css";

function Eleve(props) {
  // Etats
  useEffect(() => {
    console.log("[Eleve.js] useEffect");

    return () => {
      console.log("[Eleve.js] useEffect (didUnmount)");

    }
  }, []);

  useEffect(() => {
    console.log("[Eleve.js] useEffect (didUpdate)");
  });
  return(
      <div className="eleve">
        <h2 onClick={props.clic}>{props.nom}</h2>
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
        <p>Age : {Math.floor(Math.random() * 100)}</p>
        <i>{props.children}</i>
      </div>
    );
  }


export default Eleve;
