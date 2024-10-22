// reparationAction.js

export const FETCH_REPARATIONS = 'FETCH_REPARATIONS';

// Action pour récupérer les réparations avec uniquement le titre et le prix
export const fetchReparations = () => {
  return {
    type: FETCH_REPARATIONS,
    payload: [
      { title: 'Diagnostic de véhicule', price: 50 },
      { title: 'Changement d’huile', price: 30 },
      { title: 'Service de pneus', price: 60 },
      { title: 'Réparation des freins', price: 80 },
      { title: 'Réparation de suspension', price: 120 },
      { title: 'Remplacement de batterie', price: 90 },
      { title: 'Système d’échappement', price: 150 },
      { title: 'Climatisation et chauffage', price: 110 },
      { title: 'Remplacement de courroies', price: 100 },
      { title: 'Réparation du moteur', price: 300 },
      { title: 'Réparation de transmission', price: 400 },
      { title: 'Révision complète', price: 200 },
      { title: 'Réparation d’embrayage', price: 250 },
      { title: 'Réparation des éclairages', price: 40 },
      { title: 'Changement de filtres', price: 20 },
      { title: 'Révision de sécurité', price: 60 },
      { title: 'Remplacement de silencieux', price: 130 },
      { title: 'Réparation de pare-brise', price: 180 },
      { title: 'Réparation électronique', price: 220 },
      { title: 'Service de remorquage', price: 100 }
    ],
  };
};
