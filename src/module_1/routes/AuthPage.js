import React, { Component, PureComponent } from "react"
import { useParams } from "react-router-dom"
import SignInForm from "../components/Auth/SignInForm"

class AuthPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Auth page</p>
        <SignInForm onSubmit={this.handleSignIn}/>
      </div>
    )
  }

  handleSignIn = () => {
    console.log("--- sign in");
  }
}

export default AuthPage
