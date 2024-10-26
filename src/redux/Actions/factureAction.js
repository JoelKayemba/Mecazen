// factureAction.js
export const ADD_FACTURE = 'ADD_FACTURE';

// Action pour ajouter une facture
export const addFacture = (factureData) => {
  return {
    type: ADD_FACTURE,
    payload: factureData,
  };
};
