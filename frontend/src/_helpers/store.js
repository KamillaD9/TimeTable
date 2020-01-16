import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import { AUTH_USER } from '../_actions/types';
const token = localStorage.getItem('token');
// if user has a token - sign him in



const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

if (token) {
    store.dispatch({ type: AUTH_USER });
    /* console.log(">>>> src/index.js:");
     * console.log("localStorage contains token, so sign user in.");    */
}