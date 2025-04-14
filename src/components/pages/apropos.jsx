export default function Apropos() {
  return (
    <div className="container  p-1">
      <h2 className=" display-1 text-dark  fw-bold text-center border-bottom border-5 border-black py-2">À propos </h2>
      <p className="fs-6 fs-sm-1 fs-md-4 fs-lg-3 fs-xl-1">
        <strong className="fw-bold display-6">FinancialGoal</strong> est une application conçue pour vous
        aider à gérer facilement tous vos abonnements en un seul endroit.
      </p>
      <p className="text-start fs-6 fs-sm-1 fs-md-4 fs-lg-3 fs-xl-1">
        Aujourd’hui, il est facile d’oublier combien d’abonnements on a — entre
        les services de streaming, les logiciels, les abonnements de sport ou
        encore les applications mobiles. Et ces oublis peuvent coûter cher sur
        le long terme.
      </p>
      <p className="display-6 text-dark text-start fw-bold">Avec FinancialGoal, vous pouvez :</p>
      <ul className="list-group shadow">
        <li className="list-group-item list-group-item-success fw-bold">
          Ajouter et suivre vos abonnements mensuels ou annuels
        </li>
        <li className="list-group-item list-group-item-success fw-bold">
          Être alerté avant un renouvellement
        </li>
        <li className="list-group-item list-group-item-success fw-bold">
          Gérer votre budget plus efficacement
        </li>
        <li className="list-group-item list-group-item-success fw-bold">
          Éviter les paiements surprises
        </li>
      </ul>
      <p className="text-start">
        Notre objectif est de vous aider à garder le contrôle sur vos dépenses
        récurrentes pour atteindre plus sereinement vos objectifs financiers.
      </p>
      <p className="text-success fw-bold">Votre budget, vos règles.</p>
    </div>
  );
}
