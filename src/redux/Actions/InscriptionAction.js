// inscriptionActions.js
import axios from 'axios';
import { inscriptionURL } from '../../services/dummyJsonApi';

// Action Types
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action pour l'inscription de l'utilisateur
export const inscriptionUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });

        const response = await axios.post(`${inscriptionURL}`, userData);
        console.log(response.data);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Action pour la déconnexion de l'utilisateur
export const logoutUser = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
};
