// rendezVousAction.js
export const ADD_TO_RENDEZ_VOUS = 'ADD_TO_RENDEZ_VOUS';
export const UPDATE_RENDEZ_VOUS = 'UPDATE_RENDEZ_VOUS';

export const addToRendezVous = (reservation) => {
    console.log("Action addToRendezVous appelée avec:", reservation); // Log de vérification
    return {
      type: ADD_TO_RENDEZ_VOUS,
      payload: { ...reservation, status: 'En attente' }, // Ajout de l'état initial
    };
  };
  
  export const updateRendezVous = (id, updates) => {
    console.log("Action updateRendezVous appelée avec:", { id, ...updates }); // Log de vérification
    return {
      type: UPDATE_RENDEZ_VOUS,
      payload: { id, ...updates }, // Met à jour un rendez-vous spécifique avec ses détails
    };
  };
  
