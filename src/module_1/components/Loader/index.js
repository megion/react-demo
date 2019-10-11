import React, { Component } from "react"
import PropTypes from "prop-types"

class Loader extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
}


export default Loader
