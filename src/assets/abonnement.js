export const dataAbonnements = [
    {
      "id": 1,
      "nom": "Netflix",
      "prix": 13.99,
      "frequence": "mensuel",
      "date_debut": "2024-11-10",
      "actif": true
    },
    {
      "id": 2,
      "nom": "Spotify",
      "prix": 9.99,
      "frequence": "mensuel",
      "date_debut": "2023-06-15",
      "actif": true
    },
    {
      "id": 3,
      "nom": "Amazon Prime",
      "prix": 49.00,
      "frequence": "annuel",
      "date_debut": "2024-01-01",
      "actif": true
    },
    {
      "id": 4,
      "nom": "Adobe Creative Cloud",
      "prix": 59.99,
      "frequence": "mensuel",
      "date_debut": "2023-12-05",
      "actif": false
    },
    {
      "id": 5,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
    {
      "id": 6,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
    {
      "id": 7,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
    {
      "id": 8,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
    {
      "id": 9,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
    {
      "id": 10,
      "nom": "Canal+",
      "prix": 19.90,
      "frequence": "mensuel",
      "date_debut": "2023-03-22",
      "actif": true
    },
  ]
  export function calculerMensuel() {
    let totalMensuel = 0;
  
    dataAbonnements.forEach((abo) => {
      if (abo.actif) {  // Vérifie si l'abonnement est actif
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
  
    return totalMensuel;  // Retourne le coût total des abonnements actifs par mois
  }
  