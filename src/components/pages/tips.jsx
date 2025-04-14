import React from "react";
import { tips } from "../../assets/abonnement";
import Img1 from "../../assets/img/astuces.jpg";
export default function Tips() {
  return (
    <div className=" container w-100 rounded d-flex flex-column">
      <h2 className=" mb-4 display-6 text-center  text-success w-100 fw-bold">
        Astuces pour mieux gérer vos abonnements
        <i className="bi bi-magic text-success"></i>
      </h2>
      <img
        src={Img1}
        alt="astuces"
        className="col-12 col-lg-8 col-md-10 rounded"
      />
      <p className="text-start col-12 col-lg-8 col-md-10 mt-4 fs-5 fs-sm-5 fs-md-4 fs-lg-5 fs-xl-1">
        Pour mieux gérer tes abonnements, commence par faire un inventaire
        complet, y compris les applis oubliées. Note les dates de renouvellement
        et utilise des rappels. Centralise tes paiements pour mieux anticiper.
        Évalue régulièrement l’usage de chaque service et résilie ceux
        inutilisés. Privilégie les abonnements annuels si c’est rentable, évite
        les doublons et partage les offres familiales pour économiser. Cherche
        des réductions spéciales (étudiants, banques…). Pour tester sans risque,
        utilise une carte virtuelle. Enfin, fais un point tous les 3 mois : tu
        gardes ou tu coupes. Simple, efficace, et ça allège ton budget !
      </p>
      <div className="d-flex flex-column  col-12 col-lg-8 col-md-10">
        {tips.map((tip, index) => (
          <div
            className="w-100 rounded-5 mb-1"
            key={index}
          >
            <div className="mb-2">
              <h5 className="card-title">{index + 1} - {tip.title}</h5>
              <p className="card-text">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
