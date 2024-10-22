// historiqueAction.js
export const ADD_TO_HISTORIQUE = 'ADD_TO_HISTORIQUE';

// Action pour ajouter une réservation à l'historique
export const addToHistorique = (reservation) => {
  return {
    type: ADD_TO_HISTORIQUE,
    payload: reservation,
  };
};
