import React, { Component } from "react"
import PropTypes from "prop-types"
import dictionaries from "./dictionaries"

class LangProvider extends Component {
  static propTypes = {
    language: PropTypes.string,
  }

  static childContextTypes = {
    dictionary: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  getChildContext = () => {
    return {
      dictionary: dictionaries[this.props.language],
    }
  }

  render() {
    return (
      <div>
        {/* all children components are inserted here */}
        {this.props.children}
      </div>
    )
  }
}

export default LangProvider
