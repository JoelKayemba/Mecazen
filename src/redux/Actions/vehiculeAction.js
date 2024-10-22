import axios from 'axios';

// Action Types
export const ADD_VEHICULE = 'ADD_VEHICULE';
export const EDIT_VEHICULE = 'EDIT_VEHICULE';
export const DELETE_VEHICULE = 'DELETE_VEHICULE';
export const SEARCH_RECALLS = 'SEARCH_RECALLS';
export const RESET_RECALLS = 'RESET_RECALLS';
export const ERROR_SEARCH = 'ERROR_SEARCH';

// API URL 
const NHTSA_RECALLS_API_URL = 'https://api.nhtsa.gov/recalls/recallsByVehicle';

// Action pour ajouter un véhicule
export const addVehicule = (vehicule) => {
  return {
    type: ADD_VEHICULE,
    payload: vehicule,
  };
};

// Action pour éditer un véhicule
export const editVehicule = (id, vehicule) => {
  return {
    type: EDIT_VEHICULE,
    payload: { id, ...vehicule },
  };
};

// Action pour supprimer un véhicule
export const deleteVehicule = (id) => {
  return {
    type: DELETE_VEHICULE,
    payload: id,
  };
};

// Action pour rechercher les rappels (recalls) du véhicule
export const searchRecalls = (brand, model, year) => async (dispatch) => {
  try {
    const response = await axios.get(`${NHTSA_RECALLS_API_URL}?make=${brand}&model=${model}&modelYear=${year}`);
    const recalls = response.data.results || [];

    // Dispatch vers le reducer en cas de succès
    dispatch({
      type: SEARCH_RECALLS,
      payload: recalls,
    });
  } catch (error) {
    // Capture des détails de l'erreur
    const errorMessage = error.response && error.response.data ? 
      error.response.data.message || error.response.data :
      error.message;

    // Dispatch l'erreur vers le reducer
    dispatch({
      type: ERROR_SEARCH,
      payload: errorMessage,
    });

    // Affichage dans la console pour le mode développement
    console.error("Erreur lors de la recherche des rappels :", errorMessage);
  }
};

// Action pour réinitialiser les rappels
export const resetRecalls = () => {
  return {
    type: RESET_RECALLS,
  };
};
