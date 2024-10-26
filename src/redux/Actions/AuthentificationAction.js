import axios from 'axios';
import { connexionURL } from '../../services/dummyJsonApi';

export const LOGOUT_USER = 'LOGOUT_USER';


const mechanicUser = [
  {username: "emilys",password: "emilyspass"},
  {username: "michaelw", password: "michaelwpass"},
  {username: "sophiab", password: "sophiabpass"}
]
export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });

    
    const response = await axios.post(`${connexionURL}`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(response.data);
    const user = response.data;
    const isMechanic = mechanicUser.some(
      (mechanic) => mechanic.username === userData.username && mechanic.password === userData.password
    );
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { ...user, isMechanic}
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};


export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
