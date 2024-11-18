 import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes'
import axios from 'axios';

export const signupRequest = (userData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
        const response = await axios.post('http://localhost:3000/api/users', userData);
        if(response.data.token){
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: SIGNUP_SUCCESS,payload: response.data});
        }
        console.log(response);
    } catch (error) {
        if (error.response && error.response.status === 400) {
        dispatch({
            type: SIGNUP_FAILURE,
            payload: error.response.data.message,
        });
        console.error(error);
        }
    }
};




