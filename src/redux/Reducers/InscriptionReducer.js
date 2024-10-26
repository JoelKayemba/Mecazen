// inscriptionReducer.js
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_USER } from '../Actions/InscriptionAction';

const initialState = {
    loading: false,
    user: null,
    error: null,
    isUser: false,
};

const inscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload, isUser: true };
        case REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT_USER:
            return { ...state, loading: false, user: null, isUser: false, error: null };
        default:
            return state;
    }
};

export default inscriptionReducer;
