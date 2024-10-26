export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';
export const EDIT_PAYMENT_METHOD = 'EDIT_PAYMENT_METHOD';
export const DELETE_PAYMENT_METHOD = 'DELETE_PAYMENT_METHOD';

// Action pour ajouter le moyen de paiement
export const addPaymentMethod = (paymentMethod) => {
    return {
        type: ADD_PAYMENT_METHOD,
        payload: paymentMethod,
    };
};

// Action pour modifier le moyen de paiement
export const editPaymentMethod = (id, updatedPaymentMethod) => {
    return {
        type: EDIT_PAYMENT_METHOD,
        payload: { id, updatedPaymentMethod },
    };
};

// Action pour supprimer le moyen de paiement
export const deletePaymentMethod = (id) => {
    return {
        type: DELETE_PAYMENT_METHOD,
        payload: id,
    };
};