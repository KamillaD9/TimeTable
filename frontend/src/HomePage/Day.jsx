import React, { Component } from 'react';

export default class Day extends Component {
    renderBody () {
        const periods = this.props.periods;
        if (!periods) { return ( <div>net par</div> ) };
        return periods.map((period) => {
            return (
                <div>
                    <p>Класс { period.classroom }</p>
                Предмет id { period.subject}
                </div>
                )
	    });
    }




    render() {
        return (
            <div>
                { this.renderBody() }
            </div>
        );

    }
}
