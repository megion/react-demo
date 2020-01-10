import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import common from "common" // common library

class SignUpForm extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component={common.ValidatableField}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component={common.ValidatableField}
            className="form-control"
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

function validate({ email, password }) {
  const errors = {}
  if (!email) {
    errors.email = "email is required"
  }
  if (!password) {
    errors.password = "password is required"
  } else if (password.length < 8) {
    errors.password = "password to short"
  }
  return errors
}

export default reduxForm({
  // a unique name for the form
  form: "singUp",
  validate,
})(SignUpForm)
