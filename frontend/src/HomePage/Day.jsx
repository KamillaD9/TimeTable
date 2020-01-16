import React, { Component } from 'react';

export default class Day extends Component {
    renderBody () {
    	return (
                [
                    <div className="col-md-6 col-md-offset-3">
						{this.props.name}
						{this.props.periods}
                    </div>
                ]
            );
    }




    render() {
        return (
            <div>
                { this.renderBody() }
            </div>
        );

    }
}
