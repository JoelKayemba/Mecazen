// rendezVousAction.js
export const ADD_TO_RENDEZ_VOUS = 'ADD_TO_RENDEZ_VOUS';
export const UPDATE_RENDEZ_VOUS = 'UPDATE_RENDEZ_VOUS';
export const MODIFY_RENDEZ_VOUS = 'MODIFY_RENDEZ_VOUS';
export const VALIDATE_MODIFICATION = 'VALIDATE_MODIFICATION';
export const ANNULER_RENDEZ_VOUS = 'ANNULER_RENDEZ_VOUS';

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

  // Action pour modifier un rendez-vous existant
// Action pour modifier un rendez-vous existant
export const modifyRendezVous = (id, modifications) => {
    return {
        type: MODIFY_RENDEZ_VOUS,
        payload: { id, modifications, modificationStatus: 'Modification en attente' },
    };
};

// Action pour valider ou refuser une modification de rendez-vous
export const validateModification = (id, isAccepted, reason) => {
    return {
        type: VALIDATE_MODIFICATION,
        payload: {
            id,
            modificationStatus: isAccepted ? 'Modification acceptée' : 'Modification refusée',
            reason,
        },
    };
};

export const annulerRendezVous = (id) => {
    return {
        type: ANNULER_RENDEZ_VOUS,
        payload: { id },
    };
};
  
