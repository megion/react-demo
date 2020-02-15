import React, { Component } from "react"
import { connect } from "react-redux"
import { signIn } from "../ducks/auth"

class EventsPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Events</p>
      </div>
    )
  }
}

export default connect(
  null,
  { signIn } // map reducer function to props
)(EventsPage)
