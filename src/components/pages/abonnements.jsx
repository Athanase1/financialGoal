import { dataAbonnements } from "../../assets/abonnement";
import CardAbonnement from "../card-abon/card";
import "../styles/abonnement.css";
import Tips from "../tips";

export default function Abonnements() {
  return (
    <div className="d-flex flex-column container justify-content-center align-items-center">
      <h1 className="display-1 text-center">Mes abonnements</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        {dataAbonnements.map((abo, index) => ( // Définir index ici
          <div className="col-sm-12 col-md-6 col-lg-4 " key={index}>
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
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <Tips />
      </div>
    </div>
  );
}
