// mechanicAction.js
export const FETCH_MECHANICS = 'FETCH_MECHANICS';
export const FETCH_MECHANICS_ERROR = 'FETCH_MECHANICS_ERROR';

// Action pour récupérer les mécaniciens depuis l'API dummyjson
export const fetchMechanics = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/users'); // Appel à l'API
      const data = await response.json();

      // Sélectionner trois mécaniciens spécifiques selon leur nom
      const selectedMechanics = data.users.filter(user =>
        ['Michael Williams', 'Emily Johnson', 'Sophia Brown'].includes(`${user.firstName} ${user.lastName}`)
      ).map(user => ({
        name: `${user.firstName} ${user.lastName}`,
        specialty: 'Mécanicien général', 
      }));

      dispatch({
        type: FETCH_MECHANICS,
        payload: selectedMechanics,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MECHANICS_ERROR,
        payload: 'Erreur lors de la récupération des mécaniciens',
      });
    }
  };
};
