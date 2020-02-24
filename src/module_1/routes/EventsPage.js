import React, { Component } from "react"
import EventList from "../components/EventList"

export class EventsPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Events</p>
        <EventList />
      </div>
    )
  }
}
