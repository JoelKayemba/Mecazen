const etatInitial = {
    paiements: [],
    erreur: null,
};

const paiementReducer = ( state = etatInitial, action) => {
    return etatInitial;
}

export default paiementReducer;