import React, { Component } from "react"
import PropTypes from "prop-types"

import "./index.less"

class CommentForm extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      user: "",
      text: "",
      submitted: false,
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={`needs-validation ${
          this.state.submitted ? "was-validated" : ""
        }`}
        noValidate
      >

        <div className="form-group">
          <label htmlFor="userName">User</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter name"
            value={this.state.user}
            onChange={this.onChange('user')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="commentTxt">Comment</label>
          <input
            type="text"
            className="form-control"
            id="commentTxt"
            placeholder="Enter comment"
            value={this.state.text}
            onChange={this.onChange('text')}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

  onSubmit = ev => {
    ev.preventDefault()
    this.setState({
      user: "",
      text: "",
      submitted: true,
    })
  }

  onChange = type => ev => {
    const {value} = ev.target
    this.setState({
      [type]: value
    })
  }
}

export default CommentForm
