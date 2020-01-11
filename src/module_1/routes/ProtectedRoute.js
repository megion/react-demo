import React, { Component } from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import PropTypes from "prop-types"
import { moduleName as authModuleName } from "../ducks/auth"

class ProtectedRoute extends Component {
  static propTypes = {
    // from connect
    authorized: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Route {...this.props}>
        {this.renderChildren()}
      </Route>
    )
  }

  renderChildren = () => {
    return this.props.authorized ? (
      this.props.children
    ) : (
      <div>Unauthorized, please login</div>
    )
  }
}

// TODO: pure=false for disable connect shouldComponentUpdate 
export default connect(state => {
  return { authorized: !!state[authModuleName].user }
}, null, null, {pure: false})(ProtectedRoute)
