// mechanicAction.js
export const FETCH_MECHANICS = 'FETCH_MECHANICS';
export const FETCH_MECHANICS_ERROR = 'FETCH_MECHANICS_ERROR';

// Action pour récupérer les mécaniciens depuis l'API 
export const fetchMechanics = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/users'); 
      const data = await response.json();

      // on specifie trois utilisateurs comme nos mecaniciens
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
