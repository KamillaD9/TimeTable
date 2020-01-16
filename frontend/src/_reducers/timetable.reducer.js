import { FETCH_TIMETABLE } from '../_actions/';

/* List of all posts and an active post  */
const INITIAL_STATE = {
    all: []
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
	case FETCH_TIMETABLE:
	    return {...state, all: action.payload.data };
	default:
	    return state;
    }
}