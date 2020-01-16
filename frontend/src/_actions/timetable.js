import axios from 'axios';
import { history } from '../_helpers';

const host = window.location.host.split(':')[0];
export const ROOT_URL = 'http://127.0.0.1:8000/api/v1';

export const FETCH_TIMETABLE = 'FETCH_TIMETABLE';

export function fetchTimetable(slug) {
    return function(dispatch) {
    	console.log(localStorage.getItem('token') );
	axios.get(`${ROOT_URL}/timetable/`, { 'headers': { 'Authorization': 'Token ' + localStorage.getItem('token') } })
	     .then(response => {

		 dispatch({
		     type: FETCH_TIMETABLE,
		     payload: response
		 });
	     });
    };
}