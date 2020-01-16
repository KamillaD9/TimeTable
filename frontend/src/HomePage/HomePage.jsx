import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchTimetable} from '../_actions'
import { userActions } from '../_actions';

import Day from './Day'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchDays()
    }


    renderLoginLogout() {
        if(this.props.authenticated) {
            return (
                [
                    <div className="col-md-6 col-md-offset-3">
                    <h1>Hi!</h1>
                        <p><Link to="/logout">Logout</Link></p>
                    </div>
                ]
            );

        } else {
            return (
                [
                    <div className="col-md-6 col-md-offset-3">
                    <h1>Hi!</h1>
                        <p><Link to="/login">Login</Link></p>
                    </div>
                ]
            );
        }
    }

    renderDays() {
        const days = this.props.days;

        if (!days) { return ( <div>tet</div> ); };

        return days.map((day) => {
            return (
                    <Day
                      name={day.name}
                      periods={day.periods}
                    />
                )
	    });
    }

    render() {
        return (
	    <div>
		{ this.renderLoginLogout() }
		{ this.renderDays() }

	    </div>
	);

    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user,
            users ,
        authenticated: state.auth.authenticated,
        days: state.days.all
    };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    fetchDays: fetchTimetable

}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };