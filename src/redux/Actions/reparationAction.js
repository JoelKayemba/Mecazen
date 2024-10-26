// reparationAction.js

export const FETCH_REPARATIONS = 'FETCH_REPARATIONS';

// Action pour récupérer les réparations avec uniquement le titre et le prix
export const fetchReparations = () => {
  return {
    type: FETCH_REPARATIONS,
    payload: [
      { title: 'Diagnostic de véhicule' },
      { title: 'Changement d’huile' },
      { title: 'Service de pneus' },
      { title: 'Réparation des freins' },
      { title: 'Réparation de suspension' },
      { title: 'Remplacement de batterie' },
      { title: 'Système d’échappement' },
      { title: 'Climatisation et chauffage' },
      { title: 'Remplacement de courroies' },
      { title: 'Réparation du moteur'},
      { title: 'Réparation de transmission' },
      { title: 'Révision complète' },
      { title: 'Réparation d’embrayage' },
      { title: 'Réparation des éclairages' },
      { title: 'Changement de filtres' },
      { title: 'Révision de sécurité'},
      { title: 'Remplacement de silencieux' },
      { title: 'Réparation de pare-brise'},
      { title: 'Réparation électronique' },
      { title: 'Service de remorquage' }
    ],
  };
};
