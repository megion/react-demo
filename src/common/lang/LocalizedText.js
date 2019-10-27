import React, { Component } from "react"
import PropTypes from "prop-types"
import dictionaries from "./dictionaries"

class LocalizedText extends Component {
  static propTypes = {
    language: PropTypes.string,
  }

  static contextTypes = {
    dictionary: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    if (typeof children !== "string") {
      console.warn("should be string", children)
      return <span>{children}</span>
    }

    return <span>{this.context.dictionary[children] || children}</span>
  }
}

export default LocalizedText
