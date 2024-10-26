// factureReducer.js
import { ADD_FACTURE } from '../Actions/factureAction';

const initialState = {
  factures: [],
};

const factureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACTURE:
      return {
        ...state,
        factures: [...state.factures, action.payload],
      };

    default:
      return state;
  }
};

export default factureReducer;
