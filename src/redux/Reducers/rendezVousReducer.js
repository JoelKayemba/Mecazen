// rendezVousReducer.js
import { ADD_TO_RENDEZ_VOUS, UPDATE_RENDEZ_VOUS } from '../Actions/rendezVousAction';

const etatInitial = {
  rendezVous: [],
  erreur: null,
};

const rendezVousReducer = (state = etatInitial, action) => {
  switch (action.type) {
    case ADD_TO_RENDEZ_VOUS:
      // Ajouter le rendez-vous à la liste
      return {
        ...state,
        rendezVous: [...state.rendezVous, action.payload],
      };

    case UPDATE_RENDEZ_VOUS:
      return {
        ...state,
        rendezVous: state.rendezVous.map((rdv) =>
          rdv.id === action.payload.id
            ? {
                ...rdv,
                status: action.payload.status, // Mise à jour de l'état
                reason: action.payload.reason || '', // Ajout du commentaire si refusé
                price: action.payload.price,
                duration: action.payload.duration
              }
            : rdv
        ),
      };

    default:
      return state;
  }
};

export default rendezVousReducer;
