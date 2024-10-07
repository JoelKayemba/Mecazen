// paiementReducer.js

import { ADD_PAYMENT_METHOD, EDIT_PAYMENT_METHOD, DELETE_PAYMENT_METHOD } from '../Actions/paiementAction';

const initialState = {
    paymentMethods: []
};

const paiementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: [...state.paymentMethods, action.payload]
            };

        case EDIT_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: state.paymentMethods.map((method) =>
                    method.id === action.payload.id ? { ...method, ...action.payload.updatedPaymentMethod } : method
                )
            };

        case DELETE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: state.paymentMethods.filter((method) => method.id !== action.payload)
            };

        default:
            return state;
    }
};

export default paiementReducer;
