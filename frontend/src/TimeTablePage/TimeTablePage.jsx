import React, { Component } from 'react'
import Timetable from 'react-timetable-events'

class TimeTablePage extends  React.Component {
  render () {
    return (
      <Timetable events={this.state.events}/>
    )
  }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedTimeTablePage = connect(mapState, actionCreators)(TimeTablePage);
export { connectedTimeTablePage as TimeTablePage };