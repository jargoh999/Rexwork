import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    message: '',
    user:null,
    error:null,
    jwt:null,
    projectSize:0
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                user: action.payload.user,
                jwt: action.payload.token,
                projectSize:action.payload.projectSize,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default signupReducer;
