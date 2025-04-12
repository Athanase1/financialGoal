import { useEffect, useState } from "react";
import { calculerMensuel, dataAbonnements } from "../../assets/abonnement";
import CardAbonnement from "../card-abon/card";
import "../styles/abonnement.css";
import Tips from "../tips";

export default function Abonnements() {
  const [totalMensuel ,setTotal] = useState(0)
  const [bgBon, setBg] = useState(true)
 
  useEffect(() =>{
      const MontantMensuel = calculerMensuel().toFixed(2)
       setTotal(MontantMensuel)
  }, [dataAbonnements])
  useEffect(() => {
      if (totalMensuel > 100) {
        setBg(false);
      } else {
        setBg(true);
      }
    }, [totalMensuel]);
  return (
    <div className="container-fluid overflow-hidden w-100 ">
        <div className="d-flex w-100 justify-content-end flex-wrap">
                
                <h1 className="fs-6 fs-sm-5 fs-md-4 fs-lg-3 fs-xl-1">Total Mensuel:<span className={bgBon ? "badge bg-success": "badge bg-danger"}>{totalMensuel}</span> $</h1>
            </div>
      <h1 className=" fs-2 fs-sm-5 fs-md-4 fs-lg-1 fs-xl-1 w-100">Mes abonnements</h1>
      <div className="d-flex flex-row flex-lg-wrap overflow-auto w-100">
        {dataAbonnements.map((abo, index) => ( // Définir index ici
          <div className="m-2" key={index}>
            <CardAbonnement
              key={abo.id}
              nom={abo.nom}
              prix={abo.prix}
              freq={abo.frequence}
              date_debut={abo.date_debut}
              actif={abo.actif}
            />
          </div>
        ))}
      </div>
      
        <Tips />
     
    </div>
  );
}
