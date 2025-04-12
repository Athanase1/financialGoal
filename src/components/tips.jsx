import React from 'react';

export default function Tips() {
    const tips = [
        {
            title: "Faire l'inventaire complet",
            content: "Commence par noter tous tes abonnements — même ceux que tu oublies (genre applis mobiles ou services annuels)."
        },
        {
            title: "Suivre les dates de renouvellement",
            content: "Note les dates d’échéance et configure des rappels pour éviter les renouvellements surprises."
        },
        {
            title: "Centraliser les paiements",
            content: "Essaie de regrouper les paiements le même jour (si possible), ça t’aide à mieux prévoir tes dépenses mensuelles."
        },
        {
            title: "Évaluer l’usage réel",
            content: "Pose-toi la question : est-ce que j’utilise ce service ? Si ça dort depuis 3 mois... c’est sûrement à résilier."
        },
        {
            title: "Passer à un abonnement annuel (si rentable)",
            content: "Si tu es sûr de garder un service, les plans annuels sont souvent moins chers sur le long terme."
        },
        {
            title: "Vérifier les doublons",
            content: "Tu n’as pas besoin de Netflix **et** Disney+ **et** Amazon Prime **et**... bref, choisis selon ce que tu regardes vraiment."
        },
        {
            title: "Partager les abonnements",
            content: "Profite des formules familiales ou groupes (Spotify, Netflix, YouTube...) pour diviser les coûts avec des proches."
        },
        {
            title: "Chercher des réductions",
            content: "Étudiants, forfaits mobiles, cartes bancaires... plein d’offres cachées ou remises peuvent s’appliquer."
        },
        {
            title: "Utiliser une carte virtuelle",
            content: "Pour tester un service sans engagement, utilise une carte bancaire virtuelle que tu peux bloquer ensuite."
        },
        {
            title: "Faire une révision tous les 3 mois",
            content: "Bloque 15 min tous les trimestres pour faire le point : je garde ou j’annule ? Tu verras, c’est libérateur."
        }
    ];

    return (
        <div className="container1 w-100 rounded bg-light">
            <h2 className=" mb-4 display-4 text-center  text-success w-100 fw-bold">Astuces pour mieux gérer vos abonnements<i className="bi bi-magic text-success"></i></h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-auto w-100 ">
                {tips.map((tip, index) => (
                        <div className="card h-100 min-h col-10 col-lg-2  col-md-4 rounded-5 overflow-hidden ms-1 mb-1" key={index}>
                            <div className="card-body ">
                                <h5 className="card-title">{tip.title}</h5>
                                <p className="card-text">{tip.content}</p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}
