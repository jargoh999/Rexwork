import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { thunk } from 'redux-thunk';
import signupReducer from './auth/reducer';


const rootReducer = combineReducers({
auth:signupReducer,
});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

