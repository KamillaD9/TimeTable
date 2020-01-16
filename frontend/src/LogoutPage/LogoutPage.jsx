import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../_actions/auth';
//
class LogoutPage extends Component {
    componentWillMount(){
	console.log(">>>> src/components/auth/signout.js:");
	console.log("Calling signoutUser action creator.");
	this.props.logout();
    }
    render(){
	return (
	    <div>Signed out!</div>
	);
    }
}



const actionCreators = {
    logout: actions.signoutUser
};

function mapState(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

const connectedLogoutPage = connect(mapState, actionCreators)(LogoutPage);
export { connectedLogoutPage as LogoutPage };