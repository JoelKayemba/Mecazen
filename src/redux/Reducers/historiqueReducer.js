// historiqueReducer.js
import { ADD_TO_HISTORIQUE } from '../Actions/historiqueAction';

const initialState = {
  historique: [],
};

const historiqueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORIQUE:
      return {
        ...state,
        historique: [...state.historique, action.payload], // Ajouter la réservation à l'historique
      };
    default:
      return state;
  }
};

export default historiqueReducer;