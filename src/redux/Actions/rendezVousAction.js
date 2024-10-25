// rendezVousAction.js
export const ADD_TO_RENDEZ_VOUS = 'ADD_TO_RENDEZ_VOUS';
// action pour ajouter une reservation a l'historique des rendezvous
export const addToRendezVous = (reservation) => {
    return {
        type: ADD_TO_RENDEZ_VOUS,
        payload: reservation,
    };
   
};

