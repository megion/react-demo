import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import common from "common" // common library

class NewPersonForm extends Component {
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
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            component={common.ValidatableField}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <Field
            name="lastName"
            component={common.ValidatableField}
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

function validate({ email, firstName }) {
  const errors = {}
  if (!email) {
    errors.email = "email is required"
  }
  if (!firstName) {
    errors.firstName = "first name is required"
  }
  return errors
}

export default reduxForm({
  form: "newPerson",
  validate,
})(NewPersonForm)
