export const dataAbonnements = [
  {
    id: 1,
    nom: "Netflix",
    prix: 13.99,
    frequence: "mensuel",
    date_debut: "2024-11-10",
    actif: true,
  },
  {
    id: 2,
    nom: "Spotify",
    prix: 9.99,
    frequence: "mensuel",
    date_debut: "2023-06-15",
    actif: true,
  },
  {
    id: 3,
    nom: "Amazon Prime",
    prix: 49.0,
    frequence: "annuel",
    date_debut: "2024-01-01",
    actif: true,
  },
  {
    id: 4,
    nom: "Adobe Creative Cloud",
    prix: 59.99,
    frequence: "mensuel",
    date_debut: "2023-12-05",
    actif: false,
  },
  {
    id: 5,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
  {
    id: 6,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
  {
    id: 7,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
  {
    id: 8,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
  {
    id: 9,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
  {
    id: 10,
    nom: "Canal+",
    prix: 19.9,
    frequence: "mensuel",
    date_debut: "2023-03-22",
    actif: true,
  },
];
export function calculerMensuel() {
  let totalMensuel = 0;

  dataAbonnements.forEach((abo) => {
    if (abo.actif) {
      // Vérifie si l'abonnement est actif
      // Si l'abonnement est annuel, divise le prix par 12 pour obtenir le coût mensuel
      if (abo.frequence === "annuel") {
        totalMensuel += abo.prix / 12;
      }
      // Si l'abonnement est déjà mensuel, ajouter directement le prix
      else if (abo.frequence === "mensuel") {
        totalMensuel += abo.prix;
      }
    }
  });

  return totalMensuel; // Retourne le coût total des abonnements actifs par mois
}
export const tips = [
  {
    title: "Faire l'inventaire complet",
    content:
      "Commence par noter tous tes abonnements — même ceux que tu oublies (genre applis mobiles ou services annuels).",
  },
  {
    title: "Suivre les dates de renouvellement",
    content:
      "Note les dates d’échéance et configure des rappels pour éviter les renouvellements surprises.",
  },
  {
    title: "Centraliser les paiements",
    content:
      "Essaie de regrouper les paiements le même jour (si possible), ça t’aide à mieux prévoir tes dépenses mensuelles.",
  },
  {
    title: "Évaluer l’usage réel",
    content:
      "Pose-toi la question : est-ce que j’utilise ce service ? Si ça dort depuis 3 mois... c’est sûrement à résilier.",
  },
  {
    title: "Passer à un abonnement annuel (si rentable)",
    content:
      "Si tu es sûr de garder un service, les plans annuels sont souvent moins chers sur le long terme.",
  },
  {
    title: "Vérifier les doublons",
    content:
      "Tu n’as pas besoin de Netflix **et** Disney+ **et** Amazon Prime **et**... bref, choisis selon ce que tu regardes vraiment.",
  },
  {
    title: "Partager les abonnements",
    content:
      "Profite des formules familiales ou groupes (Spotify, Netflix, YouTube...) pour diviser les coûts avec des proches.",
  },
  {
    title: "Chercher des réductions",
    content:
      "Étudiants, forfaits mobiles, cartes bancaires... plein d’offres cachées ou remises peuvent s’appliquer.",
  },
  {
    title: "Utiliser une carte virtuelle",
    content:
      "Pour tester un service sans engagement, utilise une carte bancaire virtuelle que tu peux bloquer ensuite.",
  },
  {
    title: "Faire une révision tous les 3 mois",
    content:
      "Bloque 15 min tous les trimestres pour faire le point : je garde ou j’annule ? Tu verras, c’est libérateur.",
  },
];
