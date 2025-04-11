import { dataAbonnements } from "../../assets/abonnement";
import CardAbonnement from "../card-abon/card";
import "../styles/abonnement.css";
import Tips from "../tips";

export default function Abonnements() {
  return (
    <div className="container  overflow-hidden w-100 ">
      <h1 className="display-1 text-center">Mes abonnements</h1>
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
