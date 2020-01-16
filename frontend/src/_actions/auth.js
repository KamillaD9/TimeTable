import axios from 'axios';
import { history } from '../_helpers';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const host = window.location.host.split(':')[0];
export const ROOT_URL = 'http://127.0.0.1:8000/api/v1';


export function signinUser({username, password}) {
    return function(dispatch) {
	// send username/password
	// .then - success, .catch - fail.
	console.log(">>>> src/actions/auth.js:");
	console.log("Sending POST request from signinUser.");
	/* console.log("Username: " + username);
	   console.log("Password: " + password);	*/
	axios.post(`${ROOT_URL}/rest-auth/login/`, {username, password}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
	     .then(response => {
		 console.log("Successfully signed in!");
		 // if request is good
		 // - update state to indicate that I'm signed in
		 dispatch({ type: AUTH_USER});
		 console.log("Auth action dispatched(to flip auth state to true)");
		 // - save JWT token
			 console.log(localStorage.getItem('token') );
		 localStorage.setItem('token', response.data.key);
		 console.log(localStorage.getItem('token') );
		 console.log("Token saved!");
		 // - redirect to /feature
		 history.push('/');
		 console.log("Redirected to /");

	     })
	     .catch(() => {
		 // if request is bad
		 dispatch(authError('Bad Login Info'));
	     })

    };
}


export function signupUser({nickname, password, full_name, email, group_number, course}) {
    return function(dispatch) {
	// send username/password
	// .then - success, .catch - fail.
	axios.post(`${ROOT_URL}/rest-auth/register/`, {nickname, password, full_name, email, group_number, course})
	     .then(response => {
		 // if request is good
		 // - update state to indicate that I'm signed up
		 dispatch({ type: AUTH_USER});
		 // - save JWT token
		 localStorage.setItem('token', response.data.token);
		 // - redirect to /feature
		 history.push('/');
	     })
	     .catch(() => {
		 // if request is bad - add error to the state.
		     dispatch(authError('User with this username already exists'));
	     })

    };
}



export function signoutUser() {
    // delete token and signout
    console.log(">>>> src/actions/auth.js:");
    console.log("Signing out user, deleting token from localStorage.");
    localStorage.removeItem('token');
    console.log("Redirecting to /, and dispatching action UNAUTH_USER.");
    history.push('/');
    return {
	type: UNAUTH_USER
    };
}

export function authError(error) {
    return {
	type: AUTH_ERROR,
	payload: error
    };
}

export function fetchMessage() {
    const config = {
	headers:  { authorization: localStorage.getItem('token')}
    };

    return function(dispatch) {
	axios.get(ROOT_URL, config)
	     .then(response => {
		 /* console.log(response);*/
		 dispatch({
		     type: FETCH_MESSAGE,
		     payload: response.data.message
		 });
	     });
    }
}