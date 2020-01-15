import React, { Component } from "react"
import { connect } from "react-redux"
import SignUpForm from "../components/Auth/SignUpForm"
import Loader from "../components/Loader"
import { signUpRequest, moduleName as authModuleName } from "../ducks/auth"

class SingUpPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <p>Sing up page</p>
        {auth.loading && <Loader />}
        {auth.error && (
          <div style={{ color: "red" }}>
            <code>{JSON.stringify(auth.error, null, 2)}</code>
          </div>
        )}
        <SignUpForm onSubmit={this.handleSignUp} />
      </div>
    )
  }

  handleSignUp = ({ email, password }) => {
    this.props.signUpRequest(email, password)
  }
}

export default connect(
  state => {
    return { auth: state[authModuleName] }
  },
  { signUpRequest } // map reducer function to props
)(SingUpPage)
