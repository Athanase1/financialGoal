import { useEffect, useState } from "react";
import "../styles/abonnement.css";


export default function CardAbonnement({ nom, prix, freq, date_debut, actif }) {
    const [freqMensuel, setfreq] = useState(false)
    useEffect(() =>{
      if(freq =="mensuel"){
        setfreq(!freqMensuel)
      }
    },[])
  return (
    
      <div className={freqMensuel ? "card m-2" : "card bg-warning"}>
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Prix: {prix}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Fréquence : {freq}
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Date de début: {date_debut}
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          État: {actif ? "En cours" : "Expiré"}
        </h6>
        <div className="d-flex flex-row justify-content-between">
          <a href="#" className="btn bg-success d-flex flex-row w-30 justify-content-center">
            <i className="bi bi-pencil-square"></i> Editer
          </a>
          <a href="#" className="btn btn-success ms-3 d-flex flex-row w-50 justify-content-center">
            <i className="bi bi-trash"></i> Supprimer
          </a>
        </div>
      </div>
      </div>
   
  );
}
