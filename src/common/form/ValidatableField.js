import React, { Component } from "react"
import PropTypes from "prop-types"

class ValidatableField extends Component {
  static propTypes = {}

  render() {
    const { input, type, className, meta } = this.props
    const errorText =
      meta.error && meta.submitFailed ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null
    return (
      <div>
        <input {...input} type={type} className={className} />
        {errorText}
      </div>
    )
  }
}

export default ValidatableField
