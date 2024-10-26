// rendezVousAction.js
export const ADD_TO_RENDEZ_VOUS = 'ADD_TO_RENDEZ_VOUS';
export const UPDATE_RENDEZ_VOUS = 'UPDATE_RENDEZ_VOUS';

export const addToRendezVous = (reservation) => {
    return {
      type: ADD_TO_RENDEZ_VOUS,
      payload: { ...reservation, status: 'En attente' }, // Ajout de l'état initial
    };
  };
  
  export const updateRendezVous = (id, updates) => {
    return {
      type: UPDATE_RENDEZ_VOUS,
      payload: { id, ...updates }, // Met à jour un rendez-vous spécifique avec les détails
    };
  };
  
